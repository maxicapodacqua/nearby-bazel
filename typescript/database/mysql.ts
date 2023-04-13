import mysql from "mysql";

export default function connect() {
    const conn = mysql.createConnection('root:root@/nearby');
    conn.connect( (err) => {
        if (err) {
            throw err;
        }
    } );

};
