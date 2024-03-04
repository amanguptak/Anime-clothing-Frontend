import React from 'react'
import logo1 from "../../public/images/logo-color.svg";
import Image from "next/image";
import Link from 'next/link';
const Footer = () => {
  return (
   <div>
  {/* Footer */}
  <footer className="text-center text-lg-start bg-dark " style={{color:"#ed2749"}} >
    {/* Section: Social media */}
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      {/* Left */}
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      {/* Left */}
      {/* Right */}
      <div>
        <a href className="me-4 text-reset">
          <i className="fab fa-facebook-f" />
        </a>
        <a href className="me-4 text-reset">
          <i className="fab fa-twitter" />
        </a>
        <a href className="me-4 text-reset">
          <i className="fab fa-google" />
        </a>
        <a href className="me-4 text-reset">
          <i className="fab fa-instagram" />
        </a>
        <a href className="me-4 text-reset">
          <i className="fab fa-linkedin" />
        </a>
        <a href className="me-4 text-reset">
          <i className="fab fa-github" />
        </a>
      </div>
      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className>
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
            <Link href="/">
          <Image width={70} style={{borderRadius:"50%"}} height={70} src={logo1} />
        </Link>
            </h6>
           
            
                <h3 className="welcome"> Welcome to AnimeUchiha{" "}</h3> 
           
                <p>Where You will get Anime Merchendise on Resonable Pice</p>
           
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-4 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">
              Products
            </h6>
            <p>
              Anime T-shirts
            </p>
            <p>
              OverSized T-shirts
            </p>
            <p>
              OverSized Anime T-shirts
            </p>
            <p>
              Men T-shirts
            </p>
            <p>
              Women T-shirts
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
         
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i className="fas fa-home me-3" /> Delhi India</p>
            <p>
              <i className="fas fa-envelope me-3" />
            animeuchiha@gmail.com
            </p>
            <p><i className="fas fa-phone me-3" /> + 01 234 567 88</p>
            <p><i className="fas fa-print me-3" /> + 01 234 567 89</p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
      © 2023 Copyright:
     <Link className='nav-link' href="/"> <span className='welcome'>AnimeUchiha</span></Link>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</div>

  )
}

export default Footer