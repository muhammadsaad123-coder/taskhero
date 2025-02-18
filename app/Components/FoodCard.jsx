import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function FoodCard({ imagePath, title,price,info, route }) {
    return (
      <Link href={route}>
        <div className='min-w-44 max-w-48 w-fit h-fit rounded-2xl  '>
            <div className=' bg-zinc-100 w-full p-4  rounded-xl'>
                <button className='bg-purple-900 text-sm p-1 px-2 text-white rounded-md'>Featured</button>
                <div className='flex justify-center '>
                <Image src={imagePath} width={200} height={100} alt={title}/>
                </div>
              


            </div>
            <h2 className='text-lg font-semibold text-slate-700'>{title}</h2>
       
            <span className='text-xl font-semibold text-purple-900 mr-2'>${price}</span>
            <span className='text-sm text-zinc-700 font-thin'>{info}</span>

           
            

        </div>
      </Link>
    );
  }

export default FoodCard