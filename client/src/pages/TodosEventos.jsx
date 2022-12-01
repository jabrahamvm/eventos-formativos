import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import { useState, useEffect} from 'react';


const URL = 'http://localhost:8000/api/eventos/';

const TodosEventos = () => {
    const [Eventos, setEventos] = useState([])
    useEffect(() => {
        getEventos()
    })

    const getEventos = async () => {
        const res = await axios.get(URL)
        setEventos(res.data)
    }


    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Tipo</th>
                                <th>Fecha de inicio</th>
                                <th>Fecha de finalización</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Eventos.map((evento) => (
                                <tr key={evento.id}>
                                    <td>{evento.nombre}</td>
                                    <td>{evento.tipo}</td>
                                    <td>{evento.fechaInicio}</td>
                                    <td>{evento.fechaFin}</td>
                                    <td><Link to={`/DetalleEvento/${evento.id}`} className='btn btn-primary mt-2 mb-2'>Ver más</Link></td>
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

export default TodosEventos