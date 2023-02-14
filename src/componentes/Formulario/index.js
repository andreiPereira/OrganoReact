import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className='formulario'>
            <form action="">
                <h2>Preencha os dados para criar os cards</h2>
                <CampoTexto label="Nome" placeholder="o seu nome" />
                <CampoTexto label="Cargo" placeholder="o seu cargo" />
                <CampoTexto label="Imagem" placeholder="o endereço da imagem" />
            </form>
        </section>
    )
}

export default Formulario