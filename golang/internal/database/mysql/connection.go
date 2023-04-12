package mysql

import (
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
	"github.com/maxicapodacqua/nearby-bazel/golang/internal/config"
	"log"
	"os"
)

func Connect() *sql.DB {
	log.Printf("Connecting to mysql database\n")
	db, err := sql.Open("mysql", os.Getenv(config.SQLDNS))
	if err != nil {
		log.Fatal(err)
	}
	return db
}
