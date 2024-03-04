import React, { Fragment } from "react";
import Link from "next/link";
import TotalRating from "../TotalRating/TotalRating";
import styles from "./allproducts.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/features/cartSlice";
import toast from "react-hot-toast";
const allProducts = ({ Products }) => {
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
  return (
    <Fragment>
      {Products.map((product, key) => (
        <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
          <div className="card w-100 my-2 shadow-2-strong mx-2">
            <Link href={`/productDetails/${product._id}`}>
              <img src={product?.images[0]?.url} className="card-img-top" />
            </Link>
            
            <div className="card-body d-flex flex-column">
              <h5 className="card-title mb-2">{product?.price}Rs</h5>
              <TotalRating totalRating={product.ratings} />
              <p className="card-text">{product.name}</p>
              <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
              <button className={`${styles.button} btn  shadow-0  ...`}
                  href="/cart"
                  onClick={()=>handleCart(product)}>
                     <svg class={styles.cartIcon} viewBox="0 0 576 512">
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                  </svg>
                  </button>
                {/* <Link
                 
                >
                 
                </Link> */}

                <Link
                  href="/cart"
                  className="btn btn-light border icon-hover px-2 pt-2 m-2"
                >
                  <i className="fas fa-heart fa-lg text-secondary px-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default allProducts;
