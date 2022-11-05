const pool = require("../database/dbConfig")
const { capitalizeFirstLetter } = require("../utils/utils")

const { QUERIES } = require("../queries")
const { SELECT_CLIENTES, INSERT_CLIENTES, INSERT_ORDEN, INSERT_ORDEN_MENUS } = QUERIES

module.exports = {
    async ADD (req, res) {
        try {
            const {
                nombreCliente,
                telefonoCliente,
                menus,
                totalPagado,
                id_mesa,
                id_mesero,
                id_tipo_servicio,
            } = req.body

            let clientId = 0
            const client = await pool.query(
                SELECT_CLIENTES(telefonoCliente)
            )
            if (!client.length) {
                const clientName = capitalizeFirstLetter(nombreCliente)
                const { insertId } = await pool.query(
                    INSERT_CLIENTES(clientName, telefonoCliente)
                )                
                clientId = insertId
            } else {
                const { id_cliente } = client[0]
                const { insertId } = await pool.query(
                    INSERT_ORDEN(totalPagado, id_cliente, id_mesa, id_mesero, id_tipo_servicio)
                )
    
                menus.map(async ({ id, Cantidad }) => await pool.query(
                    INSERT_ORDEN_MENUS(insertId, id, Cantidad)
                ))  
            }                      

            return res.status(200).json({
                success: true,
                message: "Registro guardado con éxito",
            })
        } catch (err) {
            return res.status(400).json({
                mensaje: "Hubo un error con la petición",
                error: JSON.stringify(err),
            })
        }
    },
}
