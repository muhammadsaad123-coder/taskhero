import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function Card({ imagePath, title, route }) {
    return (
      <Link href={route}>
        <div className="cursor-pointer   w-28 h-fit min-h-28 border rounded-lg shadow hover:shadow-lg flex flex-col items-center">
          <Image width={60} height={40} src={imagePath} alt={title} className=' items-center'  />
          <h2 className=" text-sm px-3 font-semibold ">{title}</h2>
        </div>
      </Link>
    );
  }

export default Card