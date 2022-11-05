const router = require("express").Router()
const tiposServicioController = require("../controladores/tiposServicioControl")

const { ENDPOINTS } = require("../endpoints")

router.route(ENDPOINTS.BASE).get(tiposServicioController.LIST),

module.exports = router