import './App.css';
import './responsive.css';
import Cabecalho from './componentes/Cabecalho';
import Main from './componentes/Main';
import Chamada from './componentes/Main/Chamada';
import Rodape from './componentes/Rodape/Rodape';
import ContainerFiltrosECarros from './componentes/Main/ContainerFiltrosECarros';


function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Main>
        <Chamada />
        <ContainerFiltrosECarros />
      </Main>
      <Rodape />
    </div>
  );
}

export default App;
