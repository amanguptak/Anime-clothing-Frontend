import React, { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import NotAvilable from "@/components/NotAvilable/NotAvilable";
import { useSelector,useDispatch } from "react-redux";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";
import Link from "next/link";
import styles from "./success.module.scss"
import {
  selectCartData,
  
 
  getTotals,
  TotalPrice
} from "@/features/cartSlice";
import axios from "axios"
import {selectShippingInfo} from "@/features/checkoutSlice"
const PaymentConfirm = () => {
  const router = useRouter();
  const  { reference } = router.query;
  console.log("check12", reference);
  sessionStorage.setItem("tId", reference);
  const address = useSelector(selectShippingInfo)
  const orderdProducts = useSelector(selectCartData)
  const totalPrice = useSelector(TotalPrice)
  console.log("addcheck1",orderdProducts)
  // const tid=
  const paymentInfo = {
    id:sessionStorage.getItem("tId"),
    status:"paid"
  }
  const orderCreate = ()=>{
    const shippingInfo = {
      address:address.address,
      locality:address.address,
      state:address.state,
      country:address.Country,
      pinCode:address.zip,
      phoneNo:9876543210
    }

    const data = {
      shippingInfo:shippingInfo,
      orderItems:orderdProducts,
      paymentInfo:paymentInfo,
      itemsPrice:totalPrice,
      taxPrice:0,
      shippingCharge:0,
      totalPrice:totalPrice

    }
    axios.post("http://localhost:8000/api/order",data,{withCredentials:true,}).then((res)=>{
     console.log(res.data,"checking")
     if(res.data.success){
      toast.success("Redirecting to OrderPage")
      setTimeout(() => {
        router.push("/myaccount")
      }, "3000");
     }
    }).catch((err)=>{
        console.log(err)
    })
  }
  

  return (
    <Fragment>
     
      <div className={styles.container}>
  <div className={styles.printerTop}></div>
    
  <div className={styles.paperContainer}>
    <div className={styles.printerBottom}></div>

    <div className={`${styles.paper} shadow-none p-2 pb-2 bg-light rounded`}>
      <div className={styles.mainContents}>
        <div className={styles.successIcon}>&#10004;</div>
        <div className={styles.successTitle}>
          Payment Complete
        </div>
        <div className={styles.successDescription}>
        Congratulations on your successful payment! 🎉 Your stylish new clothing items are on their way to you. Get ready to rock your new looks with confidence! If you have any questions or need assistance with anything else, feel free to ask. Happy shopping and enjoy your fashionable outfits! 🛍️💃👕👖
        </div>
        <div className={styles.orderDetails}>
          <div className={styles.orderNumberLabel}>Transaction ID</div>
          <div className={styles.orderNumber}>{reference}</div>
        </div>
        <div className={styles.orderFooter}>Thank you!</div>
        <button onClick={orderCreate} className="btn btn-success mb-2">Please Click for Save Order</button>
      </div>
      <div className={styles.jaggedEdge}></div>
    </div>
  </div>
</div>
     
    </Fragment>
  );
};

export default PaymentConfirm;
