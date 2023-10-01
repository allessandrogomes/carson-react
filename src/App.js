import './responsive.css'
import Cabecalho from './componentes/Cabecalho';
import Main from './componentes/Main';
import Chamada from './componentes/Main/Chamada';
import Rodape from './componentes/Rodape/Rodape';
import ContainerFiltrosECarros from './componentes/Main/ContainerFiltrosECarros';
import { useState } from 'react';


function App() {

  const [novoAnuncio, setNovoAnuncio] = useState('')
  const [pesquisaVeiculo, setPesquisaVeiculo] = useState ('')
  const [listaDeSugestao, setListaDeSugestao] = useState ([])
  const [veiculoSugeridoClicado, setVeiculoSugeridoClicado] = useState('')
  const [aoPesquisarLupa, setAoPesquisarLupa] = useState()

  return (
    <div className="App">
      <Cabecalho
        aoPesquisarLupa={clique => setAoPesquisarLupa(clique)}
        veiculoSugeridoClicado={veiculo => setVeiculoSugeridoClicado(veiculo)}
        novoAnuncio={novoAnuncio => {
          novoAnuncio.nome = novoAnuncio.nome.toLowerCase()
          setNovoAnuncio(novoAnuncio)
        }}
        aoPesquisarVeiculo={aoPesquisarVeiculo => {
          const valorLowerCase = aoPesquisarVeiculo.target.value.toLowerCase()
          setPesquisaVeiculo(valorLowerCase)
        }}
        listaDeSugestao={listaDeSugestao}
      />
      <Main>
        <Chamada />
        <ContainerFiltrosECarros
          aoPesquisarLupa={aoPesquisarLupa}
          veiculoSugeridoClicado={veiculoSugeridoClicado}
          novoAnuncio={novoAnuncio}
          pesquisaVeiculo={pesquisaVeiculo}
          listaDeSugestao = {(lista) => setListaDeSugestao(lista)}
        />
      </Main>
      <Rodape />
    </div>
  );
}

export default App;
