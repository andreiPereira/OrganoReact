import './Time.css'

const Time = (props) => {
    const css = {backgroundColor:props.corSecundaria}
    const cssh3 = {borderColor:props.corPrimaria }
    return(
        <section className='time' style={css}>
            <h3 style={cssh3}>{props.nome}</h3>
        </section>
    )
}

export default Time