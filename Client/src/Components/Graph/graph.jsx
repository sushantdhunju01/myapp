import React from 'react'
import './graph.scss'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     name: 'Jan',
//     Total: 1000
//   },
//   {
//     name: 'Feb',
//     Total: 1000
//   },
//   {
//     name: 'March',
//     Total: 800
//   },
//   {
//     name: 'April',
//     Total: 700
//   },
//   {
//     name: 'May',
//     Total: 1500
//   },
// ];
const Graph = ({salesdates}) => {
  return (
    <div className='graph'>
      <div className="title"> <h1>Sales Chart</h1></div>
        <ResponsiveContainer width="100%" aspect={2/1}>
        <AreaChart width={730} height={250} data={salesdates}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total_sales" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
   
  </defs>
  <XAxis dataKey= "month"/>
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" className='graphgrid' />
  <Tooltip />
  <Area type="monotone" dataKey="total_sales" stroke="#8884d8" fillOpacity={1} fill="url(#total_sales)" />
  
</AreaChart>
      </ResponsiveContainer>
        </div>
  )
}

export default Graph