const Sequelize = require('sequelize')
require('dotenv').config();


let sequelize;
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        'm13_db',
        'root',
        'Mw113741@',
        {
            host: 'localhost',
            dialect: 'mysql',
            part: 3306
        }
    );
}

module.exports = sequelize