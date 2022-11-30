/*import React from 'react';


const Home = () => {
    return (
        <section id="Eventos">
            <article>
                <div className='eventosDisponibles'>
                    <h1>Eventos disponibles</h1>
                    <ul>
                        <li>Evento 1</li>
                        <li>Evento 2</li>
                        <li>Evento 3</li>
                        <li>Evento 4</li>
                    </ul>
                    
                </div>
                <div className='detallesEvento'>
                    <h1>Detalles de Evento</h1>
                </div>
            </article>

        </section>
    )
}

export default Home
*/
import axios from 'axios';
import { useState, useEffect} from 'react';
//import {link} from 'react-router-dom';

const URL = 'http://localhost:8000/api/solicitudes/';

const Home = () => {
    const [solicitudes, setSolicitudes] = useState([])
    useEffect(()=>{
        getSolicitudes()
    },[])

    const getSolicitudes = async () => {
        const res = await axios.get(URL)
        setSolicitudes(res.data)
    }

    const deleteSolicitud = async (id) => {
        await axios.delete(`${URL}${id}/`)
        getSolicitudes()
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
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
                                        <button onClick={() => deleteSolicitud(solicitud.id)} className='btn btn-danger'>Eliminar</button>
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

export default Home;