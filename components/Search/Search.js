import React from 'react'
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import styles from "./search.module.scss"
import TextField from '@mui/material/TextField';
import { useRouter } from "next/router";
const Search = () => {

  
   const router = useRouter()
      
      const [keyword, setKeyword] = React.useState("");

 
  const handleSubmit = (event) => {
    event.preventDefault();
   if(keyword.trim()){
   
    router.push(`/search/${keyword}`)
    }
   setKeyword("")
   
};
  return (
    <div>
      <form onSubmit={handleSubmit}>
    <Toolbar>
  
            {/* <Search>
            <StyledInputBase
              placeholder="Search…"
          
              value={keyword}
              onChange={(e)=>setKeyword(e.target.value)}
            />
         

          </Search> */}
          <input type="text" 
                value={keyword}
              onChange={(e)=>setKeyword(e.target.value)}
              className={styles.search}
              placeholder='Search...'

          />
          <button class={styles.button} type='submit'>
            <span class={styles.span}>🔎</span>
          </button>
         
          </Toolbar>
          </form>
    </div>
  )
}

export default Search