import React from "react";
import RecipeCard from "../components/RecipeCard";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";

const Dashboard = () => {
    return (
        <div className="h-screen text-[#0d0a0b]">
            <Navbar />

            <Searchbar />
            <RecipeCard />
        </div>
    );
};

export default Dashboard;
