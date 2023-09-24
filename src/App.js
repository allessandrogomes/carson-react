import './responsive.css';
import Cabecalho from './componentes/Cabecalho';
import Main from './componentes/Main';
import Chamada from './componentes/Main/Chamada';
import Rodape from './componentes/Rodape/Rodape';
import ContainerFiltrosECarros from './componentes/Main/ContainerFiltrosECarros';
import { useState } from 'react';


function App() {

  const [novoAnuncio, setNovoAnuncio] = useState('')

  return (
    <div className="App">
      <Cabecalho novoAnuncio={novoAnuncio => setNovoAnuncio(novoAnuncio)}/>
      <Main>
        <Chamada />
        <ContainerFiltrosECarros novoAnuncio={novoAnuncio}/>
      </Main>
      <Rodape />
    </div>
  );
}

export default App;
