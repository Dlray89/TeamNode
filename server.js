const express = require("express")
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require("cors")

// const charactersRouter = require("./routes")


const server = express()

server.use(helmet())
server.use(morgan("dev"))
server.use(cors())
server.use(express.json())
// server.use("/api/characters", charactersRouter )

server.get("/", (req,res) => {
    res.status(200).json({Message: "We have successfully connnected"})
})

module.exports = server