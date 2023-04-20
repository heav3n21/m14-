const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt')

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        username:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    },

    {
        hooks:{
            async beforeCreate(newUserData){
                newUserData.password = await bcrypt.hash(newUserData.password, 3);
                return newUserData
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName:'user',
    }
);


module.exports = User;


