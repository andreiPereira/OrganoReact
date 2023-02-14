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

    return (
        <section className='formulario'>
            <form action="">
                <h2>Preencha os dados para criar os cards</h2>
                <CampoTexto label="Nome" placeholder="o seu nome" />
                <CampoTexto label="Cargo" placeholder="o seu cargo" />
                <CampoTexto label="Imagem" placeholder="o endereço da imagem" />
                <ListaSuspensa label="Time" itens={times} placeholder="Selecione a Categoria"/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario