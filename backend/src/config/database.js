const { Sequelize } = require('sequelize');

class Database {

    constructor() {
        this.Init();
    }

    Init() {
        this.db = new Sequelize({
            database: "website",
            host: "localhost",
            username: "root",
            dialect: "mysql",
            password: "Ruhankaio2005",

        });
    }
}

module.exports = new Database();