const { TABLE_NAMES } = require("../database/dbParams")
const { MENU, MESAS, MESEROS, TIPOS_SERVICIO, CLIENTES } = TABLE_NAMES

module.exports = {
    QUERIES: {
        GET_MENU: `SELECT * FROM ${MENU} WHERE id_disponibilidad in (1)`,
        GET_MESAS: `SELECT * FROM ${MESAS}`,
        GET_MESEROS: `SELECT * FROM ${MESEROS}`,
        GET_TIPOS_SERVICIO: `SELECT * FROM ${TIPOS_SERVICIO}`,
        SELECT_CLIENTES: (tel) => `SELECT * FROM ${CLIENTES} WHERE telefono_cliente = ${tel} LIMIT 1`,
        INSERT_CLIENTE: (name, tel) => 
            `INSERT INTO clientes (nombre_cliente, telefono_cliente) 
                VALUES ('${name}', ${tel})`,
        INSERT_ORDEN: (total, id_cliente, id_mesa, id_mesero, id_tipo_servicio) => 
            `INSERT INTO ordenes_servicio (valor_pagado, id_cliente, id_mesa, id_mesero, id_tipo_servicio)
                VALUES (${total}, ${id_cliente}, ${id_mesa}, ${id_mesero}, ${id_tipo_servicio})`,
        INSERT_ORDEN_MENUS: (id_orden, id_menu, cantidad) => 
            `INSERT INTO ordenes_servicio_menus (id_orden, id_menu, cantidad_menu_en_orden)
                VALUES (${id_orden}, ${id_menu}, ${cantidad})`,
    },
}
