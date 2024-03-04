import React, { useState, useEffect } from "react";
import styles from "./product.module.scss";
import dynamic from "next/dynamic";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import toast from "react-hot-toast";
import {addToCart} from "@/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import TotalRating from "../TotalRating/TotalRating";
import {
  getProducts,
  selectFeatureProducts,
  selectLoading,
} from "@/features/products/productSlice";
import Loader from "../Loader/Loader";



const Products = () => {
  const products = useSelector(selectFeatureProducts);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
const handleCart = (product)=>{
  const payload = {
    id: product._id,
    name: product.name,
    description: product.description,
    price:product.price,
    images:product.images,
    category:product.category,


   }
   dispatch(addToCart(payload))
   toast.success(`${product.name} added to your cart 🛒`)
}
  useEffect(() => {
    dispatch(getProducts(6));
  }, [dispatch, getProducts]);
  return (
    <>
     

      {loading === true ? (
        <Loader />
      ) : (
        <>
          <section>
            <div id="shop-now" className="container">
               <h3 className={styles.heading}>Feature Products</h3>
              <div className="row" >
                {products?.map((product, key) => (
                  <div
                    className={`${styles.cardData} col-lg-4  col-6 mt-3 d-flex...`}
                  >
               
                    <div class={styles.card}>
                      <Link
                        className={styles.productLink}
                        href={`/productDetails/${product._id}`}
                      >
                        <div class={styles.cardImg}>
                          <img
                            className={styles.img}
                            src={product?.images[0].url}
                            alt=""
                          />
                        </div>
                      </Link>
                      <div class={styles.cardInfo}>
                        <p class={styles.textTitle}>{product.name} </p>
                       
                      </div>

                      <div class={styles.cardFooter}>
                        {/* <TotalRating totalRating={product.ratings} /> */}

                        <span class={styles.textTitle}>₹{product.price}</span>
                        <div class={styles.cardButton} onClick={()=>handleCart(product)} >
                       <svg class="svg-icon" viewBox="0 0 20 20">
                            <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                            <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                            <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                          </svg>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View More */}

              <div className={`${styles.viewMore} m-4`}>
                <Link href="/allproducts" className={styles.productLink}>
                  <button class={styles.more}>
                    {" "}
                    View More
                    <div class={styles.icon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </Link>{" "}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Products */}

      {/* Feature */}

      <section className="mt-5" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container text-dark pt-3">
          <header className="pt-4 pb-3">
            <h3>Why choose us</h3>
          </header>

          <div className={`${styles.about} row mb-4"...`}>
            <div className="col-lg-4 col-md-6">
              <figure className="d-flex align-items-center mb-4">
                <span className="rounded-circle bg-white p-3 d-flex me-2 mb-2">
                  <i className="fas fa-camera-retro fa-2x fa-fw floating" />
                </span>
                <figcaption className="info">
                  <h6 className="title">Reasonable prices</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do eiusmor
                  </p>
                </figcaption>
              </figure>
              {/* itemside // */}
            </div>
            {/* col // */}
            <div className="col-lg-4 col-md-6">
              <figure className="d-flex align-items-center mb-4">
                <span className="rounded-circle bg-white p-3 d-flex me-2 mb-2">
                  <i className="fas fa-star fa-2x fa-fw  floating" />
                </span>
                <figcaption className="info">
                  <h6 className="title">Best quality</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do eiusmor
                  </p>
                </figcaption>
              </figure>
              {/* itemside // */}
            </div>
            {/* col // */}
            <div className="col-lg-4 col-md-6">
              <figure className="d-flex align-items-center mb-4">
                <span className="rounded-circle bg-white p-3 d-flex me-2 mb-2">
                  <i className="fas fa-plane fa-2x fa-fw floating" />
                </span>
                <figcaption className="info">
                  <h6 className="title">Worldwide shipping</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do eiusmor
                  </p>
                </figcaption>
              </figure>
              {/* itemside // */}
            </div>
            {/* col // */}
            <div className="col-lg-4 col-md-6">
              <figure className="d-flex align-items-center mb-4">
                <span className="rounded-circle bg-white p-3 d-flex me-2 mb-2">
                  <i className="fas fa-users fa-2x fa-fw  floating" />
                </span>
                <figcaption className="info">
                  <h6 className="title">Customer satisfaction</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do eiusmor
                  </p>
                </figcaption>
              </figure>
              {/* itemside // */}
            </div>
            {/* col // */}
            <div className="col-lg-4 col-md-6">
              <figure className="d-flex align-items-center mb-4">
                <span className="rounded-circle bg-white p-3 d-flex me-2 mb-2">
                  <i className="fas fa-thumbs-up fa-2x fa-fw  floating" />
                </span>
                <figcaption className="info">
                  <h6 className="title">Happy customers</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do eiusmor
                  </p>
                </figcaption>
              </figure>
              {/* itemside // */}
            </div>
            {/* col // */}
            <div className="col-lg-4 col-md-6">
              <figure className="d-flex align-items-center mb-4">
                <span className="rounded-circle bg-white p-3 d-flex me-2 mb-2">
                  <i className="fas fa-box fa-2x fa-fw  floating" />
                </span>
                <figcaption className="info">
                  <h6 className="title">Thousand items</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do eiusmor
                  </p>
                </figcaption>
              </figure>
              {/* itemside // */}
            </div>
            {/* col // */}
          </div>
        </div>
        {/* container end.// */}
      </section>
      {/* Feature */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Products), { ssr: false });
// export default ;
