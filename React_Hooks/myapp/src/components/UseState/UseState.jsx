import React from 'react'
import { useState, useEffect } from 'react'


export const UseState = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title = count
    },[count])
  return (
    <>
        <div>
            <div className='container'>
                <button onClick={()=> {
                    setCount(count+1)
                    }}>
                <div>+</div>
                </button>
                <h1>{count}</h1>
                <button onClick={()=>(count===0)?setCount(0):setCount(count-1)}>
                    <div>-</div>
                </button>
            </div>
        </div>
    </>
  )
}
