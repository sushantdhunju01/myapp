import React from 'react';
import './sales.scss';
import Sidebar from '../../Components/sidebar/Sidebar';
import Navbar from '../../Components/navbar/Navbar';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect} from 'react';
import axios from 'axios';






const columns = [
    { field: 'Sno', headerName: 'Sno', width: 50 },
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
  

const Sales = () => {
  

  const [data, setData] = useState({})
  
  const loadData = async () => {
    const response = await axios.get("/salesbybrand");
    setData(response.data)
    console.log(response.data)
  }
  useEffect(()=>{
     loadData()
    }, [])

  return (
    <div className='salesdata'>
    <Sidebar/>
    <div className="salescontainer">
    <Navbar/>
    <div className='tabledata'>
    
     
      <DataGrid 
      getRowId={(row) => Math.floor(Math.random() * 100) + 1}
      rows= {data}
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