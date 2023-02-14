import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

    const newPlaceHolder = `Digite ${props.placeholder}` 

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return ( 
        <div className="campo-texto">
            <label htmlFor="">{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obg} type="text" placeholder={newPlaceHolder} />
        </div>
    )
}

export default CampoTexto