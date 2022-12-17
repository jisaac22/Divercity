const sequelize = require('../config/connection.js')
const { Model, DataTypes } = require('sequelize')

class Sub extends Model{

}

Sub.init(
  {
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
    sub_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
    email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'subs'
})

module.exports = Sub