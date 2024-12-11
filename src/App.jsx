import React, { useContext, useEffect, useState } from 'react'
import Loginpage from './components/auth/Loginpage'
import Admindash from './components/dashboard/Admindash'
import Employeedash from './components/dashboard/Employeedash'
import { authContext } from './context/Authprovider'
import { setLocalStorage } from './utils/Localstorage'




function App() {
  localStorage.clear()

  const[user,setUser] = useState(null)
  const authData = useContext(authContext)
  setLocalStorage(authContext)
  const handleLogin = (email,password)=>{

    
    if(email== 'admin@example.com'&& password== 'admin123'){
      setUser("admin")
    }else if(authData && authData.employees.find((e)=>email== e.email&& password == e.password)){
      setUser("employee")

    }else{
          alert('invalid credentials')
    }
   

  }
  return (
    <div className='overflow-hidden h-screen w-screen'>
    {!user?<Loginpage handleLogin = {handleLogin} /> : ""}
    {user == "admin" ? <Admindash  /> : <Employeedash />}
  
    </div>
  )
}

export default App
