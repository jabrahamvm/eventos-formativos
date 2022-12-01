import React from 'react'
import axios from 'axios';
import { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const URL = 'http://localhost:8000/api/solicitudes/';

const TodasSolicitudes = () => {
    const [solicitudes, setSolicitudes] = useState([])
    useEffect(()=>{
        getSolicitudes()
    },[])

    const getSolicitudes = async () => {
        const res = await axios.get(URL)
        setSolicitudes(res.data)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Estado</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {solicitudes.map((solicitud) => (
                                <tr key={solicitud.id}>
                                    <td>{solicitud.titulo}</td>
                                    <td>{solicitud.estado}</td>
                                    <td><Link to={`/Usuario/5/DetalleSolicitud/${solicitud.id}`} className='btn btn-primary mt-2 mb-2'>Ver más</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TodasSolicitudes;