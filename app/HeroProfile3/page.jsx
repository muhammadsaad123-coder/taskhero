import React from 'react'
import Header from '../Components/Header'
import HeroProfileCard from '../Components/HeroBurgerCard'
import ProfileCard from '../Components/ProfileViewerCard'
import logo from '../pictures/Logo.png'
import profilepic from '../pictures/Ellipse 1.png'
import foodlogo from '../pictures/pngwing 1.png'
import FoodCard from "../Components/FoodCard";

import ServiceCard from '../Components/ServiceCard';
import ServiceImage from '../pictures/Rectangle 203.png'
import About from '../Components/About';
import ReviewList from '../Components/ReviewList';
import Footer from '../Components/Footer'

function page() {
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
    const FoodData = [
        {
            imagePath: foodlogo, // Replace with your image path
            title: "Electronics",
            route: "/electronics", // Target route
            price: 20,
            info: '441 Kcal'

        },
        {
            imagePath: foodlogo, // Replace with your image path
            title: "Electronics",
            route: "/electronics", // Target route
            price: 20,
            info: '441 Kcal'

        }, {
            imagePath: foodlogo, // Replace with your image path
            title: "Electronics",
            route: "/electronics", // Target route
            price: 20,
            info: '441 Kcal'

        },
        
    ]
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
    return (
        <>
            <div className='bg-gray-100'>


                <Header />
                <div className='p-4  flex md:justify-normal justify-center gap-2 flex-wrap md:flex-nowrap'>
                    <div>
                        <HeroProfileCard />
                    </div>
                    <div>
                        <div className=' w-full h-fit bg-gray-100 rounded-lg  '>
                            <div className='bg-white p-4 rounded-lg'>
                                <h3 className='px-14 mb-4 font-semibold'>Provided Services</h3>
                                <div className='flex justify-around  px-10 flex-wrap gap-4 '>

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
                            <div className='w-full h-fit bg-white rounded-lg py-4 mt-2'>
                                <h3 className='px-14 mb-4 font-semibold'>Featured Eatables</h3>
                                <div className="flex flex-wrap gap-4 justify-around px-10">
                                    {FoodData.map((item, index) => (
                                        <FoodCard
                                            key={index}
                                            imagePath={item.imagePath}
                                            title={item.title}
                                            price={item.price}
                                            info={item.info}
                                            route={item.route}
                                        />
                                    ))}
                                </div>

                            </div>
                            <div className="mt-2   bg-gray-100 flex items-center justify-center">
                                <About
                                    title={aboutData.title}
                                    introduction={aboutData.introduction}
                                    points={aboutData.points}
                                    revisionPolicy={aboutData.revisionPolicy}
                                />
                            </div>
                            <div className="mt-2   flex items-center justify-center ">
                                <ReviewList reviews={reviews} />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className=' pt-0 -mt-2'>
            <Footer/>
            </div>
            
        </>
    )
}

export default page