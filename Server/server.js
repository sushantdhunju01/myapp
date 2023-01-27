const express = require('express');
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const e = require('express');


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))


const db_fetch = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"your_new_password",
    port: "3306",
    database: "dashboard"
  })
  
  
  app.get('/salesbyproduct', async (req, res) => {
     try{
       db_fetch.query("SELECT products.product_id, products.product_name as productname, products.brand_name as brandname, products.category as category, SUM(sales.quantity) as TotalQuantitySold, SUM(sales.total_transaction_amount) as TotalRevenue, SUM(sales.total_transaction_amount - (products.cost_price * sales.quantity)) as TotalProfit FROM products JOIN sales ON products.product_id = sales.product_id GROUP BY products.product_id, products.product_name, products.brand_name, products.category", (err, result) => {
        if(err){
          console.log(err)
        }
        else {
          res.json(result)
        }
       })   
     } 
     catch(e) {
      console.log(e)
       res.sendStatus(500)
     }
  });

  app.get('/salesbybrand', async (req, res) => {
    try{
      db_fetch.query("SELECT products.brand_name as BrandName , MAX(products.product_name) as MostSoldProduct, SUM(sales.quantity) as TotalQuantitySold, SUM(sales.total_transaction_amount) as TotalRevenue, SUM(sales.total_transaction_amount - (products.cost_price * sales.quantity)) TotalProfit FROM products JOIN sales ON products.product_id = sales.product_id GROUP BY products.brand_name;", (err, result) => {
       if(err){
         console.log(err)
       }
       else {
        res.json(result)
       }
      })   
    } 
    catch(e) {
     console.log(e)
      res.sendStatus(500)
    }
 });


 app.get('/salesdates', async (req, res) => {
  try{
    db_fetch.query("SELECT transaction_date, SUM(total_transaction_amount) as total_sales FROM sales GROUP BY transaction_date", (err, result) => {
     if(err){
       console.log(err)
     }
     else {
      res.json(result)
     }
    })   
  } 
  catch(e) {
    console.log(e)
    res.sendStatus(500)
  }
});
  

app.listen(process.env.PORT || '5000', ()=> {
    console.log(`Server is running on port: ${process.env.PORT || '5000'}`);
    console.log("Database Connected!");
});
 