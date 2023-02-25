import React from "react";
import flag from "../assets/image 6.png";
function RecipeCard({country}) {
    return (
      // // <div class="grid grid-cols-[repeat(4,1fr)] mt-10">
      //     <div class="bg-white shadow-[1px_1px_8px_rgba(170,170,170,0.595)] w-[70%] mx-auto my-0 rounded-[10px]">
      //         <div class="food-img">
      //             <img className="w-full rounded-[10px]"
      //                 src="https://via.placeholder.com/350x150"
      //                 alt="food image"
      //             />
      //         </div>
      //         <div class="w-4/5 grid grid-rows-[1fr_1fr_1fr_1fr_0.3fr] gap-0.5 mx-auto my-0">
      //             <h3 class="text-3xl font-semibold pt-2.5">Pav Bhaji</h3>
      //             <p class="text-lg text-[#04bf00]">Vegetarian</p>
      //             <p class="text-sm text-[#aaa]">By Salman Khan</p>
      //             <button class="w-[70%] self-center text-white bg-[#2e89fd] shadow-[0_4px_5px_rgb(104,104,104)] cursor-pointer transition-all duration-[0.3s] mx-auto my-0 p-2 rounded-[10px] border-[none] hover:shadow-[0_0px_20px_rgba(104,104,104,0.352)]">See Recipe</button>
      //         </div>
      //     </div>
      // // </div>
      <div className="w-72 m-16 rounded-xl overflow-hidden shadow-lg bg-[#FFFFFF] justify-center content-center flex flex-col ">
        <img
          className="w-full h-48"
          src="https://via.placeholder.com/350x150"
          alt="Placeholder Image"
        />
        <div className="flex flex-col pl-4 pb-6 ">
          <div className="relative">
            <div className="flex flex-col items-center rounded-full w-20 h-20 shadow-2xl m-auto justify-center absolute -top-10 left-20">
              <img
                crossOrigin="anonymous"
                className="w-10"
                src={`https://countryflagsapi.com/png/${country}`}
                alt=""
              />
            </div>
            <h1 className="text-[#191919] text-3xl font-bold items-center mt-12">
              Wada Pav
            </h1>
          </div>
          <div className="items-start mb-3">
            <h2 className="font-bold text-sm mb-2 text-[#04BF00]">
              Vegetarian
            </h2>
            <h2 className="font-bold text-sm mb-2 text-[#7E7E7E] pt-5">
              By Jacob Stanly
            </h2>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white  font-medium py-2 px-6 rounded-xl w-36 mx-auto">
            Full Recipe
          </button>
        </div>
      </div>
    );
}

export default RecipeCard;
