import React from 'react'
import styles from "./LoginPage.module.css"
import {useState} from "react"

function LoginPage() {
        const [username , setusername] = useState("");
        const [password , setpassword] = useState("");
        const [message, setMessage] = useState("")




        const handelonchangeuser = (e) => {
            // console.log(e.target.value)
            setusername(e.target.value)
        }

        const handelonchangepassword = (e) =>{
            // console.log(e.target.value);
            setpassword(e.target.value)
        }


        const handelsubmit = (e) =>{
            e.preventDefault()
            

        if(username === "user" && password === "password"){
            return ( 
                setMessage("Welcome, user!")
            )
        }else{
            
            setMessage("Invalid username or password")
        }

    
          

        }



  return (
    <div className={styles.container}>
        <h1 className={styles.h1}>Login Page</h1>
        <form className={styles.form} onClick={handelsubmit}>
            <label>
                UserName:
                    <input type='text' value={username} onChange={handelonchangeuser} title={username === "" ? 'Please fill out this field' : ""}/>
            </label>

            <label>
                Password:
                    <input type='text' value={password} onChange={handelonchangepassword} title={password === "" ? 'Please fill out this field' : ""}/>
            </label>

            <button className={styles.button} type='submit'>Submit</button>
        </form>

        <p>{message}</p>
      
    </div>
  )
}

export default LoginPage
