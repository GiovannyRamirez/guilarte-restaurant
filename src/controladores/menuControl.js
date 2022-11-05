const pool = require("../database/dbConfig")
const { QUERIES } = require("../queries")

module.exports = {
    async LIST (_, res) {
        try {
            const menus = await pool.query(QUERIES.GET_MENU)
            return res.status(200).json({
                menus,
            })
        } catch (err) {
            return res.status(400).json({
                mensaje: "Hubo un error con la petición",
                error: JSON.stringify(err),
            })
        }
    },
}
