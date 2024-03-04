import React, { useEffect, useState } from "react";
import styles from "./register.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useFormik } from "formik";
import { signUpSchema } from "@/schemas/register";
import { useDispatch, useSelector } from "react-redux";
import {
  createUser,
  selectLoading,
  selectError,
  selectUser,
  clearError,
} from "@/features/userSlice";
import { useRouter } from "next/router";
import axios from "axios";
import toast from "react-hot-toast";
const index = () => {
  const [passwordV, setPassword] = useState("");
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);
  const getError = useSelector(selectError);
  const Eye = () => {
    if (password == "password") {
      setpassword("text");
      seteye(false);
      settype(true);
    } else {
      setpassword("password");
      seteye(true);
      settype(false);
    }
  };
  const [eye, seteye] = useState(true);
  const [password, setpassword] = useState("password");
  const [type, settype] = useState(false);
  const user = useSelector(selectUser);
  const router = useRouter();
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
    fullName: "",

    email: "",
    mobileNo:"",
    password: "",
    confirmPassword: "",
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
    validationSchema: signUpSchema,

    onSubmit: (values, action) => {
      dispatch(
        createUser({
          name: values.fullName,
          email: values.email,
          password: values.password,
          mobileNo:values.mobileNo,
        })
      )
        .then((res) => {
          if (res.payload.success == true) {
            toast.success("Registered successfully");
            action.resetForm();
            setTimeout(() => {
              router.push("/")
            }, "1000");
          }
        })
        .catch((err) => {
          console.error("error during registrations", err);
        });
    },
  });

  useEffect(() => {
    if (getError.isError) {
      toast.error(getError.errMsg);
      dispatch(clearError());
    }
  }, [createUser()]);

  return (
    <div className={styles.font}>
      <section className="vh-150 ">
        <div className="container h-150 ">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col-lg-12 col-xl-11">
              <div className="" style={{ border: "none" }}>
                <div className="">
                  <div
                    className="row justify-content-center "
                    style={{ color: "#ED2647" }}
                  >
                    <div className="col-md-10 col-lg-5 col-xl-5 shadow-lg p-3 mb-5 bg-body rounded-4 mt-4 ">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up{user?.name}
                      </p>
                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              name="fullName"
                              value={values.fullName}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="Name"
                            />
                            {errors.fullName && touched.fullName ? (
                              <p
                                className={`${styles.formError} "form-error"}`}
                              >
                                {errors.fullName}
                              </p>
                            ) : null}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
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
                        </div>



                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-phone fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="number"
                              id="form3Example3c"
                              name="mobileNo"
                              value={values.mobileNo}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="Mobile"
                            />
                            {errors.mobileNo && touched.mobileNo ? (
                              <p
                                className={`${styles.formError} "form-error"}`}
                              >
                                {errors.mobileNo}
                              </p>
                            ) : null}
                          </div>
                        </div>


                        <div className="">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw" />

                            <div
                              className={`${styles.passwordBox} form-outline flex-fill d-flex`}
                            >
                              <input
                                type={password}
                                className={`form-control ${styles.passwordS}`}
                                placeholder="Enter your password"
                                value={values.password}
                                onChange={handleChange}
                                name="password"
                              />

                              <i
                                onClick={Eye}
                                className={`fa ${
                                  eye ? "fa-eye-slash" : "fa-eye"
                                } m-auto mx-2`}
                                style={{ cursor: "pointer" }}
                              ></i>
                            </div>
                          </div>
                          {errors.password && touched.password ? (
                            <p
                              className={`${styles.formError} "form-error"}`}
                              style={{ marginLeft: "41px", marginTop: "-20px" }}
                            >
                              {errors.password}
                            </p>
                          ) : null}
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              className="form-control"
                              name="confirmPassword"
                              value={values.confirmPassword}
                              onChange={handleChange}
                              placeholder=" Confirm password"
                            />
                            {errors.confirmPassword &&
                            touched.confirmPassword ? (
                              <p
                                className={`${styles.formError} "form-error"}`}
                              >
                                {errors.confirmPassword}
                              </p>
                            ) : null}
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button className={styles.button}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path
                                fill="currentColor"
                                d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                              ></path>
                            </svg>
                            <span>Register</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <p>
                    Already have an account?{" "}
                    <Link href="/login" style={{ color: "#66a6ff" }}>
                      {" "}
                      Login here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
