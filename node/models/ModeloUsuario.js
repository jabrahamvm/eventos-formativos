import db from '../database/db.js';
// Importamos sequelize
import { DataTypes } from "sequelize";

const ModeloUsuario = db.define('usuario',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'idUsuario'
        },
        username:{ type: DataTypes.STRING },
        email: {type: DataTypes.STRING},
        rol:{type: DataTypes.STRING},
    },
    {
        freezeTableName: true,
        tableName: "usuario",
        timestamps: false
    }
)

//ModeloUsuario.hasOne(ModeloPerfil, {foreignKey:"idResponsable"});
/*ModeloSolicitud.belongsTo(ModeloResponsable,{
    foreignKey: "idResponsable",
    allowNull: false,
});
*/
export default ModeloUsuario;