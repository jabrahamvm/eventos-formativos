import db from '../database/db.js';
// Importamos sequelize
import { DataTypes } from "sequelize";
import ModeloEvento from './ModeloEvento.js';
import ModeloEstudiante from './ModeloEstudiante.js';

const ModeloInscripciones = db.define('Inscripciones',
    {
        idUsuario:{
            type: DataTypes.INTEGER
        },
        idEvento:{
            type: DataTypes.INTEGER
        }
    },
    {
        freezeTableName: true,
        tableName: "inscripciones",
        timestamps: false
    }
)

ModeloInscripciones.removeAttribute("id")
ModeloEstudiante.belongsToMany(ModeloEvento, {through: ModeloInscripciones, foreignKey: "idUsuario"})
ModeloEvento.belongsToMany(ModeloEstudiante, {through: ModeloInscripciones, foreignKey: "idEvento"})

export default ModeloInscripciones;