import React from 'react'
import Header from '../../others/Header'
import TaskNumber from '../../others/TaskNumber'
import Tasklist from '../Tasklist/Tasklist'

function Employeedash() {
    
    return (
        <div className='h-screen w-full p-7'>
            <Header  />
            <TaskNumber />
            <Tasklist />
        </div>
    )
}

export default Employeedash
