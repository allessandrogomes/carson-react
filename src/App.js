import './App.css';
import './responsive.css';
import Cabecalho from './componentes/Cabecalho';
import Main from './componentes/Main';
import Chamada from './componentes/Main/Chamada';
import ContainerCentral from './componentes/Main/ContainerCentral/ContainerCentral';
import SessaoFiltros from './componentes/Main/ContainerCentral/SessaoFiltros';
import ContainerFiltrosAtivosESessaoCarros from './componentes/Main/ContainerCentral/ContainerFiltrosAtivosESessaoCarros';
import FiltrosAtivos from './componentes/Main/ContainerCentral/ContainerFiltrosAtivosESessaoCarros/FiltrosAtivos';
import SessaoCarros from './componentes/Main/ContainerCentral/ContainerFiltrosAtivosESessaoCarros/SessaoCarros';
import Rodape from './componentes/Rodape/Rodape';


function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Main>
        <Chamada />
        <ContainerCentral>
          <SessaoFiltros />
          <ContainerFiltrosAtivosESessaoCarros>
            <FiltrosAtivos />
            <SessaoCarros />
          </ContainerFiltrosAtivosESessaoCarros>
        </ContainerCentral>
      </Main>
      <Rodape />
    </div>
  );
}

export default App;
