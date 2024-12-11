import React, { useContext } from 'react'
import Header from '../../others/Header'
import Createtask from '../../others/Createtask'
import AllTasks from '../../others/AllTasks'
import { authContext } from '../../context/Authprovider'


function Admindash() {
    
   
   
    
    return (
        <div className='h-full overflow-x-hidden bg-black/30 w-screen p-10'>
            <Header  />
            <Createtask />
            <AllTasks />
        </div>
    )
}

export default Admindash
