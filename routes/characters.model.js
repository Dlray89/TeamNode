const database = require('../data/db.config')



module.exports = {
    find,
}

function find(){
    return database("characters")
}