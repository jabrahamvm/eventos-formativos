import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BotonInscribir from './InscribirBttn';

const URL = 'http://localhost:8000/api/eventos/';

const DetalleEvento = () => {
    const [evento, setEvento] = useState([])
    useEffect(()=>{
        getEvento()
    },[])
    const {idUsuario, idEvento} = useParams() 
    let navigate = useNavigate();


    const getEvento = async () => {
        const res = await axios.get(`${URL}${idEvento}/`)
        console.log(res.data)
        if(res.data == null) navigate("*")
        setEvento(res.data)
    }


    return (
        <div className='container'>
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title text-center">{evento.nombre}</h5>
                </div>
                <ul className="card-body list-group list-group-flush">
                <li className="list-group-item">Descripcion: {evento.descripcion}</li>
                    <li className="list-group-item">Tipo de evento: {evento.tipo}</li>
                    <li className="list-group-item">Modalidad: {evento.modalidad}</li>
                    <li className='list-group-item'>Fecha Inicio: {evento.fechaInicio}</li>
                    <li className='list-group-item'>Fecha Fin: {evento.fechaFin}</li>
                    <li className='list-group-item'>Duracion: {evento.duracion} horas</li>
                </ul>
                <div className="card-footer text-center">
                    <BotonInscribir idUsuario={idUsuario} idEvento={idEvento}></BotonInscribir>
                </div>
            </div>
        </div>
    )
}

export default DetalleEvento;