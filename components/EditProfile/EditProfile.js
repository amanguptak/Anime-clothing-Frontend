import React ,{useEffect} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Order from "@/components/Orders/Address";
import { selectUserData } from "@/features/userSlice";
import toast from "react-hot-toast";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUser,
  selectLoading,
  selectError,
  selectUser,
  clearError,
} from "@/features/userSlice";
import { useRouter } from "next/router";
const EditProfile = ({ setIndex }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoading = useSelector(selectLoading);
  const getError = useSelector(selectError);
  const user = useSelector(selectUser);
  const userProfile = useSelector(selectUserData);
  console.log("profile", userProfile);

  const initialValues = {
    name: userProfile?.name,
    email: userProfile?.email,
    mobileNo: userProfile?.mobileNo,
  };

  const onSubmit = (values, submitProps) => {
    console.log("Form data", values);

    dispatch(
      updateUser({
        name: values.name,
        email: values.email,
        mobileNo: values.mobileNo,
      })
    )
      .then((res) => {
        console.log("update res", res);
        if (res.payload.success === true) {
          toast.success("Details Updated successfully");
          setIndex();
          submitProps.resetForm();
          
        }
      })
      .catch((err) => {
   
        console.error("error during login", err);
      });
  };

  useEffect(() => {
    if (getError.isError) {
      toast.error(getError.errMsg);
      dispatch(clearError());
    }
  }, [updateUser()]);
  return (
    <div
      className={`container rounded bg-white mt-2 `}
      style={{ maxWidth: "auto", height: "50%" }}
    >
      <div className="row d-flex flex-column align-items-center  p-3 py-5">
        <div className="col-md-6 border-right shadow-lg p-3 mb-5 bg-body rounded ">
          <img
            className="rounded-circle "
            width="150px"
            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
          />

          <p className="mx-4">
            {" "}
            <button className="btn btn-sm btn-dark" type="button">
              Update Picture
            </button>
          </p>

          <Formik
            initialValues={initialValues}
            //   validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
          >
            <Form>
              <div>
                <label htmlFor="name">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  className="form-control"
                />
              </div>
              <div>
                <label htmlFor="email">Mobile No.</label>
                <Field
                  type="number"
                  id="mobileNo"
                  name="mobileNo"
                  className="form-control"
                />
              </div>

              <button className="btn btn-dark mt-3" type="submit">
                Update
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
