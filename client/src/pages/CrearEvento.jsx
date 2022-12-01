import axios from 'axios'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/api/eventos/'

const CompCrearEvento = () => {
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [tipo, setTipo] = useState('')
    const [duracion, setDuracion] = useState('')
    const [fechaInicio, setFechaInicio] = useState('')
    const [fechaFin, setFechaFin] = useState('')
    const [modalidad, setModaliad] = useState('')
    const [responsable, setResponsable] = useState('')

    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {nombre: nombre, descripcion: descripcion,
            tipo: tipo, duracion: duracion, fechaInicio: fechaInicio, 
            fechaFin: fechaFin, modalidad: modalidad})
        navigate('/')
    }

    return (
        <div>
            <h3>Crear Evento</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input 
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value)}
                        type="Text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='from-label'>Descripción </label>
                    <textarea 
                    value={descripcion}
                    onChange={(e)=>setDescripcion(e.target.value)}
                    type="text"
                    className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Tipo</label>
                    <input 
                        value={tipo}
                        onChange={ (e) => setTipo(e.target.value)}
                        type="Text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Duración</label>
                    <input 
                        value={duracion}
                        onChange={ (e) => setDuracion(e.target.value)}
                        type="Text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Fecha de inicio</label>
                    <input 
                        value={fechaInicio}
                        onChange={ (e) => setFechaInicio(e.target.value)}
                        type="Text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Fecha de Finalización</label>
                    <input 
                        value={fechaFin}
                        onChange={ (e) => setFechaFin(e.target.value)}
                        type="Text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Modalidad</label>
                    <input 
                        value={modalidad}
                        onChange={ (e) => setModaliad(e.target.value)}
                        type="Text"
                        className='form-control'
                    />
                </div>

                <button type='submit' className='btn btn-primary'>Crear</button>
            </form>
        </div>
    )
}

export default CompCrearEvento