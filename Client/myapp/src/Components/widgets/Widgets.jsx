import React from 'react'
import "./widgets.scss";
import AccessTimeIcon from '@mui/icons-material/AccessTime';


const Widgets =  ({productdata, salesdates}) => {
  if(productdata === undefined || salesdates === undefined){
    return null
  }
  let topprofit = productdata.reduce((previous, current) => {
    return current.TotalProfit > previous.TotalProfit ? current : previous;
  });

  let leastprofit = productdata.reduce((previous, current) => {
    return current.TotalQuantitySold < previous.TotalQuantitySold ? current : previous;
  });

  let dateprofit = salesdates.reduce((previous, current) => {
    return current.total_sales < previous.total_sales ? current : previous;
  });

  let dateloss = salesdates.reduce((previous, current) => {
    return current.total_sales < previous.total_sales ? current : previous;
  });
 
  return (
    <div className='widget'>
        <div className='widgetitem'>
          <div className='item'>
            <div>Most Profitable Product</div>
            <div><h2>{topprofit.productname}</h2></div>
            </div>
          <div className='item'>
          
          <div style={{ color: 'green', fontWeight: 30 }}>${topprofit.TotalProfit}</div>
            
          </div>
        </div>

        <div className='widgetitem'>
          <div className='item'>
            <div>Least Profitable product</div>
            <div><h2>{leastprofit.productname}</h2></div>
            </div>
          <div className='item'>
          <div style={{ color: 'red', fontWeight: 30 }}>${leastprofit.TotalProfit}</div>
          </div>
        </div>

        <div className='widgetitem'>
          <div className='item'>
            <div>Date of highest sales </div>
            <div style={{color: "green"}}>{dateprofit.month}</div>
            </div>
          <div className='item'>
          <div style={{color: "green"}}><AccessTimeIcon/></div>
            
          </div>
        </div>

        <div className='widgetitem'>
          <div className='item'>
            <div>Date of least sales</div>  
            <div style={{color: "Red"}}>{dateloss.month}</div>
            </div>
          <div className='item'>
          <div style={{color: "Red"}}><AccessTimeIcon/></div>
          </div>
        </div>

    </div>
    
  )
}

export default Widgets