import React, { useState } from 'react'
import styles from "./Calculator.module.css"

function Calculator() {
    const [input , setinput] = useState("");
    const [result,setresult] = useState("");

    const handleClick = (value) => {
        // console.log(value);
        setinput(input + value);
      };


    const handelClear = ()=>{
        setinput("")
        setresult("")
    }  

    const handelresult = ()=>{
      if(input === ""){
          setresult("Error");
      }else{
        try {
          setresult(eval(input));
        } catch (error) {
          setresult('Error', error);
        }
      }
        
    }
  
  return (
    <div className={styles.container}>
        <h1 className={styles.h1}>React Calculator</h1>
        <div className={styles.input} >
            <input type='text' value={input} readOnly/>
                <div className={styles.displayResult}>{result}</div>
        </div>

        <div className={styles.button}>
            <button  onClick={()=>handleClick('7')}>7</button>
            <button  onClick={()=>handleClick('8')}>8</button>
            <button  onClick={()=>handleClick('9')}>9</button>
            <button  onClick={()=>handleClick('+')}>+</button>
            <button  onClick={()=>handleClick('4')}>4</button>
            <button  onClick={()=>handleClick('5')}>5</button>
            <button  onClick={()=>handleClick('6')}>6</button>
            <button  onClick={()=>handleClick('-')}>-</button>
            <button  onClick={()=>handleClick('1')}>1</button>
            <button  onClick={()=>handleClick('2')}>2</button>
            <button  onClick={()=>handleClick('3')}>3</button>
            <button onClick={()=>handleClick('*')}>*</button>
            <button onClick={handelClear} >C</button>
            <button  onClick={()=>handleClick('0')}>0</button>
            <button onClick={handelresult} >=</button>
            <button  onClick={()=>handleClick('/')}>/</button>
        </div>
    </div>
  )
}

export default Calculator
