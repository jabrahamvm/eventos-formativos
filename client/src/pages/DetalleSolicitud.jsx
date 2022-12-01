import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {Link} from 'react-router-dom' 

const URL = 'http://localhost:8000/api/solicitudes/';

const DetalleSolicitud = () => {
    const [solicitud, setSolicitud] = useState([])
    useEffect(()=>{
        getSolicitud()
    },[])
    const {idUsuario, idSolicitud} = useParams() 


    const getSolicitud = async () => {
        const res = await axios.get(`${URL}${idSolicitud}/`)
        console.log(res.data)
        setSolicitud(res.data)
    }

    return (
        <div className='container'>
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title text-center">{solicitud.titulo}</h5>
                </div>
                <ul className="card-body list-group list-group-flush">
                    <li className="list-group-item">Descripcion: {solicitud.descripcion}</li>
                    <li className="list-group-item">Estado: {solicitud.estado}</li>
                </ul>
                <div className="card-footer text-center">
                    <Link to={`/usuario/${idUsuario}/crearEvento/`} className="btn btn-success">Crear Evento</Link>
                </div>
                <div className="card-footer text-center">
                    <Link to={`/solicitudes/${idSolicitud}/retro/`} className="btn btn-success">Retroalimenación</Link>
                </div>
            </div>
        </div>
    )
}

export default DetalleSolicitud;