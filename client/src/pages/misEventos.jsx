import React from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'

import { useState, useEffect} from 'react';


const URL = 'http://localhost:8000/api/usuario/';

const TodosMisEventos = () => {
    const [Eventos, setEventos] = useState([])
    useEffect(() => {
        getEventos()
    },[])
    const {id} = useParams()

    const getEventos = async () => {
        const res = await axios.get(`${URL}${id}/eventos/`)
        console.log(res.data)
        setEventos(res.data.Eventos)
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
                                    <td><Link to={`Usuario/5/DetalleEvento/${evento.id}`} className='btn btn-primary mt-2 mb-2'>Ver más</Link></td>
                                    <td>
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

export default TodosMisEventos;