import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";

const Dashboard = () => {
    const [info, setInfo] = useState([]);

    const renderCard = async (req, res) => {
        try {
            const response = await fetch(`http://localhost:3080/getrecipe/`);
            const jsonData = await response.json();
            setInfo(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        renderCard();
    }, []);
    return (
        <div className="h-screen text-[#0d0a0b]">
            <Navbar />

            <Searchbar />
            <div className="">
                <div className="grid grid-cols-4">
                    {info.map((info) => (
                        <RecipeCard
                            key={info.id}
                            country={info.country}
                            dish={info.title}
                            category={info.category}
                            description={info.description}
                            link={info.link}
                            user={info.user}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
