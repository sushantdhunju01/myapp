import Home from './pages/Home/home';
import Products from './Components/products/products';
import Sales from  './Components/sales/sales';
import './style/style.scss';
import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import axios from 'axios';
import moment from 'moment';
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";


function App() {
  
  const [salesdates, setsalesdate] = useState([]);
  const [productdata, setProductData] = useState([]);
  const [salesdata, setSalesData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAlert(true);
    }, 90000);
    return () => clearInterval(interval);
  }, []);

  const handleReload = () => {
    window.location.reload();
  }

  const action = (

    <React.Fragment>
          {showAlert && (
          <div>
      <Button style={{color: "teal"}} size="small" onClick={handleReload}>
        RELOAD
      </Button>
      
      </div>
      )}
      
    </React.Fragment>
 
  );

  const loadproductData = async () => {
    const response = await axios.get("/salesbyproduct");
    setProductData(response.data)
    
  };

  const loadsalesData = async () => {
    const response = await axios.get("/salesbybrand");
  
    setSalesData(response.data.map((item,index)=> {
       return {id:index+1,...item}
    }))
 
  };

  const loadsalesdate = async () => {
    const response = await axios.get("/salesdates");
    setsalesdate(response.data.map(item => {
      const month = moment(item.date).format("DD MMMM");
      return { ...item, month };
    }));
  }
  
  useEffect(()=>{
    loadproductData();
    loadsalesData();
    loadsalesdate();
    }, [])


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
         <Route path='/'>
         <Route index element={<Home productdata ={productdata} salesdates = {salesdates}/>}/>
         <Route path='products' element={<Products productdata ={productdata}/>}/>
         <Route path='sales' element={<Sales salesdata={salesdata}/>}/>
         </Route>
      </Routes>
      </BrowserRouter>
      <div>
        <Snackbar
  open={showAlert}
  autoHideDuration={6000}
  message="Data Obtained , Please refresh"
  action={action}
/>
      
    </div>
    </div>
  );
}

export default App;
