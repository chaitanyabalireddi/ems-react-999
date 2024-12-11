import React from 'react'

function TaskNumber() {
    return (
        <div className='flex justify-between gap-5 mt-10'>
            <div className='rounded-xl py-6 px-9 bg-red-400/60  w-[45%]'>
                <h2 className='cursor-default text-3xl font-semibold'>0</h2>
                <h2 className='cursor-default text-3xl font-bold'>Failed Tasks</h2>
            </div>
            <div className='rounded-xl py-6 px-9 bg-blue-400/60  w-[45%]'>
                <h2 className='cursor-default text-3xl font-semibold'>0</h2>
                <h2 className='cursor-default text-3xl font-bold'>Failed Tasks</h2>
            </div>
            <div className='rounded-xl py-6 px-9 bg-yellow-400/60  w-[45%]'>
                <h2 className='cursor-default text-3xl font-semibold'>0</h2>
                <h2 className='cursor-default text-3xl font-bold'>Failed Tasks</h2>
            </div>
            <div className='rounded-xl py-6 px-9 bg-green-400/60  w-[45%]'>
                <h2 className='cursor-default text-3xl font-semibold'>0</h2>
                <h2 className='cursor-default text-3xl font-bold'>Failed Tasks</h2>
            </div>
        </div>
    )
}

export default TaskNumber
