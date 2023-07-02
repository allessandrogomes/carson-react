import FundoDesfocado from "./FundoDesfocado"
import TelaAnuncioPublicado from "./TelaAnuncioPublicado"
import TelaChat from "./TelaChat"
import TelaDeAnuncio from "./TelaDeAnuncio"
import TelaDeCadastro from "./TelaDeCadastro/TelaDeCadastro"
import TelaEntrar from "./TelaEntrar"
import TelaEsqueciMinhaSenha from "./TelaEsqueciMinhaSenha"

function Main({ children }) {
    return (
        <main>
            <FundoDesfocado />
            <TelaAnuncioPublicado />
            <TelaDeCadastro />
            <TelaEsqueciMinhaSenha />
            <TelaEntrar />
            <TelaDeAnuncio />
            <TelaChat />
            { children }
        </main>
    )
}

export default Main