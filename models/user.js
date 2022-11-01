'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, {
        foreignKey:{
          name:'user_role',
          allowNull:false
        }
      })
      User.hasOne(models.Lease, {
        foreignKey:{
          name:'user_id',
          allowNull:false
        }
      })
    }
  }
  User.init({
    user_id: {
      type:DataTypes.INTEGER,
      primaryKey:true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    timestamps:false,
    freezeTableName:true
  });
  return User;
};