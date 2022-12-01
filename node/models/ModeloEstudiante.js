import db from '../database/db.js';
// Importamos sequelize
import { DataTypes } from "sequelize";

const ModeloEstudiante = db.define('Estudiante',
    {
        idEstudiante:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "idUsuario"
        },
        nombre:{ 
            type: DataTypes.STRING(50),
            allowNull: false
        },
        apellido:{ 
            type: DataTypes.STRING(50),
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        tableName: "Estudiantes",
        timestamps: false
    }
)

export default ModeloEstudiante;