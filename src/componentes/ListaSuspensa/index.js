import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    return (
        <div className='lista-suspensa'>   
            <label>{props.label}</label>
            <select>
                <option selected disabled>{props.placeholder}</option>
                {props.itens.map(item => { 
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )

}

export default ListaSuspensa
