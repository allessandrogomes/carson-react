import InputTelaDeAnuncio from "./TelaDeAnuncio/InputTelaDeAnuncio"
import LabelTelaDeAnuncio from "./TelaDeAnuncio/LabelTelaDeAnuncio"
import OptionTelaDeAnuncio from "./TelaDeAnuncio/OptionTelaDeAnuncio"

function TelaDeAnuncio() {

    const marcas = ['Chevrolet', 'Fiat', 'Ford', 'Honda', 'Mitsubishi', 'Volkswagen', 'Toyota', 'Hyundai']
    const estados = ['Acre', 'São Paulo', 'Rio de Janeiro', 'Mato Grosso', 'Minas Gerais', 'Alagoas', 'Bahia', 
                    'Rio Grande do Sul', 'Maranhão', 'Amazonas']
    const cores = ['Branco', 'Cinza', 'Azul', 'Verde', 'Vermelho', 'Preto']

    return (
        <div className="telaDeAnuncioResponsive hidden fixed rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-width-600px h-600 bg-teal-400 p-5"
                id="telaDeAnuncio">
                <span className="w-8 absolute top-2.5 right-2.5 cursor-pointer" id="fecharTelaDeAnuncio"><img
                        src="./imagens/Main/botao-fechar.png" alt="Botão fechar tela de Anúncio"/></span>
                <h2 className="font-bold font-archivo text-black text-center mt-10 text-2xl">Anunciar na CarsOn</h2>
                <p className="text-center mt-5 font-archivo">Preencha as informações do veículo</p>
                <form className="formAnuncioResponsive text-left flex flex-col h-4/6 flex-wrap mt-10 mx-10 items-center" action="#">
                    <LabelTelaDeAnuncio nome="Marca" for="inputAnunciarMarca"/>
                    <select className="w-48 h-6 rounded font-archivo font-bold mb-4 informacaoCarro" required id="marca">
                        <OptionTelaDeAnuncio itens={marcas}/>
                    </select>
                    
                    <LabelTelaDeAnuncio nome="Modelo" for="inputAnunciarModelo"/>
                    <InputTelaDeAnuncio id="nome" maxLength="15" classe=""/>
                    
                    <LabelTelaDeAnuncio nome="Preço" for="inputAnunciarPreco"/>
                    <InputTelaDeAnuncio id="preco" maxLength="10" classe="inputPreco"/>
                    
                    <LabelTelaDeAnuncio nome="Ano" for="inputAnunciarAno"/>
                    <InputTelaDeAnuncio id="ano" maxLength="4" classe="inputAno"/>
                    
                    <LabelTelaDeAnuncio nome="Km" for="inputAnunciarKm"/>
                    <InputTelaDeAnuncio id="km" maxLength="6" classe="inputAno"/>

                    <LabelTelaDeAnuncio nome="Cidade" for="inputAnunciarCidade"/>
                    <InputTelaDeAnuncio id="cidade" maxLength="25" classe=""/>

                    <LabelTelaDeAnuncio nome="Estado" for="inputAnunciarEstado"/>
                    <select className="w-48 h-6 rounded font-archivo font-bold mb-4 informacaoCarro" required id="estado">
                        <OptionTelaDeAnuncio itens={estados}/>
                    </select>

                    <LabelTelaDeAnuncio nome="Url imagem do veículo" for="inputAnunciarImagemUrl"/>
                    <InputTelaDeAnuncio id="imagem" maxLength="" classe=""/> 

                    <LabelTelaDeAnuncio nome="Cor" for="inputAnunciarCor"/>
                    <select className="w-48 h-6 rounded font-archivo font-bold mb-8 informacaoCarro" required id="cor">
                    <OptionTelaDeAnuncio itens={cores}/>
                    </select>

                    <button id="btnAnunciarNovoCarro"
                        className="border-2 p-4 border-color2 bg-white text-color2 font-archivo font-bold rounded-full">Anunciar</button>
                </form>
            </div>
    )
}

export default TelaDeAnuncio