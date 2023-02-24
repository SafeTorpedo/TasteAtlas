import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./index.css";

const App = () => {
    return (
        <div className="h-screen bg-[#aad077] text-[#0d0a0b] app">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <React.Fragment>
                                <Navbar />
                                <Hero />
                            </React.Fragment>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <React.Fragment>
                                <Navbar />
                            </React.Fragment>
                        }
                    />
                </Routes>
            </BrowserRouter>
            {/* front end working */}
        </div>
    );
};

export default App;
