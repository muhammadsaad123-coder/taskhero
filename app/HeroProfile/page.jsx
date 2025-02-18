'use client'
import React from 'react'
import ProfileCard from '../Components/ProfileViewerCard'
import logo from '../pictures/Logo.png'
import profilepic from '../pictures/Ellipse 1.png'
import Header from '../Components/Header';
import ServiceCard from '../Components/ServiceCard';
import ServiceImage from '../pictures/Rectangle 203.png'
import About from '../Components/About';
import ReviewList from '../Components/ReviewList';
import Footer from '../Components/Footer'

function page() {
  const handleContact = () => {
    alert('Contact Me Clicked');
  };

  const handleHire = () => {
    alert('Hire Me Clicked');
  };
  const reviews = [
    {
      name: 'George James',
      location: 'Chicago, USA',
      avatar: profilepic,
      rating: 5,
      text: 'Rob did another amazing job. He is definitely one of the best freelancers I\'ve ever worked with. And his voice is excellent, too. Fast delivery, impeccable quality.',
      date: '2 weeks ago'
    },
    {
      name: 'George James',
      location: 'Chicago, USA',
      avatar: profilepic,
      rating: 5,
      text: 'Rob did another amazing job. He is definitely one of the best freelancers I\'ve ever worked with. And his voice is excellent, too. Fast delivery, impeccable quality.',
      date: '3 weeks ago'
    },
    
    // Add more reviews here
  ];
  const aboutData = {
    title: "About",
    introduction: "My name is Rob - I'd love to be part of your project.",
    points: [
      "Only RUSSIAN voice. I do not do English with a Russian accent.",
      "I do not record NSFW, racist, religious, political, or discriminatory/hate content of any kind.",
      "I will read your script as written.",
      "Please be clear on how you want the performance and pronunciation.",
      "Audio is delivered via WAV file (raw and processing).",
      "I do not sign any documents",
    ],
    revisionPolicy: "Revision Policy: I will do revisions free of charge if I did something incorrectly or not to your original instructions. If you make changes to the script AFTER I've completed your order, it would be considered a new gig, and charges would apply."
  };
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
    },
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
    },
  ]
  return (
    <>
    <Header/>
      <div className='bg-zinc-100 h-fit'>


        <div className='flex justify-start px-5 mt-4 flex-wrap md:flex-nowrap   gap-4'>
          <div className='h-fit'>
            <ProfileCard image={logo}
              name={"tayyab"}
              address={"asas"}
              onClickProfile={handleContact}
            />

          </div>
          <div className=' w-full h-fit bg-white rounded-lg py-4 '>
            <h3 className='px-14 mb-4 font-semibold'>Provided Services</h3>
            <div className='flex justify-around px-10 flex-wrap gap-4 '>

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

          <div>


          </div>

        </div>
        <div className="mt-5   bg-gray-100 flex items-center justify-center ml-4 mr-4  md:ml-80 md:mr-10 ">
          <About
            title={aboutData.title}
            introduction={aboutData.introduction}
            points={aboutData.points}
            revisionPolicy={aboutData.revisionPolicy}
          />
        </div>
        <div className="mt-5 pb-5  flex items-center justify-center ml-4 mr-4  md:ml-80 md:mr-10">
          <ReviewList reviews={reviews} />
        </div>
        
      </div>
     <div className='mt-10'>
  
     </div>
     
      <Footer/>
     
     
    
    </>
  )
}

export default page