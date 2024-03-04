

import React, { useEffect } from "react";
import axios from "axios"
import styles from "./profile.module.scss"
import Order from "@/components/Orders/Address";
import {selectUserData} from "@/features/userSlice"
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import Cookies from "js-cookie";
const profile = () => {
  const userProfile = useSelector(selectUserData)


useEffect(()=>{

},[userProfile])

  console.log("profile",userProfile)
  return (
    <div>
      <div className={`container rounded bg-white mt-2 `} style={{maxWidth:"auto",height:"50%"}}>
        <div className="row ">
          <div className="col-md-6 border-right shadow-lg p-3  mb-5 bg-body rounded m-auto">
            <div className="d-flex flex-column align-items-center  p-3 py-5">
              <img
                className="rounded-circle "
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">{userProfile?.name}</span>
              <span className="text-black-50">{userProfile?.email}</span>
       
            <div className="row text-start">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h4 className="text-right">Profile Details</h4>
              </div>
           
                <div className="col-md-12">
                  <label className="labels">Name</label>
                  <p class="shadow-sm p-3 mb-2 bg-body mt-1 rounded">{userProfile?.name}</p>
                
             
                
              </div>
           
               
              
                <div className="col-md-12">
                  <label className="labels">Mobile No.</label>
                  <p class="shadow-sm p-3 mb-2 bg-body mt-1 rounded">{userProfile?.mobileNo}</p>
                </div>
                
                <div className="col-md-12">
                  <label className="labels">Email ID</label>
                  <p class="shadow-sm p-3 mb-2 bg-body mt-1 rounded">{userProfile?.email}</p>
                </div>
               
              
             
            </div>
           
          
      
            </div>
            {/* <Button variant="contained" className="mx-5 mb-5" sx={{bgcolor:"black"}}>
  Edit Profile
</Button> */}
          </div>
         
        </div>
      </div>
      
    </div>
  );
};

export default profile;