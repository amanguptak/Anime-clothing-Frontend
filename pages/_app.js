import "../styles/globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import { wrapper } from "@/features/store";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";

import { useEffect } from "react";
import store from "@/features/store";
// import { makeStore } from '@/features/store'
import { Provider } from "react-redux";
import {PersistGate} from "redux-persist/integration/react"
import {persistStore} from "redux-persist"
import { getTotals } from "@/features/cartSlice";
import toast, { Toaster , ToastBar } from "react-hot-toast";
import { colors } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import Script from "next/script";
const App = ({ Component, pageProps }) => {
  let persistor = persistStore(store)
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></script>
       
      </Head>

      <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster
          position="top-left"
          reverseOrder={false}
          toastOptions={{
            className: "",
            style: {
              border: "1px solid #ed2646",
              padding: "16px",
              // background:"#ed2646",
              // color:"white"
            },
            success: {
              duration: 3000,
            },
          }}
        />

{/* <Toaster>
  {(t) => (
    <ToastBar
      toast={t}
      style={{
        ...t.style,
        animation: t.visible ? 'custom-enter 1s ease' : 'custom-exit 1s ease',
      }}
    />
  )}
</Toaster>; */}
<Footer />
    </PersistGate>
      </Provider>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"/>
    </>
  );
};

// export default wrapper.withRedux(App);

export default App
