'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lease extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Lease.init({
    lease_id: { 
      type:DataTypes.INTEGER,
      primaryKey:true
    },
    date_start: { 
      type:DataTypes.INTEGER,
      allowNull:false
    },
    date_end: { 
      type:DataTypes.INTEGER,
      allowNull:false
    },
    user_id:{ 
      type:DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Lease',
    timestamps:false,
    freezeTableName:true
  });
  return Lease;
};