import React from "react";

import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";

const Dashboard = () => {
    return (
        <div className="h-screen text-[#0d0a0b]">
            <Navbar loggedIn={true} name="Test" />

            <Searchbar />
        </div>
    );
};

export default Dashboard;
