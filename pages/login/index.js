import React, { useEffect } from "react";
import styles from "./login.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo-color.svg";

import { useFormik } from "formik";
import { loginSchema } from "@/schemas/register";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  selectLoading,
  selectError,
  selectUser,
  clearError,
} from "@/features/userSlice";
import { useRouter } from "next/router";

import toast from "react-hot-toast";
const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const isLoading = useSelector(selectLoading);
  const getError = useSelector(selectError);
  const user = useSelector(selectUser);

  useEffect(()=>{

 if(user){
  setTimeout(() => {
    router.push("/")
    toast('Already logged in',
    {
      icon: '😄',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    }
  );
  }, "100");
 }
   
  },[])
  const initialValues = {
  
    email: "",

    password: "",

  };
  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: loginSchema,

    onSubmit: (values, action) => {
     
      dispatch(
        loginUser({
        
          email: values.email,
          password: values.password,
        })
      )
        .then((res) => {
          if (res.payload.success == true) {
            toast.success("Login successfully");
            action.resetForm();
            setTimeout(() => {
              router.push("/")
            }, "1000");
          }
        })
        .catch((err) => {
          console.error("error during login", err);
        });
    },
  });
  useEffect(() => {
    if (getError.isError) {
      toast.error(getError.errMsg);
      dispatch(clearError());
    }
  }, [loginUser()]);

  return (
    <div className={styles.fontStyle}>
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
              <div className="px-5 ms-xl-4 ">
                <Image
                  className=" mt-5"
                  style={{ borderRadius: "50%" }}
                  width={70}
                  height={70}
                  src={logo}
                />
              </div>
              <div className="d-flex align-items-center  h-custom-2 mt-4 m-xl-5">
                <form onSubmit={handleSubmit} style={{ width: "30rem" }} className="shadow-lg p-3 mb-5 bg-body rounded-4 p-5">
                  <h3
                    className="fw-normal mb-3 pb-3 text-uppercase"
                    style={{ letterSpacing: 1 }}
                  >
                  Login
                   
                  </h3>
                  <div className="form-outline mb-4 ">
                  <input
                              type="email"
                              id="form3Example3c"
                              name="email"
                              value={values.email}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="Email"
                            />
                            {errors.email && touched.email ? (
                              <p
                                className={`${styles.formError} "form-error"}`}
                              >
                                {errors.email}
                              </p>
                            ) : null}
                  </div>
                  <div className="form-outline mb-4">
                  <input
                                type="password"
                                className={`form-control ${styles.passwordS}`}
                                placeholder="Enter your password"
                                value={values.password}
                                onChange={handleChange}
                                name="password"
                              />
                  {errors.password && touched.password ? (
                              <p
                                className={`${styles.formError} "form-error"}`}
                              >
                                {errors.password}
                              </p>
                            ) : null}
                  </div>
                  <div className="pt-1 mb-4">
                    <button className={styles.button}>
                      <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                              fill="currentColor"
                              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <span>Login</span>
                    </button>
                  </div>
                  <p className="small mb-5 pb-lg-2">
                    <a className="text-muted" href="#!">
                      Forgot password?
                    </a>
                  </p>
                  <p>
                    Don't have an account?{" "}
                    <Link href="/register" style={{color:"#66a6ff"}}> Register here</Link>
                    
                  </p>
                </form>
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img
                src="https://www.cnet.com/a/img/resize/4711008649a95d00c3b92ea5428ed28c0fd93bb8/hub/2023/07/05/b8503974-3baa-4311-bfa1-5e5b747c83ad/jujutsu-kaisen-season-2.jpg?auto=webp&fit=crop&height=900&width=1200"
                alt="Login image"
                className="w-100 vh-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
