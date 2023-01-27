import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import Widgets from '../../Components/widgets/Widgets'
import Chart from '../../Components/Charts/Chart'
import Graph from '../../Components/Graph/graph'
import './home.scss'



const Home = ({productdata, salesdates}) => {
  if(productdata.length === 0 || JSON.stringify(productdata) === "{}" || salesdates.length === 0 || JSON.stringify(salesdates) === "{}" ){
    return null
  }
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
        <Navbar/>
            <Widgets productdata = {productdata} salesdates = {salesdates}/>
            <div className="chartdata">
              <Chart table = {productdata.map((value)=>{ return value.TotalRevenue})} />
              <Graph salesdates = {salesdates}/>
            </div>
           
    </div>
    </div>
  )
}

export default Home