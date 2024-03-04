import React from 'react'
import styles from "./custoast.module.scss"
import toast from "react-hot-toast";
const Custoast = () => {
   
  return (
  <div>
    {
        toast((t) => (
        <span>
         User Logged Out
          <button onClick={() => toast.dismiss(t.id)}>
            Dismiss
          </button>
        </span>
      ))
    }
  </div>
  )
}

export default Custoast