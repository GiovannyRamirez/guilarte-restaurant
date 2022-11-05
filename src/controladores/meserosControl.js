const pool = require("../database/dbConfig")
const { QUERIES } = require("../queries")

module.exports = {
    async LIST (_, res) {
        try {
            const meseros = await pool.query(QUERIES.GET_MESEROS)
            return res.status(200).json({
                meseros,
            })
        } catch (err) {
            return res.status(400).json({
                mensaje: "Hubo un error con la petición",
                error: JSON.stringify(err),
            })
        }
    },
}