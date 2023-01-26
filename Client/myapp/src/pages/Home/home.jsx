import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import Widgets from '../../Components/widgets/Widgets'
import Chart from '../../Components/Charts/Chart'
import Graph from '../../Components/Graph/graph'
import './home.scss'



const Home = (prop) => {

  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
        <Navbar/>
            <Widgets />
            <div className="chartdata">
              <Chart />
              <Graph/>
            </div>
           
    </div>
    </div>
  )
}

export default Home