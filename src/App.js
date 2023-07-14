import { useState } from 'react';
import Banner from './components/banner/banner';
import Formulario from './components/formulario';
import Guilda from './components/guilda';
import Rodape from './components/rodape';

function App() {

  const guildas = [
    {
      nome:'Hunters',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome:'Tigers',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome:'Reapers',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2'
    },
    {
      nome:'Divines',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      nome:'Demons',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },
    {
      nome:'Angels',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome:'Buccaneers',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    }
  ]

  const [personagens, setPersonagens] = useState([])

  const aoNovoPersonagem = (personagem) => {
    setPersonagens([...personagens, personagem])
  }

  return (
    <div className="App">
      <Banner/>

      <Formulario nomeGuilda={guildas.map(
        guilda => guilda.nome
      )} 
        aoPersonagemCadastrado={personagem => aoNovoPersonagem(personagem)}
      />

      {guildas.map(
        guilda => <Guilda 
        key={guilda.nome} 
        nome={guilda.nome} 
        corPrimaria={guilda.corPrimaria} 
        corSecundaria={guilda.corSecundaria}
        personagem={personagens.filter(item => item.guilda === guilda.nome)}
      />
      )}

      <Rodape/>

    </div>
  );
}

export default App;
