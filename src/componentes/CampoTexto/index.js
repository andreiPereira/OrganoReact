import './CampoTexto.css'

const CampoTexto = (props) => {

    const newPlaceHolder = `Digite ${props.placeholder}` 

    return ( 
        <div className="campo-texto">
            <label htmlFor="">{props.label}</label>
            <input required={props.obg} type="text" placeholder={newPlaceHolder} />
        </div>
    )
}

export default CampoTexto