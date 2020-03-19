const server = require("./server")


const PORT = process.env.port || 5000

server.listen(PORT, () => {
    console.log(`\n *** Server is running on http://localhost:${PORT} ** \n`)
})