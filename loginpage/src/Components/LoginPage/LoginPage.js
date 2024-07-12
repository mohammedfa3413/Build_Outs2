import React from 'react'
import styles from "./LoginPage.module.css"
import {useState} from "react"

function LoginPage() {
        const [username , setusername] = useState("");
        const [password , setpassword] = useState("");
        const [message, setMessage] = useState("");
        const [submited, setsubmited] =useState(false);




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
                setMessage("")
                setsubmited(true)
        }else{
            
            setMessage("Invalid username or password")
            setsubmited(false);
        }  

        }



  return (
    <div className={styles.container}>
        <h1 className={styles.h1}>Login Page</h1>

       <div>{submited ? (
        <p>{`wlcome ${username}!`}</p>
        ):""}</div>


        <form className={styles.form} onClick={handelsubmit}>
        {message && <p className='error'>{message}</p>}

            <label htmlFor='username'>
                UserName:
                    <input type='text' value={username} onChange={handelonchangeuser} title={username === "" ? 'Please fill out this field' : ""}/>
            </label>

            <label htmlFor='password'>
                Password:
                    <input type='text' value={password}  onChange={handelonchangepassword} title={password === "" ? 'Please fill out this field' : ""}/>
            </label>

            <button className={styles.button} type='submit'>Submit</button>
        </form>

       
      
    </div>
  )
}

export default LoginPage
