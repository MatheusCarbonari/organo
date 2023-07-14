import './colaborador.css'

const Colaborador = ({nome, personagem, raca, classe, imagem, corPrimaria}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corPrimaria}}>
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
