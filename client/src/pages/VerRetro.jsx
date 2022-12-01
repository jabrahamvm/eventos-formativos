import React from 'react'
import axios from 'axios'
import { useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URL = 'http://localhost:8000/api/solicitudes/'

const FormRetro = ({idSolicitud}) => {
    const [retro, setRetro] = useState([])
    useEffect(()=>{
        getRetro()
    },[])

    let navigate = useNavigate();
    var values = true;

    const getRetro = async () => {
        const res = await axios.get(`${URL}${idSolicitud}/retro/`)
        console.log(res.data.length)
        console.log(idSolicitud)
        if(res.data.length === 0) values = false
        setRetro(res.data)
    }
    
    const mapValues = (retraolimentaciones) => {
        retraolimentaciones.map((r) => (
            <ul key={r.idRetroalimentacion}>
                <li>{r.descripcion}</li>
            </ul>
        ))
    }

    return (
        <div>
            <h4 className='m-3'>Retroalimentación</h4>
            {
                retro.map((r) => (
                    <ul key={r.idRetroalimentacion}>
                        <li>{r.descripcion}</li>
                    </ul>
                ))
            }
        </div>
    )
}

export default FormRetro;