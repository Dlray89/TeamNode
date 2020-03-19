const express = require("express")

const database = require('./characters.model')

const router = express.Router()


//http requests GET,PUT,POST,DELETE

router.get("/", (req,res) => {
    database
    .find()
    .then(character => {
        res.status(200).json(character)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} not able to grab your information`})
    })
})

module.exports = router