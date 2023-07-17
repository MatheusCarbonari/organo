import Colaborador from '../colaborador'
import './guilda.css'
import hexToRgba from 'hex-to-rgba'

const Guilda = (props) => {
    return (
        (props.personagem.length > 0) ? <section className='time' style={{backgroundColor: hexToRgba(props.cor, '0.4')}}>

            <input value={props.cor} onChange={evento => props.mudarCor(evento.target.value, props.id)} type='color' className='input-color'></input>
            <h3 style={{borderColor: props.cor, color: props.cor}}>{props.nome}</h3>
            <div className='personagens'>
                {props.personagem.map(item => {
                    return (
                    <Colaborador 
                        key={item.nome}
                        nome={item.nome}
                        personagem={item.personagem}
                        raca={item.raca}
                        classe={item.classe}
                        imagem={item.imagem}
                        guilda={item.guilda}
                        cor={props.cor}
                        aoDeletar={props.aoDeletar}
                    />)
                })}
            </div>

        </section>
        : ''
    )
}

export default Guilda