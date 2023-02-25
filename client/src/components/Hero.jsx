import React from "react";
import food from "../assets/food.png";

const Hero = () => {
    return (
        // <div className=" p-6 md:columns-2 ">
        <div className="flex mt-10">
            <img src={food} alt="food" className="w-1/2 h-full" />
            <div className="">
                <h1 className="text-5xl text-left justify-center p-8 font-bold">
                Experience the taste from around the world
                </h1>
                <p className="text-lg w-3/4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce sapien ipsum, condimentum vel eleifend eget, bibendum
                    lobortis nisl. Integer justo tortor, tincidunt quis placerat
                    eleifend.
                </p>
                {/* make a sign up button at the  */}

                <button className="bg-[#507b14] text-white mt-10 ml-40  px-6 py-2 text-center rounded-xl w-36">
                    About Us
                </button>
            </div>
        </div>
    );
};

export default Hero;
