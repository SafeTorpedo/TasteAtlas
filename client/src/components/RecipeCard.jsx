import React from "react";
import flag from "../assets/image 6.png";
function RecipeCard() {
    return (
        <div class="w-72 m-16 rounded-xl overflow-hidden shadow-lg bg-[#FFFFFF] justify-center content-center flex flex-col">
            <img
                class="w-full h-48"
                src="https://via.placeholder.com/350x150"
                alt="Placeholder Image"
            />
            <div className="flex flex-col p-2 pb-6 justify-center items-center">
                <div>
                    <div className="flex flex-col items-center rounded-full w-20 h-20 shadow-2xl m-auto justify-center">
                        <img className="" src={flag} alt="" />
                    </div>
                    <h1 className="text-[#191919] text-3xl font-bold	items-center pt-4">
                        Wada Pav
                    </h1>
                </div>
                <div class="px-6 py-4 items-start">
                    <h2 class="font-bold text-sm mb-2 text-[#04BF00]">
                        Vegetarian
                    </h2>
                    <h2 class="font-bold text-sm mb-2 text-[#7E7E7E]">
                        By Jacob Stanly
                    </h2>
                </div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white  font-medium py-2 px-6 rounded-xl w-36">
                    Full Recipe
                </button>
            </div>
        </div>
    );
}

export default RecipeCard;
