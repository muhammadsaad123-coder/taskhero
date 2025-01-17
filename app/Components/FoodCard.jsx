import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function FoodCard({ imagePath, title,price,info, route }) {
    return (
      <Link href={route}>
        <div className='min-w-44 w-fit h-fit rounded-2xl  '>
            <div className=' bg-zinc-100 w-full p-4  rounded-xl'>
                <button className='bg-purple-800 p-1 w-28 text-white rounded-xl'>Featured</button>
                <div className='flex justify-center '>
                <Image src={imagePath} width={200} height={100} alt={title}/>
                </div>
              


            </div>
            <h2 className='text-xl font-semibold'>{title}</h2>
       
            <span className='text-xl font-semibold text-purple-800 mr-2'>${price}</span>
            <span className='text-sm text-zinc-600 font-thin'>{info}</span>

           
            

        </div>
      </Link>
    );
  }

export default FoodCard