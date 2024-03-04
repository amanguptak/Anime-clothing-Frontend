import React from 'react'
import Checkout from '@/components/Orders/Checkout'
import styles from "./demo.module.scss"
const index = () => {
  return (
    <div className={styles.checkout}>
      <Checkout/>
    </div>
  )
}

export default index