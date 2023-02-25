import React from "react";
import food from "../assets/food.jpg";

const Hero = () => {
    return (
        <div className=" p-6 md:columns-2 ">
            <img src={food} alt="food" className=" h-full inline w-full " />
            <div>
                <h1 className="text-6xl text-left flex justify-center p-8 font-bold">
                    Experience the taste from around the world
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce sapien ipsum, condimentum vel eleifend eget, bibendum
                    lobortis nisl. Integer justo tortor, tincidunt quis placerat
                    eleifend.
                </p>
                {/* make a sign up button at the  */}

                <button className="bg-[#507b14] text-white mt-10 ml-40  px-6 py-2 text-center rounded-xl w-36">
                    Sign up
                </button>
            </div>
        </div>
    );
};

export default Hero;
