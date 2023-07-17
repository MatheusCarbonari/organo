import { useState } from 'react';
import Banner from './components/banner/banner';
import Formulario from './components/formulario';
import Guilda from './components/guilda';
import Rodape from './components/rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [guildas, setGuildas] = useState([
    {
      id: uuidv4(),
      nome:'Hunters',
      cor: '#57c278',
    },
    {
      id: uuidv4(),
      nome:'Tigers',
      cor: '#82cffa',
    },
    {
      id: uuidv4(),
      nome:'Reapers',
      cor: '#a6d157',
    },
    {
      id: uuidv4(),
      nome:'Divines',
      cor: '#e06b69',
    },
    {
      id: uuidv4(),
      nome:'Demons',
      cor: '#db6ebf',
    },
    {
      id: uuidv4(),
      nome:'Angels',
      cor: '#ffba05',
    },
    {
      id: uuidv4(),
      nome:'Buccaneers',
      cor: '#ff8a29',
    }
  ])

  const [personagens, setPersonagens] = useState([])

  const aoNovoPersonagem = (personagem) => {
    setPersonagens([...personagens, personagem])
  }

  function deletarPersonagem(personagem) {
    setPersonagens(personagens.filter(item => item.personagem !== personagem))
  }

  function mudarCorDaGuilda(cor, id) {
    setGuildas(guildas.map(time => {
      if(time.id === id){
        time.cor = cor
      }
      return time;
    }))
  }

  function cadastraNovaGuilda(novaGuilda){
    setGuildas([...guildas, {...novaGuilda, id: uuidv4()}])
  }

  return (
    <div className="App">
      <Banner/>

      <Formulario 
        cadastrarGuilda={cadastraNovaGuilda}
        nomeGuilda={guildas.map(guilda => guilda.nome)} 
        aoPersonagemCadastrado={personagem => aoNovoPersonagem(personagem)}
      />

      {guildas.map(guilda => 
        <Guilda
          mudarCor={mudarCorDaGuilda}
          key={guilda.nome} 
          nome={guilda.nome}
          id={guilda.id}
          cor={guilda.cor}
          personagem={personagens.filter(item => item.guilda === guilda.nome)}
          aoDeletar={deletarPersonagem}
        />
      )}

      <Rodape/>

    </div>
  );
}

export default App;
