import React, { useState } from "react";
import { Link } from "react-router-dom";

const Searchbar = (props) => {
    const [searchTitle, setSearchTitle] = useState("");

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3080/getrecipe/${searchTitle}`)
            const jsonData = await response.json();
            setInfo(jsonData)
        } catch (err) {
            console.error(err.message)
        }
    }
    

    return (
        <div>
            <div className="h-9 w-5/12 max-[725px]:w-full text-center mt-6">
                Search a country for a meal recipe
            </div>
            <div className="w-full flex justify-center">
                <form action="" className="" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="text-black w-4/6 h-9 rounded-full px-10 bg-slate-200 ml-5 focus:bg-white focus:outline-none"
                        placeholder="Search"
                        onChange={(e)=>{setSearchTitle(e.target.value)}}
                    />
                </form>
                <span>OR</span>
                <Link to="/dashboard/addNew">
                        <button className="bg-[#507b14] text-sm md:text-base p-auto  rounded-md h-9 px-4 text-center text-white flex-none mr-5">
                            Create a Meal
                        </button>
                </Link>
            </div>
            
        </div>
    );
};

export default Searchbar;
