const fs = require('fs');
const path = require('path')
const { parse } = require("csv-parse");
const mysql = require("mysql");



let db_con = mysql.createPool({
    connectionLimit: 20,
    host: "localhost",
    user: "root",
    password: "your_new_password",
    port: '3306',
    database:"uday"
  });


let productsdata = [];
let salesdata = [];



const dirpath = path.join(__dirname, 'Data_incoming');

setInterval(()=>{
    fs.readdir(dirpath, (err, files) =>{
        if(err){
            console.log(err);
        }
        else{          
           const pattern1 = /products_\d+/i; 
            files.forEach(file => {
                if (file.split('.').pop() == 'csv') {   
                    if (pattern1.test(file.split('.').shift())) {
                        fs.createReadStream(`${dirpath}/${file}`)
                        .pipe(parse({ delimiter: ",", from_line: 2 }))
                        .on("data", function (data) {
                            productsdata.push(data)
                            db_con.query("Insert into product (product_id, product_name, brand_name, cost_price, selling_price, category, expiry_date) values ?", [productsdata], (err, result) => {
                              if (err){
                                console.log(err)
                                }
                                fs.unlinkSync(`${dirpath}/${file}`);
                            })                      
                        })
                        .on("error", function (error) {
                          console.log(error.message);
                        });
                    }    
                }
            })
        }
    })
}, 3000)

setInterval(()=>{
    fs.readdir(dirpath, (err, files) =>{
        if(err){
            console.log(err);
        }
        else{
            const pattern2 = /sales_\d+/i; 
            files.forEach(file => {
                if (file.split('.').pop() == 'csv') {
                    if (pattern2.test(file.split('.').shift())) {
                        fs.createReadStream(`${dirpath}/${file}`)
                        .pipe(parse({ delimiter: ",", from_line: 2 }))
                        .on("data", function (data) {
                            salesdata.push(data)
                            db_con.query("Insert into sales (transaction_id, product_id, quantity, total_transacion_amount, transaction_date) values ?", [salesdata], (err, result) => {
                              if (err){
                                console.log(err)
                                }
                                fs.unlinkSync(`${dirpath}/${file}`);
                            })                      
                        })
                        .on("error", function (error) {
                          console.log(error.message);
                        }); 
                    }                    
                 
                }
            })  
        }
    })
}, 1000)







