import React from "react";
import food from "../assets/food.png";

const Hero = () => {
    return (
        // <div className=" p-6 md:columns-2 ">
        <div className="flex mt-10">
            <img src={food} alt="food" className="w-1/2" />
            <div className="flex flex-col gap-5 justify-evenly">
                <h1 className="text-5xl text-left text-left font-bold pr-3">
                Experience the taste from around the world
                </h1>
                <p className="text-lg leading-9 text-justify pr-8">
                The world is full of tasty dishes in different types of cuisine to capture the different cooking styles, traditions, and cultures. Explore and try out recipes from from all around the world. 
                </p>
                {/* make a sign up button at the  */}
                {/* mt-10 ml-40  px-6 py-2 */}
                <button className="bg-[#507b14] text-white  text-center rounded-xl w-36 px-6 py-2 ">
                    About Us
                </button>
            </div>
        </div>
    );
};

export default Hero;
