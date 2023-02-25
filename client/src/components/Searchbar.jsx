import React from "react";

const Searchbar = () => {
    return (
        <div>
            <div className="h-9 w-5/12 max-[725px]:w-full text-center mt-6">
                Search a country for a meal recipe
            </div>
            <form action="" className="w-full flex justify-center gap-5">
                <input
                    type="text"
                    className="text-black w-4/6 h-9 rounded-full px-10 bg-slate-200 ml-5 focus:bg-white focus:outline-none"
                    placeholder="Search"
                />
                <button className="bg-[#507b14] rounded-md h-9 px-4 text-center text-white flex-none mr-5">
                    Create a Meal
                </button>
            </form>
        </div>
    );
};

export default Searchbar;
