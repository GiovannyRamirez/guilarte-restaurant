const pool = require("../dbConfig")
const { QUERIES } = require("../queries")

module.exports = {
    async LIST (_, res) {
        try {
            const tiposServicio = await pool.query(QUERIES.GET_TIPOS_SERVICIO)
            return res.status(200).json({
                tiposServicio,
            })
        } catch (err) {
            return res.status(400).json({
                mensaje: "Hubo un error con la petición",
                error: JSON.stringify(err),
            })
        }
    },
}
