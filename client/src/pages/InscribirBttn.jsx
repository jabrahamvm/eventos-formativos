import React from 'react'
import axios from 'axios';
import { useState, useEffect} from 'react';

const URL = 'http://localhost:8000/api/usuario/inscribir/';

const BotonInscribir = ({idUsuario, idEvento}) => {

    const inscripcion = async () => {
        const res = await axios.post(URL,{idUsuario:idUsuario,idEvento:idEvento})
        console.log(res)
    }

    return (
        <form onSubmit={inscripcion}>
            <button type='submit' className='btn btn-success'>Inscribirme</button>
        </form>
    )
}

export default BotonInscribir;