import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSelector,useDispatch } from "react-redux";
import {selectUserData} from "@/features/userSlice"
import { useEffect } from "react";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PaymentIcon from '@mui/icons-material/Payment';
import Button from "@mui/material/Button";
import styles from "./checkout.module.scss"
import toast from "react-hot-toast";
import { useRouter } from 'next/router';
import {
  selectCartData,
  getTotals,
  TotalPrice
} from "@/features/cartSlice";
import {selectShippingInfo} from "@/features/checkoutSlice"
import axios from 'axios';
export default function PaymentForm() {
  const dispatch = useDispatch()
  const address = useSelector(selectShippingInfo)
  const products = useSelector(selectCartData)
  const totalPrice = useSelector(TotalPrice)
  const userProfile = useSelector(selectUserData)
  const [order,setOrder] = React.useState({})
  const router = useRouter()
  const handleCheckout = async (price)=>{
    // e.preventDefault();
    const config = { headers: { "Content-Type": "application/json" } };
     const res = await axios.post("https://ecommerse-backend-production.up.railway.app/api/checkout",{amount:price},{withCredentials:true},config)
     const {data:{key}} = await axios.get("https://ecommerse-backend-production.up.railway.app/api/getPay",{withCredentials:true},config)
     setOrder(res?.data?.order)
     console.log("ordercheck",order,key)
     var options = {
      key:"rzp_test_s6PEht1t55AFKz", // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "animeUchicha Clothing",
      description: "buying products ",
      image: "https://ibb.co/sQHnXQZ",
      order_id: order?.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "https://ecommerse-backend-production.up.railway.app/api/paymentverification",
      prefill: {
          name: userProfile?.name,
        email: userProfile?.email,
         contact: userProfile?.mobileNo
      },
      notes: {
          "address": "Razorpay Corporate Office"
      },
      theme: {
          "color": "#ED2648"
      }
  };
  var rzp1 = new window.Razorpay(options);

  rzp1.open()
  }
const handleCOD = ()=>{
toast.success("Order Placed Redirecting...")
}
const handleCheckout1 = (price)=>{
  toast.success(`Order Placed ${price}Rs Redirecting to home...`)
  setTimeout(()=>{
   router.push("/")
  },2000)

}

  return (
    
    <div className=''>
            <Button
                  variant="contained"
                  type="submit"
                  // onClick={handleClick}
                  className={styles.addressBtn}
                  sx={{ mt: 3, ml: 1 ,  background:"#ecd448",color:"black"
                  ,borderRadius:"15px",
                  "textTransform":"none"
                   ,'&:hover':{background:"#ed2749",color:"white"}}}
                   onClick={()=>{handleCheckout(totalPrice)}}
                >
               Pay Now  <PaymentIcon sx={{fontSize:"18px"}} className='mx-1'/>
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  // onClick={handleClick}
                  className={`${styles.addressBtn} `}
                  sx={{ mt: 3, ml: 1 ,  background:"#ecd448",color:"black"
                  ,borderRadius:"15px",
                  "textTransform":"none"
                   ,'&:hover':{background:"#ed2749",color:"white"}}}
                   onClick={()=>{handleCOD(totalPrice)}}
                >
              COD
                </Button>
 
    </div>
  );
}