import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const times = [ 'Programação', 'Front-End', 'Data Science', 'Devops', 'UX', 'Mobile']

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({nome,cargo,imagem,time})
    }

    return (

        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar os cards</h2>
                <CampoTexto 
                    obg={true} 
                    label="Nome" 
                    placeholder="o seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obg={true} 
                    label="Cargo" 
                    placeholder="o seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem"
                    placeholder="o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obg={true} 
                    label="Time" 
                    itens={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    placeholder="Selecione a Categoria"/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>

    )
}

export default Formulario