import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import AddNew from "./pages/AddNew";

const App = () => {
    return (
        <div className="h-screen app font-ibm">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/dashboard/addNew" element={<AddNew />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
