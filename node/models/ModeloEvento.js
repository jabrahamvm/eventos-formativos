import db from '../database/db.js';
// Importamos sequelize
import { DataTypes } from "sequelize"

import ModeloResponsable from './ModeloResponsable.js';

const ModeloEvento = db.define('Evento',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre:{ 
            type: DataTypes.STRING(45),
            allowNull: false
        },
        descripcion:{ 
            type: DataTypes.STRING(200),
            allowNull: false
        },
        tipo:{
            type: DataTypes.STRING(45),
            allowNull: true
        },
        duracion:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        fechaInicio:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        fechaFin:{
            type: DataTypes.DATE,
            allowNull: true
        },
        modalidad:{
            type: DataTypes.STRING(45)
        }
    },
    {
        freezeTableName: true,
        tableName: "evento",
        timestamps: false
    }
)

ModeloResponsable.hasMany(ModeloEvento, {foreignKey:"idResponsable"});
ModeloEvento.belongsTo(ModeloResponsable,{
    foreignKey: "idResponsable",
    allowNull: false,
});

export default ModeloEvento;