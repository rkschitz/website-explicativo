const database = require("../config/database");

class Suggestion {
    constructor() {
        this.model = database.db.define("suggestions", {
            suggestionId: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: database.db.Sequelize.STRING,
                allowNull: false,
            },
            description: {
                type: database.db.Sequelize.STRING,
                allowNull: false,
            },
            validated: {
                type: database.db.Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            userId: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id'
                }
            }
        });
    }
}

module.exports = new Suggestion().model;
