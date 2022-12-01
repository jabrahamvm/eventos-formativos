import React from 'react'
import axios from 'axios';
import { useState, useEffect} from 'react';

const URL = 'http://localhost:8000/api/solicitud/';

const DetalleEvento = () => {
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
                                <th>descripción</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {solicitudes.map((solicitud) => (
                                <tr key={solicitud.id}>
                                    <td>{solicitud.titulo}</td>
                                    <td>{solicitud.descripcion}</td>
                                    <td>{solicitud.estado}</td>
                                    <td>
                                        {/*<link to={`/edit/${blog.id}`} className="btn btn-info">Editar</link>*/}
                                        {/*<button onClick={() => deleteSolicitud(solicitud.id)} className='btn btn-danger'>Eliminar</button>*/}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DetalleEvento;