import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function Card({ imagePath, title, route }) {
    return (
      <Link href={route}>
        <div className="cursor-pointer p-4 w-44 h-44 border rounded-lg shadow hover:shadow-lg flex flex-col items-center">
          <Image width={100} height={50} src={imagePath} alt={title} className=' items-center'  />
          <h2 className="text-xl font-semibold ">{title}</h2>
        </div>
      </Link>
    );
  }

export default Card