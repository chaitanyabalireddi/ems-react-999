import React, { createContext, useEffect, useState } from 'react'
import { getlocalStorage1 } from '../utils/Localstorage'


export const authContext = createContext()


function Authprovider({children}) {

    const [userdata , setUserdata] = useState(null)
    useEffect(()=>{
        const {employees, admin} = getlocalStorage1()
        setUserdata({employees,admin})
    },[])

    

    return (
        <div>
            <authContext.Provider value={userdata} >
            {children}
            </authContext.Provider>
        </div>
    )
}

export default Authprovider
