const fs = require('fs');
const path = require('path')
const { parse } = require("csv-parse");
const mysql = require("mysql");


const pool  = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'your_new_password'
  });



  // check if the database exists
  pool.query(`SHOW DATABASES LIKE ?`, ['dashboard'], (err, rows) => {
    if (err) {
      console.error('Error checking if the database exists: ' + err.stack);
      return;
    }
    if (rows.length === 1) {
      console.log('The database exists.');
    } else {
      console.log('The database does not exist.');
      // create the database
      pool.query(`CREATE DATABASE dashboard`, (err) => {
        if (err) {
          console.error('Error creating the database: ' + err.stack);
          return;
        }
        console.log("Database created")
        // Create Products Table
        pool.query(`CREATE TABLE dashboard.products (product_id INT NOT NULL AUTO_INCREMENT, product_name VARCHAR(45) ,brand_name VARCHAR(45), cost_price FLOAT ,selling_price FLOAT , category VARCHAR(45), expiry_date DATE, PRIMARY KEY (product_id));`, (err) => {
          if (err) {
            console.error('Error creating the table: ' + err.stack);
            return;
          }
          console.log('Product table has been created.');
        });
        
        // Create Sales Table
        pool.query(`CREATE TABLE dashboard.sales (transaction_id INT NOT NULL, product_id INT NOT NULL, quantity float NOT NULL, total_transaction_amount float NOT NULL, transaction_date DATE NOT NULL, FOREIGN KEY (product_id) REFERENCES dashboard.products(product_id), PRIMARY KEY (transaction_id));`, (err) => {
          if (err) {
            console.error('Error creating the table: ' + err.stack);
            return;
          }
          console.log('Sales table has been created.');
          portclose();
        });
      }); 
    }
  });
  
function portclose() {
    pool.end((err) => {
    if(err) console.log(err);
  });
}
  



let db_con = mysql.createPool({
    connectionLimit: 20,
    host: "localhost",
    user: "root",
    password: "your_new_password",
    port: '3306',
    database:"dashboard"
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
          if (files.length === 0){
            console.log("No csv file named Products found!")
          } else {   
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
        }
    })
}, 60000)

setInterval(()=>{
    fs.readdir(dirpath, (err, files) =>{
        if(err){
            console.log(err);
        }
        else{
          if (files.length === 0){
            console.log("No csv file named Sales found!")
          } else {
            const pattern2 = /sales_\d+/i; 
            files.forEach(file => {
                if (file.split('.').pop() == 'csv') {
                    if (pattern2.test(file.split('.').shift())) {
                        fs.createReadStream(`${dirpath}/${file}`)
                        .pipe(parse({ delimiter: ",", from_line: 2 }))
                        .on("data", function (data) {
                            salesdata.push(data)
                            db_con.query("Insert into sales (transaction_id, product_id, quantity, total_transaction_amount, transaction_date) values ?", [salesdata], (err, result) => {
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
        }
    })
}, 90000)







