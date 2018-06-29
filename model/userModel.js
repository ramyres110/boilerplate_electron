const Sequelize = require('sequelize');
const Connection = require('./connection');

class UserModel {
    constructor() {
        this.sequelize = new Sequelize(Connection);
        this.UserModel = this.sequelize.define('user', {
            firstName: {
                type: Sequelize.STRING
            },
            lastName: {
                type: Sequelize.STRING
            }
        });
    }

    sync() {
        this.UserModel.sync({ force: true }).then(() => {
        });
    }

    save(user) {
        return this.UserModel.create(user);
    }
}

module.exports = UserModel;