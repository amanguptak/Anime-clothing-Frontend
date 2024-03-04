import React, { useEffect } from "react";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ClearIcon from '@mui/icons-material/Clear';
import Link from "next/link";
import { useRouter } from "next/router";
import {
  selectCartData,
  removeFromCart,
  decreaseCart,
  addToCart,
  clearCart,
  getTotals,
  TotalPrice
} from "@/features/cartSlice";
import {
  selectUser,
  clearError,
} from "@/features/userSlice";
import toast from "react-hot-toast";
import img from "./remove.png";
import Image from "next/image";

const Cart = () => {
  const breadcrumbData = {
    heading: "Cart Items",
    link1: "Home",
    CurrentPage: "cart",
  };
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartData);
  const totalAmount = useSelector(TotalPrice)
  const user = useSelector(selectUser);
  const router = useRouter()
  const removeItem = (item) => {
    // console.log("function called successfully", item);
    if (typeof window !== "undefined") {
      dispatch(removeFromCart(item));
    }
    toast.success(`${item.name} item remove from your cart 🥹`);
  };

  const decreaseItem = (item) => {
    if (typeof window !== "undefined") {
      dispatch(decreaseCart(item));
    }
    toast.success(`${item.name} item decrease  🥹`);
  };
  const increaseItem = (item) => {
    if (typeof window !== "undefined") {
      dispatch(addToCart(item));
    }
    toast.success(`${item.name} item increase  😁`);
  };

  const emptyCart = () => {
    if (typeof window !== "undefined") {
      dispatch(clearCart());
    }

    toast.success(`Your cart is Empty `);
  };
  const handleCheckout = ()=>{
    if(user){
     router.push("/checkout")
     }else{
      setTimeout(() => {
        router.push("/login")
        toast('Please log in for access this feature',
        {
          icon: '😄',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
      }, "50");
     }
  }
  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems]);
  console.log("cartItems", cartItems);
  return (
    <div>
      <BreadCrumb data={breadcrumbData} />
      {/* cart + summary */}
      <section className=" my-5">
        <div className="container shadow-lg p-3 mb-5 bg-white rounded">
          <div className="row ">
            {/* cart */}
            <div className="col-lg-9">
              <div className="card border ">
                <div className="m-4">
                  <h4 className="card-title mb-4">Your shopping cart</h4>
      {
        cartItems.length === 0 ? 
       <div>

  <div className="container-fluid  mt-100">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          
          <div className="card-body cart">
            <div className="col-sm-12 empty-cart-cls text-center">
              <img src="https://i.imgur.com/dCdflKN.png" width={130} height={130} className="img-fluid mb-4 mr-3" />
              <h3><strong>Your Cart is Empty</strong></h3>
              <h4>Embrace your inner otaku in style! 🌟 Shop Now </h4>
              <Link href="/allproducts" className="btn btn-dark mt-2">Continue Shopping</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 : <>
        {cartItems.map((item, key) => (
                    <div className="row gy-3">
                      <div className="col-lg-5">
                        <div className="me-lg-5">
                          <div className="d-flex">
                            <img
                              src={item?.images[0]?.url}
                              className="border rounded me-3 img-fluid"
                              style={{ width: 96, height: 96 }}
                            />
                            <div className>
                              <p className="text-muted">{item?.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                        <div className=" mb-3">
                          <label className="mb-2 d-block">Quantity</label>
                          <div
                            className="input-group mb-3"
                            style={{ width: 170 }}
                          >
                            <button
                              className="btn btn-white border border-secondary px-3"
                              type="button"
                              id="button-addon1"
                              data-mdb-ripple-color="dark"
                              onClick={() => decreaseItem(item)}
                            >
                              <i className="fas fa-minus" />
                            </button>
                            <span className="mx-2 mt-1">
                              {" "}
                              {item?.quantity}
                            </span>
                            <button
                              className="btn btn-white border border-secondary px-3"
                              type="button"
                              id="button-addon2"
                              data-mdb-ripple-color="dark"
                              onClick={() => increaseItem(item)}
                            >
                              <i className="fas fa-plus" />
                            </button>
                          </div>
                        </div>

                        <div className>
                          <text className="h6">Rs.{item?.price}</text> <br />
                          <small className="text-muted text-nowrap">
                            / per item{" "}
                          </small>
                        </div>
                      </div>
                      <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                        <div className="float-md-end">
                          <button
                            className="btn btn-light border text-danger icon-hover-danger mb-2"
                            onClick={() => removeItem(item)}
                          >
                            <Image
                              src={img}
                              width={30}
                              height={30}
                             
                              alt="Picture of the author"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
        </>
      }
                 
                </div>
                <div className="border-top pt-4 mx-4 mb-4">
                  <p>
                    <i className="fas fa-truck text-muted fa-lg" /> Free
                    Delivery within 1 weeks
                  </p>
                  <p className="text-muted">
                  🚚 Great news! We offer free delivery on all orders over ₹500! Shop to your heart's content and enjoy the convenience of having your items delivered straight to your door without any additional charges. Start shopping now and take advantage of our free delivery offer!
                  </p>
                </div>
              </div>
            </div>
            {/* cart */}
            {/* summary */}
            <div className="col-lg-3">
              <div className="card mb-3 border shadow-0">
                <div className="card-body">
                <button className="btn btn-danger btn-sm" onClick={() => emptyCart()}>Clear Cart<ClearIcon/></button>
                  {/* <form>
                    <div className="form-group">
               
                      <label className="form-label">Have coupon?</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control border"
                          name
                          placeholder="Coupon code"
                        />
                        <button className="btn btn-light border">Apply</button>
                      </div>
                    </div>
                  </form> */}
                </div>
              </div>
              <div className="card shadow-0 border">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Total price:</p>
                    <p className="mb-2">{totalAmount} Rs</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Discount:</p>
                    <p className="mb-2 text-success">0</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">TAX:</p>
                    <p className="mb-2">00</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Total price:</p>
                    <p className="mb-2 fw-bold">{totalAmount}Rs</p>
                  </div>
                  <div className="mt-3">
                    <button onClick={handleCheckout} className="btn btn-dark rounded mt-2 mx-1">CheckOut <ShoppingCartCheckoutIcon/></button>
                    <Link href="/allproducts" className="btn btn-success  mt-2 mx-1"><ArrowBackIosIcon/> Back to shop </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* summary */}
          </div>
        </div>
      </section>
      {/* cart + summary */}
      {/* <section>
        <div className="container my-5">
          <header className="mb-4">
            <h3>Recommended items</h3>
          </header>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card px-4 border shadow-0 mb-4 mb-lg-0">
                <div className="mask px-2" style={{ height: 50 }}>
                  <div className="d-flex justify-content-between">
                    <h6>
                      <span className="badge bg-danger pt-1 mt-3 ms-2">
                        New
                      </span>
                    </h6>
                    <a href="#">
                      <i className="fas fa-heart text-primary fa-lg float-end pt-3 m-2" />
                    </a>
                  </div>
                </div>
                <a href="#" className>
                  <img
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/7.webp"
                    className="card-img-top rounded-2"
                  />
                </a>
                <div className="card-body d-flex flex-column pt-3 border-top">
                  <a href="#" className="nav-link">
                    Gaming Headset with Mic
                  </a>
                  <div className="price-wrap mb-2">
                    <strong className>$18.95</strong>
                    <del className>$24.99</del>
                  </div>
                  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#" className="btn btn-outline-primary w-100">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card px-4 border shadow-0 mb-4 mb-lg-0">
                <div className="mask px-2" style={{ height: 50 }}>
                  <a href="#">
                    <i className="fas fa-heart text-primary fa-lg float-end pt-3 m-2" />
                  </a>
                </div>
                <a href="#" className>
                  <img
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.webp"
                    className="card-img-top rounded-2"
                  />
                </a>
                <div className="card-body d-flex flex-column pt-3 border-top">
                  <a href="#" className="nav-link">
                    Apple Watch Series 1 Sport{" "}
                  </a>
                  <div className="price-wrap mb-2">
                    <strong className>$120.00</strong>
                  </div>
                  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#" className="btn btn-outline-primary w-100">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card px-4 border shadow-0">
                <div className="mask px-2" style={{ height: 50 }}>
                  <a href="#">
                    <i className="fas fa-heart text-primary fa-lg float-end pt-3 m-2" />
                  </a>
                </div>
                <a href="#" className>
                  <img
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp"
                    className="card-img-top rounded-2"
                  />
                </a>
                <div className="card-body d-flex flex-column pt-3 border-top">
                  <a href="#" className="nav-link">
                    Men's Denim Jeans Shorts
                  </a>
                  <div className="price-wrap mb-2">
                    <strong className>$80.50</strong>
                  </div>
                  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#" className="btn btn-outline-primary w-100">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card px-4 border shadow-0">
                <div className="mask px-2" style={{ height: 50 }}>
                  <a href="#">
                    <i className="fas fa-heart text-primary fa-lg float-end pt-3 m-2" />
                  </a>
                </div>
                <a href="#" className>
                  <img
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp"
                    className="card-img-top rounded-2"
                  />
                </a>
                <div className="card-body d-flex flex-column pt-3 border-top">
                  <a href="#" className="nav-link">
                    Mens T-shirt Cotton Base Layer Slim fit{" "}
                  </a>
                  <div className="price-wrap mb-2">
                    <strong className>$13.90</strong>
                  </div>
                  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#" className="btn btn-outline-primary w-100">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Recommended */}
    </div>
  );
};

export default Cart;
