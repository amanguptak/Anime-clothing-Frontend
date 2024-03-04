import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useFormik } from "formik";
import { Country, State, City } from "country-state-city";
import {addShippingInfo} from "@/features/checkoutSlice"
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import styles from "./checkout.module.scss"
import Button from "@mui/material/Button";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {selectShippingInfo} from "@/features/checkoutSlice"
import toast from "react-hot-toast";
import CancelIcon from '@mui/icons-material/Cancel';
export default function AddressForm({submitAddress}) {
  const dispatch = useDispatch()
  const address = useSelector(selectShippingInfo)
  // const handleClick = ()=>{
  //   submitAddress()
  // }
//   useEffect(()=>{
// if(address){
//   console.log("ad",address)
//   toast((t) => (
//     <span className={styles.info}>
//     You already have an Address if you want to change you can 😃
//       <button onClick={() => toast.dismiss(t.id)} className={styles.cancelBtn}>
//       <CancelIcon/>
//       </button>
//     </span>
//   ));

// }

//   },[])

  const initialValues = {
    Name: address ? address?.Name:"",
    address: address ? address?.address:"",
    state: address ? address?.state:"",
    mobNo:address ? address?.mobNo:"",
    zip: address ? address?.zip:"",
    Country: address ? address?.Country:"",
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

    onSubmit: (values, action) => {
      console.log("Hvalues", values);
      dispatch(addShippingInfo(values))
      submitAddress()
    },
  });
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="Name"
              name="Name"
              label="Full Name"
              fullWidth
              value={values.Name}
              onChange={handleChange}
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="address"
              name="address"
              value={values.address}
              onChange={handleChange}
              label="Address line "
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
            />
          </Grid>

         
          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <InputLabel id="demo-simple-select-label">Country*</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Country"
                required
                name="Country"
                value={values.Country}
                onChange={handleChange}
              >
                <MenuItem value="">Country</MenuItem>

                {Country &&
                  Country.getAllCountries().map((item) => (
                    <MenuItem key={item.isoCode} value={item.isoCode}>
                      {" "}
                      {item.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="mobNo"
              name="mobNo"
              type="Number"
              value={values.mobNo}
              onChange={handleChange}
              label="Mobile Number"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            {values.Country && (
              <FormControl fullWidth variant="standard">
                <InputLabel id="demo-simple-select-label">State*</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="State"
                  name="state"
                  required
                  value={values.state}
                  onChange={handleChange}
                >
                  <MenuItem value="">State</MenuItem>

                  {State &&
                    State.getStatesOfCountry(values.Country).map((item) => (
                      <MenuItem key={item.isoCode} value={item.isoCode}>
                        {" "}
                        {item.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            )}
          </Grid>

          {/* <Grid item xs={12} sm={6}>
            {values.state && values.Country && (
              <FormControl fullWidth variant="standard">
                <InputLabel id="demo-simple-select-label">City*</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="City"
                  onChange={handleChange}
                  value={values.city}

                >
                  <MenuItem value="">City</MenuItem>

                 {
                    City.getCitiesOfState(values.Country, values.state).map(
                      (item) => (
                        <MenuItem key={item.latitude} value={item.name}>
                          {" "}
                          {item.name}
                        </MenuItem>
                      )
                    )}
                </Select>
              </FormControl>
            )}
          </Grid> */}
          {
            values.state && ( <Grid item xs={12} >
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              value={values.zip}
              onChange={handleChange}
              autoComplete="shipping postal-code"
              variant="standard"
            />
          </Grid>)
          }

          <Button
                  variant="contained"
                  type="submit"
                  // onClick={handleClick}
                  className={styles.addressBtn}
                  sx={{ mt: 3, ml: 2 ,  background:"#ecd448",color:"black"
                  ,borderRadius:"15px",
                  "textTransform":"none"
                   ,'&:hover':{background:"#ed2749",color:"white"}}}
            
                >
                  Next<NavigateNextIcon/>
                </Button>
        </Grid>
      </form>
    </React.Fragment>
  );
}
