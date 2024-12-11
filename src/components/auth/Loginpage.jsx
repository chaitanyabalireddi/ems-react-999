import React, { useState } from 'react'

function Loginpage({handleLogin}) {
    

    const mouseHandler = (e)=>{
        const mouse = document.getElementById(`round`);
        const x = e.pageX-50 + "px"
        const y = e.pageY-50 + "px"
        mouse.style.display = "block"
        mouse.style.top = y
        mouse.style.left = x
        mouse.animate({
            top : y,
            left : x
        }, {duration: 900, fill: "backwards"})
    }
    const[email,setEmail]= useState("")
    const[password,setPassword] = useState("")

     const submitHandler = (ev)=>{
        ev.preventDefault();
        setEmail("")
      setPassword("")
      handleLogin(email,password)
     }
    return (
        <div onMouseMove={mouseHandler} className=' overflow-hidden flex flex-col relative bg-black h-screen w-screen  justify-center items-center'>
            <div id='round' className='w-[6vw] h-[6vw] absolute round  top-0 left-0'></div>
            <div className=' z-50 bg-transparent border-2 border-white rounded-xl p-2 overflow-hidden w-1/3 py-20 shadow-xl flex-col items-center justify-center'>
                 <h1 className='text-center text-pretty font-semibold text-white/90 pointer-events-none text-4xl'>Login Page</h1>
                <form onSubmit={submitHandler} className='flex w-full gap-3 p-10 h-full flex-col justify-center items-center' >
                    <input 
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)

                    }} type="email" placeholder='Enter your email' className='bg-black/40 h-10 hover:border-2 hover:border-white hover:bg-black/80 w-full pl-4 outline-none text-white text-lg rounded-lg placeholder-white' required/>
                    <input value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                    }} type="password" placeholder='Enter password' className='bg-black/40 h-10 hover:border-2 hover:border-white hover:bg-black/80 w-full pl-4 outline-none text-white text-lg rounded-lg placeholder-white' required/>
                    <button className='bg-black/30  text-lg text-white hover:bg-black/70 hover:text-white w-1/5 h-1/5 rounded-lg' type='submit'>Login</button>
                </form>
            </div>
            
        </div>
    )
}

export default Loginpage
