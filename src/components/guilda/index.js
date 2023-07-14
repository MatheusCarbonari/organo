import Colaborador from '../colaborador'
import './guilda.css'

const Guilda = (props) => {
    return (       
        (props.personagem.length > 0) ? <section className='time' style={{backgroundColor: props.corSecundaria}}>

            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>

            <div className='personagens'>

                {props.personagem.map(
                    item => <Colaborador 
                        key={item.nome}
                        nome={item.nome}
                        personagem={item.personagem}
                        raca={item.raca}
                        classe={item.classe}
                        imagem={item.imagem}
                        guilda={item.guilda}
                        corPrimaria={props.corPrimaria}
                    />
                )}
            </div>

        </section>
        : ''
    )
}

export default Guilda