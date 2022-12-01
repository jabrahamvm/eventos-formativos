import React from 'react'
import axios from 'axios'
import { useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URL = 'http://localhost:8000/api/solicitudes/'

const FormRetro = () => {
    const [retro, setRetro] = useState('')
    useEffect(()=>{
        getRetro()
    },[])
    const {idSolicitud} = useParams() 

    let navigate = useNavigate();


    const getRetro = async () => {
        const res = await axios.get(`${URL}${idSolicitud}/retro`)
        console.log(res.data)
        if(res.data == null) navigate("*")
        setRetro(res.data)
    }
    
    return (
        <div>{retro.descripcion}</div>
    )
}

export default FormRetro