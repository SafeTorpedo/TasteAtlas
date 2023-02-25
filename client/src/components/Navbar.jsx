import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = (props) => {
    const [nav, setNav] = useState(true);
    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <nav className="py-4 px-4 flex bg-[#9cc861] bg-inherit justify-between ">
            <span className="px-8 text_base font-semibold cursor-pointer">
                <Link to="/">TasteAtlas</Link>
            </span>
            <ul className="hidden px-4 md:flex ">
                {props.loggedIn ? (
                    <>
                        <li className="px-5">Welcome, {props.name}</li>
                        <li className="px-5">Log out</li>
                    </>
                ) : (
                    <li className="px-5">Log in</li>
                )}

                {/* Use props to change button to Log out */}
                <li>
                    <Link to="/about">About us</Link>
                </li>
            </ul>
            <div onClick={handleNav} className="md:hidden block">
                {!nav ? (
                    <AiFillCloseCircle className="text-[#507b14]" size={25} />
                ) : (
                    <GiHamburgerMenu className="text-[#507b14]" size={25} />
                )}
            </div>
            <div
                className={
                    !nav
                        ? "fixed left-0 top-0 w-[63%] md:hidden lg:hidden h-full border-r-4  border-r-[#507b14] border-t-4 border-t-[#507b14] bg-[#aad077] ease-in-out duration-500 "
                        : "fixed left-[-100%] ease-out duration-700"
                }
            >
                <h1 className="text-3xl font-bold p-6 m-8">TasteAtlas</h1>
                <ul className="pt-12 p-8 ">
                    {props.loggedIn ? (
                        <>
                            <li className="p-4 border-b border-[#507b14]">
                                Welcome, {props.name}
                            </li>
                            <li className="p-4 border-b border-[#507b14]">
                                Log out
                            </li>
                        </>
                    ) : (
                        <li className="px-5">Log in</li>
                    )}
                    {/* Used props to change button to Log out */}
                    <li className="p-4">
                        <Link to="/about">About us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;