import db from '../database/db.js';
// Importamos sequelize
import { DataTypes } from "sequelize";
import ModeloSolicitud from './ModeloSolicitud.js';
import ModeloResponsable from './ModeloResponsable.js';

const ResponsableSolicitud = db.define('ResponsableSolicitud', {
        idResponsable: {
            type: DataTypes.INTEGER,
            references: {
                model: ModeloResponsable, // 'Movies' would also work
                key: 'idResponsable'
            }
        },
        idSolicitud: {
            type: DataTypes.INTEGER,
            references: {
                model: ModeloSolicitud, // 'Actors' would also work
                key: 'idSolicitud'
            }
        }
    },
    {
        freezeTableName: true,
        tableName: "solicitud_usuario",
        timestamps: false
    }
    
);
  ModeloResponsable.belongsTo(ModeloSolicitud, { through: ResponsableSolicitud });
  ModeloSolicitud.belongsToMany(ModeloResponsable, { through: ResponsableSolicitud });

  export default ResponsableSolicitud;