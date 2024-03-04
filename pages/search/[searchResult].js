import React, { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import NotAvilable from "@/components/NotAvilable/NotAvilable";
import {
  selectAllProducts,

  getSearchProducts,
  selectLoading,
} from "@/features/products/productSlice";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import Link from "next/link";
import AllProducts from "@/components/AllProducts/allProducts";
import Loader from "@/components/Loader/Loader";
import styles from "./search.module.scss";
const searchResult = () => {
  const router = useRouter();
  let searchKeyword = router.query.searchResult;

  const dispatch = useDispatch();
  const searchProducts = useSelector(selectAllProducts);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getSearchProducts(searchKeyword));
  }, [dispatch, searchKeyword]);

  return (
    <Fragment>
      <header>
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              'url("https://i.pinimg.com/originals/ef/33/71/ef33719bb2c1dd51dd895df861bdc98f.jpg")',
            height: "auto",
            backgroundSize: "cover",
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100 p-5">
              <div className={styles.heading}>
                <h1 className="mb-3">Your Search Result</h1>
                <Link
                  href="/allproducts"
                  className="btn btn-outline-light btn-md"
                >
                  Back to Products
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Background image */}
      </header>

      <div className={styles.searchProducts}>
        {loading == true ? (
          <Loader />
        ) : (
          
            searchProducts?.length >0 ?<AllProducts Products={searchProducts} />:<NotAvilable/>
          
        
        )}
      </div>
    </Fragment>
  );
};

export default searchResult;
