import React from 'react'
import axios from 'axios';
import { useState, useEffect} from 'react';
import { useNavigate} from 'react-router-dom';

const URL = 'http://localhost:8000/api/usuario/inscribir/';

const BotonInscribir = ({idUsuario, idEvento}) => {

    const navigate = useNavigate()
    const inscripcion = async (e) => {
        e.preventDefault()
        await axios.post(URL,{idUsuario:idUsuario,idEvento:idEvento})
        navigate('/EventosInscritos/5')
    }

    return (
        <form onSubmit={inscripcion}>
            <button type='submit' className='btn btn-success'>Inscribirme</button>
        </form>
    )
}

export default BotonInscribir;