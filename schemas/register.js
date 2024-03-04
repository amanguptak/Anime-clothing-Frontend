import * as Yup from "yup";

export  const signUpSchema = Yup.object({
  fullName: Yup.string().min(2).max(35).required("Please enter your Full name"),
  
  email: Yup.string().email().required("Please enter your Email"),
  mobileNo:Yup.string().required("Please enter your Mobile Number"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirmPassword: Yup.string()
    .required("Please Enter above Password again")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});


