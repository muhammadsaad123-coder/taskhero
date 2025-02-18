// components/MyTasks.js
import React, { useState } from 'react';
import TaskCard from './TaskCard';
import PostTask from './PostTask';



const Mytask = () => {
    const[postTask,setPostTask]=useState(false);
  
    const tasks = [
        {
            title: 'Cleaning',
            time: '09:37 PM - 26 Jan, 2024',
        },
        {
            title: 'Cleaning',
            time: '09:37 PM - 26 Jan, 2024',
        },
        {
            title: 'Cleaning',
            time: '09:37 PM - 26 Jan, 2024',
        },
    ];

    const handleSeeOffers = (index) => {
        console.log(`See offers for task ${index + 1}`);
      
    };

    const handleCancelTask = (index) => {
        console.log(`Cancel task ${index + 1}`);
    };

    return (
        !postTask ?(
        <div className=" bg-white p-8 pb-16 rounded-3xl ">
            <div className='flex justify-between '>
                <h1 className=" font-bold text-xl mb-4">My tasks</h1>
                <button onClick={()=>setPostTask(true)} className="mb-4 text-sm bg-purple-800 text-white rounded-3xl px-6 py-2">
                    Post a task
                </button>
            </div>
            
             <div className='flex flex-row flex-wrap md:flex-nowrap justify-center   md:justify-normal gap-6 ' >
                {tasks.map((task, index) => (
                    <TaskCard
                        key={index}
                        title={task.title}
                        time={task.time}
                        onSeeOffers={() => handleSeeOffers(index)}
                        onCancelTask={() => handleCancelTask(index)}
                    />
                ))}
            </div>

             
           

        </div>
        ):(
    
                 <PostTask/>
            
            
        )
    );
};

export default Mytask;
