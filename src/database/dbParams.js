require("dotenv")

module.exports = {
    DB_PARAMS: {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
    },
    TABLE_NAMES: {
        MENU: "menus",
        MESAS: "mesas",
        MESEROS: "meseros",
        TIPOS_SERVICIO: "tipos_servicio",
        CLIENTES: "clientes",
        ORDERS: "ordenes_servicio",
        ORDERS_MENUS: "ordenes_servicio_menus"
    },
}
