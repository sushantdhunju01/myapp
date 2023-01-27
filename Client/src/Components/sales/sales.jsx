import React from 'react';
import './sales.scss';
import Sidebar from '../../Components/sidebar/Sidebar';
import Navbar from '../../Components/navbar/Navbar';
import { DataGrid } from '@mui/x-data-grid';




const columns = [
    { field: 'id', headerName: 'Sno', width: 50 },
    { field: 'BrandName', headerName: 'Brand name', width: 200 },
    { field: 'MostSoldProduct', headerName: 'Most Sold Product', width: 200 },
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
    }
  ];
  
  

const Sales = ({salesdata}) => {
  if(salesdata.length === 0 ){
    return null
  }
  return (
    <div className='salesdata'>
    <Sidebar/>
    <div className="salescontainer">
    <Navbar/>
    <div className='tabledata'>
      <DataGrid 
      rows= {salesdata}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
    
    />

     
    </div>
    </div>
</div>
  )
}

export default Sales