import React, { useEffect, useState } from 'react'

export const Clearup = () => {
    const [count, setCount] = useState(window.innerWidth)
    function changeWidth(){
        setCount(()=>{
           return window.innerWidth
        })
    }
    useEffect(()=>{
       window.addEventListener('resize', changeWidth);

       return ()=>window.removeEventListener('resize', changeWidth)
    })
  return (
    <div>
    <h2>the size of the window is <span>{count}</span></h2></div>
  )
}
