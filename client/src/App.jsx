import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <React.Fragment>
            <div className="h-screen bg-black text-white ">
                <Navbar />
                <h1 className="text-5xl text-center p-8">
                    WELCOME TO TASTE ATLAS
                </h1>
                {/* front end working */}
            </div>
        </React.Fragment>
    );
};

export default App;
