import React from 'react'
import "./widgets.scss";
import AccessTimeIcon from '@mui/icons-material/AccessTime';


const Widgets =  () => {
  
  
  return (
    <div className='widget'>
        <div className='widgetitem'>
          <div className='item'>
            <div>Most Profitable Product</div>
            <div>Product</div>
            </div>
          <div className='item'>
          
          <div style={{ color: 'green', fontWeight: 30 }}>$1000</div>
            
          </div>
        </div>

        <div className='widgetitem'>
          <div className='item'>
            <div>Least Profitable product</div>
            <div>Product</div>
            </div>
          <div className='item'>
          <div style={{ color: 'red', fontWeight: 30 }}>$1000</div>
          </div>
        </div>

        <div className='widgetitem'>
          <div className='item'>
            <div>Date of highest sales </div>
            <div>Date</div>
            </div>
          <div className='item'>
          <div><AccessTimeIcon/></div>
            
          </div>
        </div>

        <div className='widgetitem'>
          <div className='item'>
            <div>Date of least sales</div>  
            <div>Date</div>
            </div>
          <div className='item'>
          <div><AccessTimeIcon/></div>
          </div>
        </div>

    </div>
    
  )
}

export default Widgets