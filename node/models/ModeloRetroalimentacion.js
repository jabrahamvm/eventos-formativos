import db from '../database/db.js';
// Importamos sequelize
import { DataTypes } from "sequelize"

const ModeloRetroalimentacion = db.define('retroalimentacion',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'idRetroalimentacion'
        },
        descripcion:{ type: DataTypes.STRING(120) },
        email: {
            type: DataTypes.STRING,
            email: true
        },
        rol:{type: DataTypes.STRING},
    },
    {
        freezeTableName: true,
        tableName: "usuario",
        timestamps: false
    }
)

export default ModeloUsuario;