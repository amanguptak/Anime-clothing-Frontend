import React from 'react'
import styles from "./notavilable.module.scss"
import Link from 'next/link'
import img from "./sad.png"
import Image from 'next/image'
const NotAvilable = () => {
  return (
   

<div className="container">
<div className="row">
<div className="col-6 mx-auto mt-4">
<div className={styles.jcElevator}>
  {/* <div id="myBtn" className={`${styles.jcFloor} m-auto`}>
    <h3>NOT FOUND</h3>
  </div> */}
  <div id="doors" className={`${styles.jcDoors}`}>
    <div className='text-muted'> <strong className={styles.textShadow}>Sorry...</strong> 
 
    <Image
      src={img}
      width={50}
      height={50}
      alt="Picture of the author"
    />
     <br />
    
    Products are not Available</div>
   
  </div>
  <div className={styles.jcSwitch}>
   <Link href="/"></Link>
   <Link href="/"></Link>
  </div>
</div>
</div>

</div>
</div>

   
  )
}

export default NotAvilable