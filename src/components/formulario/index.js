import { useState } from 'react';
import Botao from '../botao';
import CampoTexto from '../campoTexto/campoTexto';
import ListaSuspensa from '../listaSuspensa';
import './formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [personagem, setPersonagem] = useState('')
    const [raca, setRaca] = useState('')
    const [classe, setClasse] = useState('')
    const [imagem, setImagem] = useState('')
    const [guilda, setGuilda] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoPersonagemCadastrado({
            nome: nome || '-', // se não tiver nenhum nome definido
            personagem: personagem || '-', // se não tiver nenhum personagem digitado
            raca: raca || '-',  // se não tiver raça definida
            classe: classe || '-',   // se não tiver classe definida
            imagem: imagem || '-',    // se não tiver nenhuma imagem definida
            guilda: guilda || '-'     // se não tiver uma guilda definida
        })
        setNome('')
        setPersonagem('')
        setRaca('')
        setClasse('')
        setImagem('')
        setGuilda('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Personagem de D&D</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Personagem" 
                    placeholder="Digite o nome do seu personagem" 
                    valor={personagem}
                    aoAlterado={valor => setPersonagem(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Raça" 
                    placeholder="Digite a raça do seu personagem" 
                    valor={raca}
                    aoAlterado={valor => setRaca(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Classe" 
                    placeholder="Digite a classe do seu personagem" 
                    valor={classe}
                    aoAlterado={valor => setClasse(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Guilda" 
                    item={props.nomeGuilda} 
                    valor={guilda}
                    aoAlterado={valor => setGuilda(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;