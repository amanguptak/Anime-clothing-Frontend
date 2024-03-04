import React, { useEffect, useState } from "react";
import styles from "./list.module.scss";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import Link from "next/link";
import NotAvilable from "../NotAvilable/NotAvilable";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import {
  selectAllProducts,
  getAllProducts,
  productCount,
  selectLoading,
  getFilterProductsCount,
} from "@/features/products/productSlice";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import Loader from "../Loader/Loader";
import Search from "../Search/Search";
import AllProducts from "../AllProducts/allProducts";


const productList = () => {
  const router = useRouter();
  let searchKeyword = router.query.searchResult;
  const breadcrumbData = {
    heading: "All Collections",
    link1: "Home",
    CurrentPage: "All Products",
  };
  const dispatch = useDispatch();
  const allProducts = useSelector(selectAllProducts);
  
  const totalProducts = useSelector(productCount);
  const loading = useSelector(selectLoading);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  let count = useSelector(getFilterProductsCount) 
  const perPage = 6;
  const pageNo = Math.ceil(totalProducts/perPage);
  

  const [price, setPrice] = React.useState([0, 3000]);

  const marks = [
    {
      value: 0,
      label: 'Min',
    },
   
    {
      value: 3000,
      label: 'Max',
    },
  ];

  const handleChangePrice = (event, newPrice) => {
    setPrice(newPrice);
    setPage(1)
  };

  useEffect(() => {
    console.log('setPage',page)
    dispatch(getAllProducts({page,price}));
    // dispatch(getSearchProducts({price}))
  }, [dispatch, page,price]);

  return (
    <div>
      {/*Main Navigation*/}
      <header>
        <BreadCrumb data={breadcrumbData} />
        {/* <Search/> */}
      </header>
      {/* sidebar + content */}
      <section className>
        <div className="container">
          <div className="row">
            {/* sidebar */}
            <div className="col-lg-3">
              {/* Toggle button */}
              <button
                className="btn btn-outline-secondary mb-3 w-100 d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span>Show filter</span>
              </button>
              {/* Collapsible wrapper */}
              <div
                className="collapse card d-lg-block mb-5"
                id="navbarSupportedContent"
              >
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item"></div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button text-dark bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        Category
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingTwo"
                    >
                      <div className="accordion-body">
                        <div>
                          {/* Checked checkbox */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="flexCheckChecked1"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked1"
                            >
                              T-shirts{" "}
                            </label>
                            <span className="badge badge-secondary float-end">
                              120
                            </span>
                          </div>
                          {/* Checked checkbox */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="flexCheckChecked2"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked2"
                            >
                              Anime T-shirts
                            </label>
                            <span className="badge badge-secondary float-end">
                              15
                            </span>
                          </div>
                          {/* Checked checkbox */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="flexCheckChecked3"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked3"
                            >
                              OverSized T-shirts
                            </label>
                            <span className="badge badge-secondary float-end">
                              35
                            </span>
                          </div>
                          {/* Checked checkbox */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="flexCheckChecked4"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked4"
                            >
                              Women T-shirts
                            </label>
                            <span className="badge badge-secondary float-end">
                              89
                            </span>
                          </div>
                          {/* Default checkbox */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button text-dark bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        Price
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingThree"
                    >
                      <div className="accordion-body">
                        <Slider
                          value={price}
                          onChange={handleChangePrice}
                          valueLabelDisplay="auto"
                          aria-labelledby="range-slider"
                          min={0}
                          max={3000}
                          className="mt-2"
                          marks={marks}
                        />

                       
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button text-dark bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFour"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFour"
                      >
                        Size
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFour"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingThree"
                    >
                      <div className="accordion-body">
                        <input
                          type="checkbox"
                          className="btn-check border justify-content-center"
                          id="btn-check1"
                          defaultChecked
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-white mb-1 px-1"
                          style={{ width: 60 }}
                          htmlFor="btn-check1"
                        >
                          XS
                        </label>
                        <input
                          type="checkbox"
                          className="btn-check border justify-content-center"
                          id="btn-check2"
                          defaultChecked
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-white mb-1 px-1"
                          style={{ width: 60 }}
                          htmlFor="btn-check2"
                        >
                          SM
                        </label>
                        <input
                          type="checkbox"
                          className="btn-check border justify-content-center"
                          id="btn-check3"
                          defaultChecked
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-white mb-1 px-1"
                          style={{ width: 60 }}
                          htmlFor="btn-check3"
                        >
                          LG
                        </label>
                        <input
                          type="checkbox"
                          className="btn-check border justify-content-center"
                          id="btn-check4"
                          defaultChecked
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-white mb-1 px-1"
                          style={{ width: 60 }}
                          htmlFor="btn-check4"
                        >
                          XXL
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button text-dark bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFive"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFive"
                      >
                        Ratings
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFive"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingThree"
                    >
                      <div className="accordion-body">
                        {/* Default checkbox */}
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            <i className="fas fa-star text-warning" />
                            <i className="fas fa-star text-warning" />
                            <i className="fas fa-star text-warning" />
                            <i className="fas fa-star text-warning" />
                            <i className="fas fa-star text-warning" />
                          </label>
                        </div>
                        {/* Default checkbox */}
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            <i className="fas fa-star text-warning" />
                            <i className="fas fa-star text-warning" />
                            <i className="fas fa-star text-warning" />
                            <i className="fas fa-star text-warning" />
                            <i className="fas fa-star text-secondary" />
                          </label>
                        </div>
                        {/* Default checkbox */}
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            <i className="fas fa-star text-warning" />
                            <i className="fas fa-star text-warning" />
                            <i className="fas fa-star text-warning" />
                            <i className="fas fa-star text-secondary" />
                            <i className="fas fa-star text-secondary" />
                          </label>
                        </div>
                        {/* Default checkbox */}
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            <i className="fas fa-star text-warning" />
                            <i className="fas fa-star text-warning" />
                            <i className="fas fa-star text-secondary" />
                            <i className="fas fa-star text-secondary" />
                            <i className="fas fa-star text-secondary" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* sidebar */}
            {/* content */}
            <div className="col-lg-9">
              <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
                <strong className="d-block py-2">
                  {totalProducts} Items found{" "}
                </strong>
                <div className="ms-auto">
                  <select className="form-select d-inline-block w-auto border pt-1">
                    <option value={0}>Best match</option>
                    <option value={1}>Recommended</option>
                    <option value={2}>High rated</option>
                    <option value={3}>Randomly</option>
                  </select>
                  <div className="btn-group shadow-0 border">
                    <a href="#" className="btn btn-light" title="List view">
                      <i className="fa fa-bars fa-lg" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-light active"
                      title="Grid view"
                    >
                      <i className="fa fa-th fa-lg" />
                    </a>
                  </div>
                </div>
              </header>
              <div className="row">
                {loading === true ? (
                  <div className={styles.loaderCss}>
                    <Loader />
                  </div>
                ) : allProducts.length > 0 ? (
                  <AllProducts Products={allProducts} />
                ) : (
                  <NotAvilable />
                )}
              </div>

              <hr />
              {/* Pagination */}
              {
                perPage<count && (  <Stack spacing={2}>
                <Pagination
                  count={pageNo}
                  variant="outlined"
                  shape="rounded"
                  onChange={handleChange}
                  page={page}
                  className="m-3"
                />
              </Stack>)
              }
            
              {/* Pagination */}
            </div>
          </div>
        </div>
      </section>
      {/* sidebar + content */}
    </div>
  );
};

export default dynamic(() => Promise.resolve(productList), { ssr: false });
