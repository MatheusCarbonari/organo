import {AiFillCloseCircle} from 'react-icons/ai'
import './colaborador.css'

const Colaborador = ({nome, personagem, raca, classe, imagem, cor, aoDeletar}) => {
    return (
        <div className='colaborador'>
            <AiFillCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => aoDeletar(personagem)}
            />
            <div className='cabecalho' style={{backgroundColor: cor}} >
                <img src={imagem} alt='imagem do personagem'/>
            </div>
            <div className='rodape'>
                <h4>Jogador(a): {nome}</h4>
                <h5>Personagem: {personagem}</h5>
                <h5>Raça: {raca}</h5>
                <h5>Classe: {classe}</h5>
            </div>
        </div>
    )
}

export default Colaborador
