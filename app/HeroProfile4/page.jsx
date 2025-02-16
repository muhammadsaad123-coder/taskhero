'use client'
import React from 'react'
import Header from '../Components/Header'
import CleaningCard from '../Components/CleaningCard';

import ProfileCard2 from '../Components/ProfileCard2';
import ReviewList from '../Components/ReviewList';
import About from '../Components/About';
import profilepic from '../pictures/Ellipse 1.png';
import Footer from '../Components/Footer';
import BurgerZoneCard from '../Components/BurgerZoneCard';
import burgerpicture from '../pictures/burgerpicture.png'

function page() {
    const cleaningItems = [
        { id: 1, image: burgerpicture, title: 'I will clean your house' },
        { id: 2, image: burgerpicture, title: 'I will clean your house' },
        { id: 3, image: burgerpicture, title: 'I will clean your house' },
        { id: 4, image: burgerpicture, title: 'I will clean your house' },
        { id: 5, image: burgerpicture, title: 'I will clean your house' },
        

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
 
    return (
        <>
            <div className='bg-gray-100'>
             
                <div className='flex justify-center flex-wrap-reverse md:flex-nowrap gap-4 pr-4 '>
                    <div >
                        <div className="p-4 pb-2  md:pr-0   ">
                           
                            <CleaningCard
                                title="Double Sausage and Muffin"
                                items={cleaningItems}
                                onFavoriteClick={() => alert('Added to favorites!')}
                            />
                        </div>
                        <div className="pt-0 p-4 pb-2 md:pr-0   bg-gray-100 flex items-center justify-center ">
                            <About
                                title={aboutData.title}
                                introduction={aboutData.introduction}
                                points={aboutData.points}
                                revisionPolicy={aboutData.revisionPolicy}
                            />
                        </div>
                        <div className=" pb-2 p-4 pt-0 md:pr-0  flex items-center justify-center">
                            <ReviewList reviews={reviews} />
                        </div>

                    </div>


                    <div className='mt-4'>
                        <BurgerZoneCard />
                    </div>

                </div>
                <div>
                    <Footer />
                </div>

            </div>
        </>
    )
}

export default page