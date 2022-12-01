import db from '../database/db.js';
// Importamos sequelize
import { DataTypes } from "sequelize"
import ModeloResponsable from './ModeloResponsable.js';

const ModeloSolicitud = db.define('solicitud',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'idSolicitud',
            allowNull:false
        },
        titulo:{ type: DataTypes.STRING },
        descripcion: {type: DataTypes.STRING},
        estado:{type: DataTypes.STRING},
    },
    {
        freezeTableName: true,
        tableName: "solicitud",
        timestamps: false
    }
)

ModeloResponsable.hasMany(ModeloSolicitud, {foreignKey:"idResponsable"});
ModeloSolicitud.belongsTo(ModeloResponsable,{
    foreignKey: "idResponsable",
    allowNull: false,
});

export default ModeloSolicitud;