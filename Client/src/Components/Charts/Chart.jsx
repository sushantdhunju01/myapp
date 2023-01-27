import React from 'react'
import './Chart.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const Chart = (tabledata) => {
  let revenuetotal = tabledata.table.reduce((total, num)=>{return total+num}, 0);
  return (
    <div className='chart'>
        <div className="top">
           <h3 className="tittle">Total Revenue</h3>
           <DragIndicatorIcon/> 
        </div>
        <div className="bottom">
        <CircularProgressbar value={revenuetotal} maxValue={100000000} text={'$'+ revenuetotal} strokeWidth={5}/>;
        <div className='details'>
        <p className="title">100 million Circle</p>
        </div>
        </div>
    </div>
  )
}

export default Chart