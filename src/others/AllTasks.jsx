import React from 'react'

function AllTasks() {
    return (
        <div id='tasklist' className='bg-black/10 p-5 mt-5 overflow-x-hidden h-48 overflow-auto w-full flex flex-col gap-2 rounded-lg '>
           <div className='bg-red-500/50  text-md font-semibold  py-4 px-6 flex justify-between rounded-lg'>
             <h1>Chaitanya</h1>
             <h2>Make website</h2>
             <h3>Progress</h3>
           </div>
           <div className='bg-blue-500/50  text-md font-semibold py-4 px-6 flex justify-between rounded-lg'>
             <h1>Chaitanya</h1>
             <h2>Make website</h2>
             <h3>Progress</h3>
           </div>
           <div className='bg-green-500/50 text-md font-semibold  py-4 px-6 flex justify-between rounded-lg'>
             <h1>Chaitanya</h1>
             <h2>Make website</h2>
             <h3>Progress</h3>
           </div>
           <div className='bg-yellow-500/50  text-md font-semibold py-4 px-6 flex justify-between rounded-lg'>
             <h1>Chaitanya</h1>
             <h2>Make website</h2>
             <h3>Progress</h3>
           </div>
           <div className='bg-purple-500/50 text-md font-semibold  py-4 px-6 flex justify-between rounded-lg'>
             <h1>Chaitanya</h1>
             <h2>Make website</h2>
             <h3>Progress</h3>
           </div>
        </div>
    )
}

export default AllTasks
