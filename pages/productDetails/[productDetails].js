import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProdImg from "@/components/ProductImage/ProductImage";
import styles from "./detail.module.scss";
import Link from "next/link";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import {
  selectProduct,
  getProductById,
  selectLoading
} from "@/features/products/productSlice";
import {addToCart} from "@/features/cartSlice";
import Review from "@/components/ReviewCard/Review";
import { useDispatch, useSelector } from "react-redux";
import Loader from "@/components/Loader/Loader";
import Comment from "@/components/Comment/Comment";
import toast from "react-hot-toast";
const ProductDetails = () => {
  const router = useRouter();
  const productDetail_id = router.query.productDetails;
  const [value,setValue]= useState(0)
  const dispatch = useDispatch();
  // const [productDetail, setDetails] = useState([]);
  const breadcrumbData = {
    heading: "Product Details",
    link1: "Home",
    CurrentPage: "Item",
  };

  const product = useSelector(selectProduct);
  const loading = useSelector(selectLoading)
 
  useEffect(() => {
    dispatch(getProductById(productDetail_id));
  }, [dispatch, productDetail_id,value]);
  console.log(product,"details")
  const handleCart = (item)=>{
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
  //  toast(,
  //  {
  //    icon: '',
  //    style: {
  //      borderRadius: '10px',
  //      background: '#333',
  //      color: '#fff',
  //    },
  //  })
  }

  return (
    <div>
      <header>
        <BreadCrumb data={breadcrumbData} />
      </header>
      {/* content */}
<>
{
  loading===true ? <Loader/> : <>

  <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
             <ProdImg images ={product?.images}/>
            </aside>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark">
                  {product?.name} <br />
                  
                </h4>
                <p>{product?.description} <br /></p>
                <div className="d-flex flex-row my-3">
                
                  <span className="text-muted">
                    <i className="fas fa-shopping-basket fa-sm mx-1" />
                    {product?.Stock}
                  </span>
                  <span className="text-success ms-2">In stock</span>
                </div>
                <div className="mb-3">
                  <span className="h5">{product?.price} Rs</span>
                </div>
               
                <div className="row">
                  <dt className="col-3">Type:</dt>
                  <dd className="col-9">{product?.category}</dd>

                  <dt className="col-3">Material</dt>
                  <dd className="col-9">Cotton</dd>
                  <dt className="col-3">Brand</dt>
                  <dd className="col-9">animeUchiha</dd>
                </div>
                <hr />
                <div className="row mb-4">
                  <div className="col-md-4 col-6">
                    <label className="mb-2">Size</label>
                    <select
                      className="form-select border border-secondary"
                      style={{ height: 35 }}
                    >
                      {product?.varient?.map((size, key) => (
                        <option>{size?.size}</option>
                      ))}
                    </select>
                  </div>
                  {/* col.// */}
                  
                </div>
                <div className="d-flex">
                  <Link
                    href="/cart"
                    className={`${styles.button} btn  shadow-0 mx-2 ...`}
                  >
                    <i className="me-1 fa fa-heart fa-lg" />
                    Buy now
                  </Link>
                 
                  {/* <Link href="/" className={`${styles.cartBtn} btn  shadow-0 mx-2 ...`}><i className="me-1 fa fa-shopping-basket" /> Add to cart </Link> */}
                  <Link
                    className={`${styles.button} btn  shadow-0 mx-2 ...`}
                    href="/cart"
                    onClick={()=>handleCart(product)}
                  >
                   {/* <button  style={{border:"none"}}>Add to cart</button>  */}
                   Add to cart
                    <svg class={styles.cartIcon} viewBox="0 0 576 512">
                      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
      {/* content */}
      <section className="bg-light border-top py-4">
        <div className="container">
          <div className="row gx-4">
            <div className="col-lg-8 mb-4">
              <div className="border rounded-2 px-3 py-2 bg-white">
               
                <div className="tab-content" id="ex1-content">
                  <div
                    className="tab-pane fade show active"
                    id="ex1-pills-1"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-1"
                  >
           
                   
                   

                    {
                      product?.reviews && product?.reviews[0] ? <>
                      
                      <div className= {`${styles.testimonialCard } card mt-3 mb-3...`}>
                      <div className= {`${styles.cardUp} ${styles.aquaGradient}`}><h3 className={styles.Specification}> Reviews</h3></div>
                      <div className={`${"avatar"} mx-2 px-2 white`}>
                      {
                        product?.reviews.map((review)=>(
                          <Review key={review._id} review={review} />
                        ))
                      }
                     </div>
                     </div>
                   
                      </>
                      :<h3 className="mx-2"> No Reviews Yet</h3>
                    }
                 
                  </div>
            
                 <Comment  productId={productDetail_id} setComment={()=> setValue(value+1)}/>
               
                </div>
                {/* Pills content */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="px-0 border rounded-2 shadow-0">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Similar items</h5>
                    <div className="d-flex mb-3">
                      <a href="#" className="me-3">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp"
                          style={{ minWidth: 96, height: 96 }}
                          className="img-md img-thumbnail"
                        />
                      </a>
                      <div className="info">
                        <a href="#" className="nav-link mb-1">
                          Rucksack Backpack Large <br />
                          Line Mounts
                        </a>
                        <strong className="text-dark"> $38.90</strong>
                      </div>
                    </div>
                    <div className="d-flex mb-3">
                      <a href="#" className="me-3">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp"
                          style={{ minWidth: 96, height: 96 }}
                          className="img-md img-thumbnail"
                        />
                      </a>
                      <div className="info">
                        <a href="#" className="nav-link mb-1">
                          Summer New Men's Denim <br />
                          Jeans Shorts
                        </a>
                        <strong className="text-dark"> $29.50</strong>
                      </div>
                    </div>
                    <div className="d-flex mb-3">
                      <a href="#" className="me-3">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp"
                          style={{ minWidth: 96, height: 96 }}
                          className="img-md img-thumbnail"
                        />
                      </a>
                      <div className="info">
                        <a href="#" className="nav-link mb-1">
                          {" "}
                          T-shirts with multiple colors, for men and lady{" "}
                        </a>
                        <strong className="text-dark"> $120.00</strong>
                      </div>
                    </div>
                    <div className="d-flex">
                      <a href="#" className="me-3">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp"
                          style={{ minWidth: 96, height: 96 }}
                          className="img-md img-thumbnail"
                        />
                      </a>
                      <div className="info">
                        <a href="#" className="nav-link mb-1">
                          {" "}
                          Blazer Suit Dress Jacket for Men, Blue color{" "}
                        </a>
                        <strong className="text-dark"> $339.90</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </>
}
</>

     
    </div>
  );
};

export default ProductDetails;
