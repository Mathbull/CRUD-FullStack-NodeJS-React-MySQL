import mysql from "mysql"


export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "M.atheus98@",
    database: "crud"
});

/// Aqui estamos dizendo onde esta nosso banco de dados