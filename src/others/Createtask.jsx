import React from 'react'

function Createtask() {
    return (
        <div className='mt-10 overflow-x-hidden'>
                <form className='flex flex-wrap px-10 py-5 border-2 bg-black/10 rounded-xl border-black w-full items-start -28 '>
                    <div className='w-1/2'>
                    <div className='mt-3'>
                    <h3 className='text-xl font-semibold  '>Task Title</h3>
                    <input className='  px-2 w-52    rounded-lg bg-transparent text-black text-md font-medium pb-1 border-2 outline-none border-black placeholder:text-black' type="text" placeholder='Enter your task'/>
                    </div>
                    
                    <div className='mt-3'>
                    <h3 className='text-xl font-semibold  '>Date</h3>
                    <input className=' px-2 w-52   rounded-lg bg-transparent text-black text-md font-medium pb-1 border-2 outline-none border-black placeholder:text-black' type="date" />
                    </div>
                    <div className='mt-3'>
                    <h3 className='text-xl font-semibold  '>Assign to</h3>
                    <input  className=' px-2 w-52   rounded-lg bg-transparent text-black text-md font-medium pb-1 border-2 outline-none border-black placeholder:text-black'type="text" placeholder='Enter employee name'/>
                    
                    </div>
                    <div className='mt-3'>
                        <h3 className='text-xl  font-semibold '>Category</h3>
                        <input className='  px-2 w-52  rounded-lg bg-transparent text-black text-md font-medium pb-1 border-2 outline-none border-black placeholder:text-black' type="text" placeholder='Type of task'/>
                    </div>

                    </div>       
                    <div className='w-1/2 flex flex-col'>
                    <h3 className='text-xl font-semibold '>Description</h3>
                    <textarea className='py-2  px-2 w-3/4 rounded-lg bg-black/20 text-white text-md font-medium pb-1 border-2 outline-none border-black placeholder:text-white' name="" id="" rows= "10" cols="30"></textarea>
                    <button className='rounded-lg w-3/4 bg-blue-500/35 px-3 py-2 mt-5'>Create Task</button>
                    </div>

                </form>
            </div>
    )
}

export default Createtask
