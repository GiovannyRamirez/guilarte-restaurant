const router = require("express").Router()
const mesasController = require("../controladores/mesasControl")

const { ENDPOINTS } = require("../endpoints")

router.route(ENDPOINTS.BASE).get(mesasController.LIST),

module.exports = router