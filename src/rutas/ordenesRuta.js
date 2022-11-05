const router = require("express").Router()
const ordenesController = require("../controladores/ordenesControl")

const { ENDPOINTS } = require("../endpoints")

router.route(ENDPOINTS.BASE).post(ordenesController.ADD),

module.exports = router