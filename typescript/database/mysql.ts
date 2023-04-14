import mysql from "mysql";

export default function connect()   {
    // TODO: env var DB_DNS
    const conn = mysql.createConnection('mysql://root:root@localhost:3306/nearby');
    conn.connect( (err) => {
        if (err) {
            console.error(err);
        }
    });
    return conn;
};
