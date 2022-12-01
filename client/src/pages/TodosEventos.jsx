import React from 'react'
import axios from 'axios'
import { useState, useEffect} from 'react';


const URL = 'http://localhost:8000/api/solicitudes/';

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
                                <th>descripción</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Eventos.map((evento) => (
                                <tr key={evento.id}>
                                    <td>{evento.titulo}</td>
                                    <td>{evento.descripcion}</td>
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