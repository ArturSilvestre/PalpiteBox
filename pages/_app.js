import React from "react";
import '../css/styles.css';

import Header from '../components/Header';
import Footer from "../components/Footer";

const Myapp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}
export default Myapp;