const path = require("path");

module.exports = {
    database: 'database',
    dialect: 'sqlite',
    storage: path.join(path.normalize(__dirname+"/../.."), "database.sqlite")
}
