import React from 'react'

function Header() {
    
    return (
        
        <div className='flex items-end justify-between'>
            
            <h1 className='text-2xl font-semibold'>Namaste <br /> <span className='text-3xl font-bold'> !!</span></h1>
            <button className='bg-red-600 font-medium rounded-lg text-lg p-3'>Logout</button>
        </div>
    )
}

export default Header
