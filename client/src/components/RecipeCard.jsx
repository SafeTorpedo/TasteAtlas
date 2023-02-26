import React, { useEffect, useState } from "react";
import flag from "../assets/image 6.png";
import searchImages from "../api";

const RecipeCard = (props) => {
    const [imageUrl, setImageUrl] = useState("");
    const [info, setInfo] = useState("");


    const renderCard = async(req,res)=>{
        try {
            const response = await fetch(`http://localhost:3080/getrecipe/`)
            const jsonData = await response.json();
            setInfo(jsonData)
            console.log(jsonData)
        } catch (err) {
            console.error(err.message)
        }
    }

    const search = async () => {
        const response = await searchImages(props.dish);
        setImageUrl(response);
    };

    search();
    useEffect(()=>{
        renderCard();
    },[])

    return (
        <div className="w-72 m-16 rounded-xl overflow-hidden shadow-lg bg-[#FFFFFF] justify-center content-center flex flex-col ">
            <img className="w-full h-48" src={imageUrl} alt="image" />
            <div className="flex flex-col pl-4 pb-6 ">
                <div className="relative">
                    <div className="flex flex-col items-center rounded-full w-20 h-20 shadow-2xl m-auto justify-center absolute -top-10 left-20">
                        <img
                            crossOrigin="anonymous"
                            className="w-10"
                            src={`https://countryflagsapi.com/png/${props.country}`}
                            alt=""
                        />
                    </div>
                    <h1 className="text-[#191919] text-3xl font-bold items-center mt-12">
                        {props.dish}
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
};

export default RecipeCard;
