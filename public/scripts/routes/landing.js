import express from "express";
const landingRoute = express.Router();
landingRoute.use("/", (req, res) => {
    res.sendFile("landing.html", { root: "public/views" });
});
export default landingRoute;
