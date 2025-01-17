'use client'
import Image from "next/image";
import Header from "./Components/Header";
import Card from "./Components/Card";
import logo from '../app/pictures/1_clothes&shoes.png'
import FoodCard from "./Components/FoodCard";
import foodlogo from '../app/pictures/pngwing 1.png'
import ProfileCard from "./Components/ProfileCard";
import hero from './pictures/Ellipse 1.png'
import ServiceCard from "./Components/ServiceCard";
import ServiceImage from './pictures/Rectangle 203.png'
import DownloadApp from './pictures/Banner1 1.png'
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";


export default function Home() {
  const handleProfileClick = () => {
    alert("Profile button clicked!");
  };
  const cardData = [
    {
      imagePath: logo, // Replace with your image path
      title: "Clothes & Shoes",
      route: "/clothes-and-shoes", // Target route
    },
    {
      imagePath: logo, // Replace with your image path
      title: "Electronics",
      route: "/electronics", // Target route
    },
    {
      imagePath: logo, // Replace with your image path
      title: "Electronics",
      route: "/electronics", // Target route
    }, {
      imagePath: logo, // Replace with your image path
      title: "Electronics",
      route: "/electronics", // Target route
    }, {
      imagePath: logo, // Replace with your image path
      title: "Electronics",
      route: "/electronics", // Target route
    }, {
      imagePath: logo, // Replace with your image path
      title: "Electronics",
      route: "/electronics", // Target route
    }, {
      imagePath: logo, // Replace with your image path
      title: "Electronics",
      route: "/electronics", // Target route
    }, {
      imagePath: logo, // Replace with your image path
      title: "Electronics",
      route: "/electronics", // Target route
    },
  ];
const FoodData=[
  {
      imagePath: foodlogo, // Replace with your image path
      title: "Electronics",
      route: "/electronics", // Target route
      price:20,
      info:'441 Kcal'

  },
  {
    imagePath: foodlogo, // Replace with your image path
    title: "Electronics",
    route: "/electronics", // Target route
    price:20,
    info:'441 Kcal'

},{
  imagePath: foodlogo, // Replace with your image path
  title: "Electronics",
  route: "/electronics", // Target route
  price:20,
  info:'441 Kcal'

},
]
const ProfileData=[
  {
    image:hero,
    name:"John",
    address:"Wallstreet Avenue, NY, USA"
  },
  {
    image:hero,
    name:"John",
    address:"Wallstreet Avenue, NY, USA"
  }, {
    image:hero,
    name:"John",
    address:"Wallstreet Avenue, NY, USA"
  },
  {
    image:hero,
    name:"John",
    address:"Wallstreet Avenue, NY, USA"
  }, {
    image:hero,
    name:"John",
    address:"Wallstreet Avenue, NY, USA"
  }, {
    image:hero,
    name:"John",
    address:"Wallstreet Avenue, NY, USA"
  }, {
    image:hero,
    name:"John",
    address:"Wallstreet Avenue, NY, USA"
  }, {
    image:hero,
    name:"John",
    address:"Wallstreet Avenue, NY, USA"
  },
 
]
const ServiceData=[
  {
    image:ServiceImage,
    title:"product",
    rating:'4.0',
    reviews:"900+",
    description:"I will provide this service",
    price:"$25/hr"
  },
  {
    image:ServiceImage,
    title:"product",
    rating:'4.0',
    reviews:"900+",
    description:"I will provide this service",
    price:"$25/hr"
  }, {
    image:ServiceImage,
    title:"product",
    rating:'4.0',
    reviews:"900+",
    description:"I will provide this service",
    price:"$25/hr"
  }, {
    image:ServiceImage,
    title:"product",
    rating:'4.0',
    reviews:"900+",
    description:"I will provide this service",
    price:"$25/hr"
  },
  
]
  return (
    <>
    <div className="w-full">
      

    
      <Header />
      <Hero/>
      <div className="bg-white p-5  ">
        <h1 className="font-bold pl-16 text-2xl mb-2">Categories</h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {cardData.map((item, index) => (
            <Card
              key={index}
              imagePath={item.imagePath}
              title={item.title}
              route={item.route}
            />
          ))}
        </div>
      </div>
      <hr className="text-zinc-700"/>
      <div className=" p-5  ">
        <h1 className="font-bold pl-16 text-2xl mb-2 ">Categories</h1>
        <div className="flex flex-wrap gap-4 justify-center">
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
      <hr className="text-zinc-700 "/>


      <h1 className="pl-16  font-bold mt-8">Popular heroes in your Region</h1>
      <div className=" p-5 w-full justify-center  flex-wrap gap-4 flex items-start ">
       
       {ProfileData.map((item,index)=>(
        <ProfileCard
        key={index}
        image={item.image}
        name={item.name}
        address={item.address}
        onClickProfile={handleProfileClick}
      />

       ))} 
      
    </div>
    <h1 className="pl-16  font-bold mt-8">Popular Service in your Region</h1>
    <div className=" flex p-5 flex-wrap gap-x-8 gap-y-8 items-start justify-center">
      {ServiceData.map((item,index)=>(
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
    <hr className="text-zinc-700 "/>
    <div id="banner" className="HeroSection  w-full h-96   mb-10 ">
     

    </div>
    </div>
    <Footer/>
   
    </>
  );
}
