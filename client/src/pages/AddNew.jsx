import React, { useState } from "react";
import Navbar from "../components/Navbar";
import recipe from "../assets/recipe.jpg";
import { useNavigate } from "react-router-dom";
// import { redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const AddNew = () => {
    const [title, setTitle] = useState("");
    const [country, setCountry] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("Veg");
    const [link, setLink] = useState("");
    const User=useAuth0();

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        const user = User.user.given_name;
        e.preventDefault();
        try {
            const body = { user,title, country, description, link, category };
            const resp = await fetch(`http://localhost:3080/newPost`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            const jsonData = await resp.json();
            // setRecipe(jsonData);
            // redirect("/dashboard");
        } catch (err) {
            console.error(err.message);
        }
        navigate("/dashboard");
    };

    //radio button event handler
    const handleChange = (e) => {
        setCategory(e.target.value);
    };

    return (
        <React.Fragment>
            <Navbar />
            <div className="flex  ml-60">
                <div className=" py-10 px-10 ">
                    <h1 className="text-3xl font-bold px-10">
                        Share your recipe with the whole world!
                    </h1>
                    <div className="  py-5 px-5 mt-5 columns-2 gap-0 ">
                        <div className="bg-gray-50 opacity-70 px-3 py-3  h-screen rounded-sm">
                            <h1 className="p-2  text-3xl font-extrabold">
                                Add your recipe
                            </h1>

                            <form onSubmit={handleSubmit} className="px-4">
                                <div className="mb-2 mt-2">
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-lg text-black "
                                    >
                                        Dish name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Enter name"
                                        onChange={(e) => {
                                            setTitle(e.target.value);
                                        }}
                                    />

                                    <label
                                        htmlFor="country"
                                        className=" pt-4 block mb-2 text-lg text-black "
                                    >
                                        Country of origin
                                    </label>
                                    <input
                                        id="country"
                                        name="country"
                                        type="text"
                                        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Enter country"
                                        onChange={(e) => {
                                            setCountry(e.target.value);
                                        }}
                                    />

                                    <label
                                        htmlFor="steps"
                                        className=" pt-2 block mb-2 text-lg text-black "
                                    >
                                        Description/Steps
                                    </label>

                                    <textarea
                                        id="steps"
                                        rows={1}
                                        cols={50}
                                        name="steps"
                                        defaultValue="Steps to make this dish are..."
                                        className="bg-gray-200 block border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5"
                                        onChange={(e) => {
                                            setDescription(e.target.value);
                                        }}
                                    />
                                    <div>
                                        <label className="pt-4 block mb-2 text-lg text-black">
                                            Select dish type
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="Veg"
                                                name="category"
                                                checked={category === "Veg"}
                                                onChange={handleChange}
                                            />
                                            Veg
                                        </label>
                                        <label className="ml-3">
                                            <input
                                                type="radio"
                                                value="Non-Veg"
                                                name="category"
                                                checked={category === "Non-Veg"}
                                                onChange={handleChange}
                                            />
                                            Non-Veg
                                        </label>
                                    </div>

                                    <label
                                        htmlFor="video"
                                        className=" pt-4 block mb-2 text-lg text-black "
                                    >
                                        Youtube Video tutorial link (optional)
                                    </label>
                                    <input
                                        id="video"
                                        name="video"
                                        type="text"
                                        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Enter video link"
                                        onChange={(e) => {
                                            setLink(e.target.value);
                                        }}
                                    />

                                    <button
                                        type="submit"
                                        className="bg-[#507b14] text-white mt-2 ml-32  px-6 py-2 text-center rounded-xl w-36"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                        <img className=" h-100 w-72 rounded-md" src={recipe} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AddNew;
