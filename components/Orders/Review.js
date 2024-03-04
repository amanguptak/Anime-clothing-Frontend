import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import styles from "./checkout.module.scss"
import { useDispatch, useSelector } from "react-redux";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Button from "@mui/material/Button";
import {
  selectCartData,
  
 
  getTotals,
  TotalPrice
} from "@/features/cartSlice";
import {selectShippingInfo} from "@/features/checkoutSlice"





export default function Review({submitAddress}) {
  const products = useSelector(selectCartData)
  const totalPrice = useSelector(TotalPrice)

  const address = useSelector(selectShippingInfo)
  const handleClick = ()=>{
    submitAddress()
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
          <img
                              src={product?.images[0]?.url}
                              className="border rounded me-3 img-fluid"
                              style={{ width: 96, height: 96 }}
                            />
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price }x{ product?.quantity} = {product.price * product?.quantity} ₹ </Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          ₹{totalPrice}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping Details
          </Typography>
          <Typography gutterBottom>{address?.Name}</Typography>
          <Typography gutterBottom>{address?.address}</Typography>
          <Typography gutterBottom>Pincode: {" "}{address?.zip}</Typography>
          <Typography gutterBottom> State:{address?.state},{address?.mobNo}</Typography>
          <Button
                  variant="contained"
                  type="submit"
                  onClick={handleClick}
                
                  sx={{ mt: 3, ml: 0 ,  background:"#ecd448",color:"black"
                  ,borderRadius:"15px",
                  "textTransform":"none"
                   ,'&:hover':{background:"#ed2749",color:"white"}}}
            
                >
                  Next<NavigateNextIcon/>
                </Button>
        </Grid>
       
      </Grid>
    </React.Fragment>
  );
}