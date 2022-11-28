import db from '../database/db.js';
// Importamos sequelize
import { DataTypes } from "sequelize"

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

export default ModeloSolicitud;