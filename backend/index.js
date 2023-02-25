const express = require("express");
const cors = require("cors");
const db = require("./connection");
const { auth } = require("express-openid-connect");
const createRecipe = require("./createRecipe");

const app = express();
app.use(cors());
app.use(express.json());

db()
    .then(() => {
        console.log("connected to cloud");
    })
    .catch((err) => {
        console.log(err);
    });

//this will get recipe
app.get("/getrecipe", async(req,res)=>{
    try {
        const getRecipe = await createRecipe.find();
        res.json(getRecipe)
    } catch (err) {
        console.log(err.message)
    }
})



//this will create new post
app.post("/newPost", async (req, res) => {
    try {
        const {user, title, country, description, link, category } = req.body;
        const newRecipe = await createRecipe.create({
            user,
            title,
            country,
            description,
            link,
            category,
        });
        res.json(newRecipe);
    } catch (err) {
        console.log(err.message);
    }
});

//We need to have one connection.js where we will connect to mongo atlas via mongoose

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.AUTH_SECRET,
    baseURL: "http://localhost:3080",
    clientID: process.env.AUTH_CLIENT_ID,
    issuerBaseURL: process.env.AUTH_BASE_URL,
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
    res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

const { requiresAuth } = require("express-openid-connect");

app.get("/profile", requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});

app.listen(3080, () => {
    console.log("Listening on http://localhost:3080/");
});
