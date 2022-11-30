import db from '../database/db.js';
// Importamos sequelize
import { DataTypes } from "sequelize";
import ModeloSolicitud from './ModeloSolicitud.js';

const ModeloResponsable = db.define('Responsable',
    {
        idResponsable:{
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
        tableName: "Responsables",
        timestamps: false
    }
)

//ModeloResponsable.hasMany(ModeloSolicitud)
//ModeloSolicitud.belongsToMany(ModeloResponsable)


export default ModeloResponsable;