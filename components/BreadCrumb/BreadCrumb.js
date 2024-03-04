import React from 'react'
import styles from "./crumb.module.scss"
import Link from 'next/link'
const BreadCrumb = ({data}) => {
    
  return (
<div className= {`${styles.Breadcrumb} mb-4`}>
      <div className="container py-4">
        <h3 className="text-white mt-2">{data.heading}</h3>
        {/* Breadcrumb */}
        <nav className="d-flex">
              <h6 className="mb-0">
                <Link href="/" className="bredcrumbLink">
                 {data.link1}
                </Link>
                <span> &gt; </span>
                <Link
                  className="bredcrumbLink"
                  href={"/allproducts"}
                >
                  <u> {data.CurrentPage}</u>
                </Link>
              </h6>
            </nav>
        {/* Breadcrumb */}
      </div>
    </div>
  )
}

export default BreadCrumb