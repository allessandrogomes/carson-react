import React, { useEffect, useState } from 'react'
import CardCarro from "./CardCarro/CardCarro"

function SessaoCarros() {

    const [listaDeCarros, setListaDeCarros] = useState ([])

    const ednPointDaAPI = 'https://raw.githubusercontent.com/allessandrogomes/carsOn/main/carros.json'
    
    useEffect(() => {
        async function buscarCarrosDaApi() {
            const res = await fetch(ednPointDaAPI)
            const data = await res.json()
            setListaDeCarros(data)
        }

        buscarCarrosDaApi()
    }, [])

    return (
        <section className="flex justify-around flex-wrap" id="sessao-carros">
            <CardCarro listaDeCarros={listaDeCarros}/>
        </section>
    )
}

export default SessaoCarros