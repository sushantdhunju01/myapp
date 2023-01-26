import React from 'react';
import './products.scss';
import Sidebar from '../../Components/sidebar/Sidebar';
import Navbar from '../../Components/navbar/Navbar';
import { DataGrid } from '@mui/x-data-grid';
// import { useState, useEffect} from 'react';
// import axios from 'axios';





const columns = [
    { field: 'product_id', headerName: 'ID', width: 50 },
    { field: 'productname', headerName: 'Product name', width: 150 },
    { field: 'brandname', headerName: 'Brand name', width: 150 },
    {
      field: 'category',
      headerName: 'Category',
  
      width: 150,
    },
    {
      field: 'TotalQuantitySold',
      headerName: 'Total Quantity Sold',

      width: 200,
    },
    {
      field: 'TotalRevenue',
      headerName: 'Total Revenue',
      width: 200,
    },
    {
      field: 'TotalProfit',
      headerName: 'Total Profit',
      width: 200,
    },
  ];
  

const Products = (prop) => {
  return (
    <div className='Productdata'>
    <Sidebar/>
    <div className="productcontainer">
    <Navbar/>
    <div className='tabledata'>

      <DataGrid 
      getRowId={(row) => row?.product_id}
      rows= {prop.tabledata}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
    
    />
    </div>
    </div>
</div>
  )
}

export default Products