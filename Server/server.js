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
    database: "uday"
  })
  
  
  app.get('/salesbyproduct', async (req, res) => {
     try{
       db_fetch.query("SELECT product.product_id, product.product_name as productname, product.brand_name as brandname, product.category as category, SUM(sales.quantity) as TotalQuantitySold, SUM(sales.total_transacion_amount) as TotalRevenue, SUM(sales.total_transacion_amount - (product.cost_price * sales.quantity)) as TotalProfit FROM product JOIN sales ON product.product_id = sales.product_id GROUP BY product.product_id, product.product_name, product.brand_name, product.category", (err, result) => {
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
      db_fetch.query("SELECT product.brand_name as BrandName , MAX(product.product_name) as MostSoldProduct, SUM(sales.quantity) as TotalQuantitySold, SUM(sales.total_transacion_amount) as TotalRevenue, SUM(sales.total_transacion_amount - (product.cost_price * sales.quantity)) TotalProfit FROM product JOIN sales ON product.product_id = sales.product_id GROUP BY product.brand_name;", (err, result) => {
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
    db_fetch.query("SELECT transaction_date, SUM(total_transacion_amount) as total_sales FROM sales GROUP BY transaction_date", (err, result) => {
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

});
 