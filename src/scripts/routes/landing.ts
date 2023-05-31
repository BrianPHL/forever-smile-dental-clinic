import express from "express";
import { Request, Response } from "express";

const landingRoute = express.Router();

landingRoute.use("/", (req: Request, res: Response): void => {

    res.sendFile("landing.html", { root: "public/views" })

})

export default landingRoute