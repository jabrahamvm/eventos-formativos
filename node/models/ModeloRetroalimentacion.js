import db from '../database/db.js';
// Importamos sequelize
import { DataTypes } from "sequelize";
import ModeloSolicitud from './ModeloSolicitud.js';
import ModeloResponsable from './ModeloResponsable.js';

const ModeloRetroalimentacion = db.define('retroalimentacion',
    {
        idRetroalimentacion:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'idRetroalimentacion',
            allowNull:false
        },
        descripcion:{ type: DataTypes.STRING(120) },
    },
    {
        freezeTableName: true,
        tableName: "retroalimentacion",
        timestamps: false
    }
)

ModeloSolicitud.hasMany(ModeloRetroalimentacion, {foreignKey:"idSolicitud"});
ModeloRetroalimentacion.belongsTo(ModeloSolicitud,{
    foreignKey: "idSolicitud",
    allowNull: false,
});

ModeloResponsable.hasMany(ModeloRetroalimentacion, {foreignKey:"idSolicitud"});
ModeloRetroalimentacion.belongsTo(ModeloResponsable,{
    foreignKey: "idAutor",
    allowNull: false,
});


export default ModeloRetroalimentacion;