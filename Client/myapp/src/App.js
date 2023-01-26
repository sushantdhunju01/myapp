import Home from './pages/Home/home';
import Products from './Components/products/products';
import Sales from  './Components/sales/sales';
import './style/style.scss';
import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';

import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";



function App() {
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
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
         <Route path='/'>
         <Route index element={<Home/>}/>
         <Route path='products' element={<Products/>}/>
         <Route path='sales' element={<Sales/>}/>
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
