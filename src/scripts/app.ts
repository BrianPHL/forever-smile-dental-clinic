import express from "express";
import dotenv from "dotenv";
import landingRoute from "./routes/landing.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/static", express.static("public"))
app.use("/node_modules", express.static("node_modules"))

app.use("/", landingRoute)

app.listen(process.env.EXPRESS_PORT)