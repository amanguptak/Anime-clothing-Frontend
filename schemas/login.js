import * as Yup from "yup";

export  const loginSchema = Yup.object({
    email: Yup.string().email().required("Please enter your Email"),
    password: Yup.string().required("Please enter your password"),
 
});
