import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Slideshow from "@/components/Catogerios/Catogeris";
import Carousel from "@/components/Carousel/Carousel";
import Products from "@/components/FeatureProducts/Products";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import naruto1 from "@/public/images/naruto/naruto1.png"

import axios from "axios"
export default function Home() {


// const products = useSelector(selectAllProducts)
//   useEffect(()=>{
//    console.log("outside function", products)
//   },[])

 //dont call useSelector inside any fuction which you create in home functon



  return (
    <>
      
      <Carousel/>
      <Slideshow/>
  
      <div className={styles.img3}>
       {/* <img src="https://images3.alphacoders.com/667/thumb-1920-667142.jpg" alt="" /> */}
       <h3>Shop Now 
       <Image src={naruto1} className={styles.naruto}></Image>
       </h3>
       <p>
       Welcome to our anime clothing store, where fashion meets your favorite anime characters! Get ready to express your love for anime with our stylish and unique clothing collection. Embrace your inner otaku in style! 🌟
       </p>
       
      </div>
 
      <Products/>
      
      {/* <div className={styles.banner2}></div> */}
    </>
  );
}
