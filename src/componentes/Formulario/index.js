import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX',
        'Mobile'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log("Form foi submetido")
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar os cards</h2>
                <CampoTexto obg={true} label="Nome" placeholder="o seu nome" />
                <CampoTexto obg={true} label="Cargo" placeholder="o seu cargo" />
                <CampoTexto label="Imagem" placeholder="o endereço da imagem" />
                <ListaSuspensa obg={true} label="Time" itens={times} placeholder="Selecione a Categoria"/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario