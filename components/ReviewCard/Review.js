import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import styles from "./review.module.scss"

const Review = ({review}) => {

 
  return (
    <div className={styles.reviewCard}>

  <section className="" style={{ }}>
   
        
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg" className={`${styles.image} rounded-circle img-fluid mx-2 mt-2`} alt="woman avatar" />
        <Rating name="half-rating-read" defaultValue={review?.rating} precision={0.5} readOnly />
        <h6 className="card-title font-weight-bold mx-2 mt-2">{review.name}</h6>
     
        <p className='p-2'><i className="fas fa-quote-left" />{" "}{review.comment}</p>
        <hr />
    
  </section>


      {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
     
  
    </div>
  )
}

export default Review