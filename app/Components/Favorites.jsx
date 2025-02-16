import React from 'react'
import hero from '../pictures/Ellipse 1.png'
import ProfileCard from './ProfileCard'
import ServiceImage from '../pictures/Rectangle 203.png'
import ServiceCard from "./ServiceCard";


function Favorites() {
  const handleProfileClick = () => {
    alert("Profile button clicked!");
  };
  const ProfileData = [
    {
      image: hero,
      name: "John",
      address: "Wallstreet Avenue, NY, USA"
    },
    {
      image: hero,
      name: "John",
      address: "Wallstreet Avenue, NY, USA"
    }, {
      image: hero,
      name: "John",
      address: "Wallstreet Avenue, NY, USA"
    },
    {
      image: hero,
      name: "John",
      address: "Wallstreet Avenue, NY, USA"
    }
  ]
  const ServiceData = [
    {
      image: ServiceImage,
      title: "product",
      rating: '4.0',
      reviews: "900+",
      description: "I will provide this service",
      price: "$25/hr"
    },
    {
      image: ServiceImage,
      title: "product",
      rating: '4.0',
      reviews: "900+",
      description: "I will provide this service",
      price: "$25/hr"
    }, {
      image: ServiceImage,
      title: "product",
      rating: '4.0',
      reviews: "900+",
      description: "I will provide this service",
      price: "$25/hr"
    }, {
      image: ServiceImage,
      title: "product",
      rating: '4.0',
      reviews: "900+",
      description: "I will provide this service",
      price: "$25/hr"
    },

  ]
  return (
    <>
      <div className='bg-gray-100  h-full shadow-none'>
        <div className='bg-white rounded-lg w-full h-fit p-6'>
          <h3 className='font-semibold'>Bookmarked Heroes</h3>
          <div className=" mt-2 w-full justify-center md:justify-normal  flex-wrap gap-4 flex items-start ">

            {ProfileData.map((item, index) => (
              <ProfileCard
                key={index}
                image={item.image}
                name={item.name}
                address={item.address}
                onClickProfile={handleProfileClick}
              />

            ))}

          </div>

        </div>

        <div className='bg-white rounded-lg w-full mt-4 h-fit p-6'>
          <h3 className='font-semibold'>Linked Services</h3>
          <div className=" mt-2 w-full justify-normal  flex-wrap gap-4 flex items-start ">

          {ServiceData.map((item, index) => (
              <ServiceCard
                key={index}
                image={item.image}
                title={item.title}
                rating={item.rating}
                reviews={item.reviews}
                description={item.description}
                price={item.price}
              />

            ))}

          </div>
         

        </div>
      </div>
    </>
  )
}

export default Favorites