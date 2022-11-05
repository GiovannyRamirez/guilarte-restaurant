const router = require("express").Router()
const meserosController = require("../controladores/meserosControl")

const { ENDPOINTS } = require("../endpoints")

router.route(ENDPOINTS.BASE).get(meserosController.LIST),

module.exports = router