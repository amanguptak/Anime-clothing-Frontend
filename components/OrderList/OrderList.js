import React, { Fragment, useState } from "react";
import styles from "./orderlist.module.scss";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Image from "next/image";
import logo1 from "@/public/images/logo-color.svg";
import { useEffect } from "react";
import Loader from "../Loader/Loader";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import {
  selectUser,
  clearError,
} from "@/features/userSlice";
const OrderList = () => {
  const user = useSelector(selectUser);
  const [myOrderData, setmyOrderData] = useState([]);
  const [loader ,setLoader] = useState(true)
  const router = useRouter()
  // useEffect(()=>{

  //   if(!user){
  //    setTimeout(() => {
  //      router.push("/login")
  //      toast('Please log in for access this feature',
  //      {
  //        icon: '😄',
  //        style: {
  //          borderRadius: '10px',
  //          background: '#333',
  //          color: '#fff',
  //        },
  //      }
  //    );
  //    }, "100");
  //   }
      
  //    },[])
  const orderList = () => {
    axios
      .get(" https://ecommerse-backend-production.up.railway.app/api/myOrders", { withCredentials: true })
      .then((res) => {
       
        setmyOrderData(res?.data?.orders);
        setLoader(false)
      })
      .catch((err) => {
        console.log(err);
        setLoader(false)
      });
  };

  useEffect(() => {
    orderList();
  }, []);
  return (
    <Fragment>
{
  loader ?  <Loader/> : (
    <>
    <div className=" d-flex  justify-content-center ">
        <div className="card   p-2 mb-5 bg-white rounded">
          <div className={`${styles.Header} card-header`}>
            <div className="media flex-sm-row flex-column-reverse justify-content-between  ">
              <div className="col my-auto">
                {" "}
                <h4 className="mb-0">
                  Thanks for your Order,
                  {/* <span className="change-color">Anjali</span> ! */}
                </h4>{" "}
              </div>
              <div className="col-auto text-center  my-auto pl-0 pt-sm-4">
                {" "}
                <Image
                  width={115}
                  height={115}
                  className="img-fluid my-auto align-items-center mb-0  shadow"
                  style={{ borderRadius: "50%" }}
                  src={logo1}
                />{" "}
                <p className="mb-4 pt-0 Glasses">
                  Embrace your inner otaku in style! 🌟
                </p>
              </div>
            </div>
          </div>
          <div className="card-body">
            {/* <div className="row justify-content-between mb-3">
              <div className="col-auto">
                {" "}
                <h6 className="color-1 mb-0 change-color">Receipt</h6>{" "}
              </div>
              <div className="col-auto  ">
                {" "}
                <small>Receipt Voucher : 1KAU9-84UIL</small>{" "}
              </div>
            </div> */}

            {myOrderData.map((order) => {
              return (
                <div className="row mt-3 shadow p-1">
                  <h5>
                    Order created At:{" "}
                    {(order?.createdAt).toLocaleString().split("T")[0]}
                  </h5>
                  <h6>
                    time:{" "}
                    {
                      (order?.createdAt)
                        .toLocaleString()
                        .split("T")[1]
                        .split(".")[0]
                    }
                  </h6>
                  {order?.orderItems.map((item) => (
                    <div className="co-sm-12 col-md-4">
                      <div className="card card-2">
                        <div className="card-body">
                          <div className="media">
                            <div className="sq align-self-center ">
                              {" "}
                              <img
                                className="img-fluid  my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0 rounded"
                                src={item?.images[0]?.url}
                                width={100}
                                height={100}
                              />{" "}
                            </div>
                            <div className="media-body my-auto text-right">
                              <div className="row  my-auto flex-column flex-md-row mt-1">
                                <div className="col my-auto">
                                  {" "}
                                  <h6 className="mb-0"> {item.name}</h6>
                                </div>
                                <div className="col-auto my-auto">
                                  {" "}
                                  <small>{item?.category}</small>
                                </div>
                                <div className="col my-auto">
                                  {" "}
                                  <small>Size : M</small>
                                </div>
                                <div className="col my-auto">
                                  {" "}
                                  <small>Qty : {item?.quantity}</small>
                                </div>
                                <div className="col my-auto">
                                  <h6 className="mb-0">₹{item?.price}</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr className="my-3 " />
                          <div className="row">
                            <div className="col-md-3 mb-3">
                              {" "}
                              <small>
                                {" "}
                                Track Order{" "}
                                <span>
                                  <i
                                    className=" ml-2 fa fa-refresh"
                                    aria-hidden="true"
                                  />
                                </span>
                              </small>{" "}
                            </div>
                            <div className="col mt-auto">
                              <div className="progress my-auto">
                                {" "}
                                <div
                                  className="progress-bar progress-bar  rounded"
                                  style={{ width: "62%" }}
                                  role="progressbar"
                                  aria-valuenow={25}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />{" "}
                              </div>
                              <div className="media row justify-content-between ">
                                <div className="col-auto text-right">
                                  <span>
                                    {" "}
                                    <small className="text-right mr-sm-2" />{" "}
                                    <i className="fa fa-circle active" />{" "}
                                  </span>
                                </div>
                                <div className="flex-col">
                                  {" "}
                                  <span>
                                    {" "}
                                    <small className="text-right mr-sm-2">
                                      Out for delivary
                                    </small>
                                    <i className="fa fa-circle active" />
                                  </span>
                                </div>
                                <div className="col-auto flex-col-auto">
                                  <small className="text-right mr-sm-2">
                                    Delivered
                                  </small>
                                  <span>
                                    {" "}
                                    <i className="fa fa-circle" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div>
                    <div className="row mt-4">
                      <div className="col">
                        <div className="row justify-content-between">
                          <div className="col-auto">
                            <p className="mb-1 text-dark">
                              <b>Order Details</b>
                            </p>
                          </div>
                          <div className="flex-sm-col text-right col">
                            {" "}
                            <p className="mb-1">
                              <b>Total</b>
                            </p>{" "}
                          </div>
                          <div className="flex-sm-col col-auto">
                            {" "}
                            <p className="mb-1">₹{order?.itemsPrice}</p>{" "}
                          </div>
                        </div>
                        <div className="row justify-content-between">
                          <div className="flex-sm-col text-right col">
                            <p className="mb-1">
                              {" "}
                              <b>Discount</b>
                            </p>{" "}
                          </div>
                          <div className="flex-sm-col col-auto">
                            <p className="mb-1">₹150</p>
                          </div>
                        </div>
                        <div className="row justify-content-between">
                          <div className="flex-sm-col text-right col">
                            <p className="mb-1">
                              <b>GST 18%</b>
                            </p>
                          </div>
                          <div className="flex-sm-col col-auto">
                            <p className="mb-1">{order?.taxPrice}</p>
                          </div>
                        </div>
                        <div className="row justify-content-between">
                          <div className="flex-sm-col text-right col">
                            <p className="mb-1">
                              <b>Delivery Charges</b>
                            </p>
                          </div>
                          <div className="flex-sm-col col-auto">
                            <p className="mb-1">Free</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row invoice ">
                      <div className="col">
                        <p className="mb-1">
                          Order Status : {order?.orderStatus}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.Footer}card-footer`}>
                    <div className={styles.Footer}>
                      <div className="row justify-content-between ">
                        <div className="col-sm-auto col-auto my-auto">
                          <Image
                            width={115}
                            height={115}
                            className="img-fluid my-auto align-items-center mb-0  shadow"
                            style={{ borderRadius: "50%" }}
                            src={logo1}
                          />{" "}
                        </div>
                        <div className="row my-auto ">
                          <div className="col-md-4 col-sm-12 mx-2 mt-3">
                            <ul className={styles.OrderAddress}>
                              <h5>Shipping Info</h5>
                              <li>Address: {order?.shippingInfo?.address}</li>
                              <li>Locality: {order?.shippingInfo?.locality}</li>
                              <li> Country:{order.shippingInfo?.country}</li>

                              <li> State : {order?.shippingInfo?.state}</li>
                              <li> PinCode : {order.shippingInfo?.pinCode}</li>
                              <li> MobNo : {order?.shippingInfo?.phoneNo}</li>
                            </ul>
                          </div>

                          <div className="col-md-4 col-sm-12 text-end mt-3">
                            Total Paid
                            <h5 className="display-4 ">
                              ₹ {order?.itemsPrice}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
}
   
     
    </Fragment>
  );
};

export default OrderList;
