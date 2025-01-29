'use client'
import React from 'react'
import Header from '../Components/Header'
import Addtocard from '../Components/Addtocard'
import { useState } from 'react';

function page() {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Cheese Burger', details: 'Pick up at 117 Clarendon Park Rd', price: 2.5 },
        { id: 2, name: 'Cheese Burger', details: 'Pick up at 117 Clarendon Park Rd', price: 2.5 },
        { id: 3, name: 'Cheese Burger', details: 'Pick up at 117 Clarendon Park Rd', price: 2.5 },
        { id: 4, name: 'Cheese Burger', details: 'Pick up at 117 Clarendon Park Rd', price: 2.5 },
    ]);

    const handleRemove = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };
    return (
        <>
         <Header/>
         <Addtocard  items={cartItems} onRemove={handleRemove}/>

        </>
    )
}

export default page