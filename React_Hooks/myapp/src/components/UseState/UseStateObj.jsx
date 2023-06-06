import React from 'react'
import { useState } from 'react'
const UseStateObj = () => {
    const [input, setInput] = useState({
        name : "",
        email:"",
        pass:""
    })

    function changeoutput(e){
        const username = e.target.name;
        const value = e.target.value;

        setInput((prev)=>{
            return {...prev, [username] : value}
        })
    }

  return (
    <div className='container'>
    <div className='section'>
        <form className='myform'>
            <input type="text" name="name" id="name" placeholder='Enter Name' value={input.name} onChange={changeoutput}/>
            <input type="email" name="email" id="email" placeholder='Enter Email' value={input.email} onChange={changeoutput} />
            <input type="password" name="pass" id="pass" placeholder='Enter Password' value={input.pass} onChange={changeoutput} />
            <input type="submit" value="Submit" id='btn'/>
        </form>
        <h1>name is {input.name} email is {input.email}</h1>
    </div>
    </div>
  )
}

export default UseStateObj