import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const testing = () => {
  return (
  <div className='row' >
 
  <div className="col-5 cardt     mx-1" >

   
    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwhpPlaWWsTxqtpni22IkbTsNwLf96dHmCw&usqp=CAU" className=" img-1 image-fluid"alt="" />
    <div className="data">
    <ShoppingCartIcon id= "myIcon" />
    <p>Kakashi t-shirt</p>
    <p>$30.98</p>
    </div>
    

    </div>

    <div className="col-5  m-1">
  
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwhpPlaWWsTxqtpni22IkbTsNwLf96dHmCw&usqp=CAU" className=" shadow rounded img-1 image-fluid"alt="" />
    <ShoppingCartIcon/>

    </div>

</div>



  )
}

export default testing