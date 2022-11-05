require("dotenv").config()
const express = require("express")
const cors = require("cors")

const { ENDPOINTS } = require("./endpoints")
const menuRutas = require("./rutas/menuRuta")
const mesasRutas = require("./rutas/mesasRuta")
const meserosRutas = require("./rutas/meserosRuta")

const PORT = process.env.PORT || 8000
const app = express()

app.use(express.json())
app.use(cors())

app.use(ENDPOINTS.MENU, menuRutas)
app.use(ENDPOINTS.MESAS,mesasRutas)
app.use(ENDPOINTS.MESEROS,meserosRutas)

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
