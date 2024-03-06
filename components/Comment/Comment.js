import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Textarea from "@mui/joy/Textarea";
import Button from '@mui/joy/Button';
import toast from 'react-hot-toast';
import styles from "./comment.module.scss"

import axios from "axios"
const Comment = ({productId,setComment}) => {



    const initialValues = {
        star:0,
        message:""
    }
const [formData, setFormData] = React.useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
   
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put("https://ecommerse-backend-production.up.railway.app/api/review",{
      rating: formData.star,
      comment: formData.message,
      productId:productId
  },{withCredentials:true}).then((res)=>{
    toast.success('Thanks for Your feedback!')
    setComment()
  }).catch((err)=>{

    toast.error(err.response.data.message)
  })

    
    setFormData(initialValues)
};
  return (
    <div className="card-content">
    
        <div className="container my-5 py-5 text-dark">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-12">
              <div className="card" style={{ border:"2px solid #ed2648", borderRadius: "6px" }}>
                <div className="card-body p-4">
                  <div className="d-flex flex-start w-100">
                    <img
                      className="rounded-circle shadow-1-strong me-3"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp"
                      alt="avatar"
                      width={65}
                      height={65}
                    />
                    <div className="w-100">
                      <h5>Add a comment</h5>
                      <form onSubmit={handleSubmit}>
                      <Box
                        sx={{
                          "& > legend": { mt: 2 },
                        }}
                      >
                        <Typography component="legend">Rate us</Typography>
                        <Rating
                        
                          name="star"
                          value={formData.star}
                          onChange={handleChange}
                        
                        />
                      </Box>
                      <div className="form-outline">
                        <Textarea
                          color="neutral"
                          minRows={3}
                          size="lg"
                          placeholder="What is your view?"
                          variant="soft"
                          required
                          className={styles.commentArea}
                          name="message"
                        value={formData.message}
                        onChange={handleChange}
                        />
                        
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                      <Button variant="outlined" type="submit">    Comment{" "}
                          <i className="fas fa-long-arrow-alt-right ms-1 mx-2" /></Button>
                    

                      </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default Comment;
