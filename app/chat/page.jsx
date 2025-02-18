import React from 'react'
import Header from '../Components/Header'
import ChatScreen from '../Components/ChatScreen'
import Footer from '../Components/Footer'
function page() {
    return (
        <>
        <Header/>
        <div className='bg-gray-100'>

       
   
            <div className='py-2 bg-gray-100 px-4 '>
                <ChatScreen />

            </div>
            </div>
            <Footer/>
        </>
    )
}

export default page