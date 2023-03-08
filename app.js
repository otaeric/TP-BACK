const express = require("express")
const app = express()
const port = 3000

const shipsRouter = require("./routes/ships")

const dbConnect = require("./database/dbConnection")


app.use(express.json())
app.use("/ships", shipsRouter)

//levanta el servidor
app.listen(port, () => {
  console.log(`App ejemplo escuchando en http://localhost:${port}`)
})

dbConnect();
