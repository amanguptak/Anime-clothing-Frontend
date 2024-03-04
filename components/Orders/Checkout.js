import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import AddressForm from "./Address";
import PaymentForm from "./Payment";
import Review from "./Review";
import index from "@/pages/checkout";
import styles from "./checkout.module.scss";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
const steps = ["Shipping address", "Review your order", " Payment details"];



export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm 
        submitAddress={() =>
          setActiveStep(activeStep + 1)
                              }
         />;
      case 1:
        return <Review 
           submitAddress={() =>
          setActiveStep(activeStep + 1)
                              }
        />;
      case 2:
        return <PaymentForm />;
      default:
        throw new Error("Unknown step");
    }
  }
  return (
    <React.Fragment>
      <CssBaseline />

      <Container component="main" className={styles.checkout} maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          className=" shadow-lg  bg-body rounded-4 p-5"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            <span style={{color:"#ed2749"}}>Checkout</span>  <ShoppingCartCheckoutIcon sx={{color:"#ed2749"}}/>
          </Typography>

          <Stepper activeStep={activeStep} className={styles.step} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  StepIconProps={{
                    style: { color: "#ed2749" },
                    // style:{color: index===1 ? "#ed2749":"inherit"}
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box  sx={{ display: "flex", justifyContent: "flex-end" }}>
                
                {activeStep !== 0 && (
                  <Button
                    onClick={handleBack}
                    className={styles.backBtn}
                    sx={{ mt: 3, ml: 2 ,  background:"#ed2749",color:"white"
                  ,borderRadius:"15px",
                  "textTransform":"none"
                   ,'&:hover':{background:"#ecd448 ",color:"black"}}}
                  >
                   <ArrowBackIosIcon sx={{fontSize:"15px"}}/> Back
                  </Button>
                )}

                {/* <Button
                  variant="contained"
                  onClick={handleNext}
                
                  sx={{ mt: 3, ml: 1 ,  background:"#ecd448",color:"black"
                  ,borderRadius:"15px",
                  "textTransform":"none"
                   ,'&:hover':{background:"#ed2749",color:"white"}}}
            
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button> */}
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
}
