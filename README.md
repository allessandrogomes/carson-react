# CarsOn - Compra e venda de veículos 

![carson-favicon_resized](https://github.com/allessandrogomes/carson-react/assets/112139213/4bc8ac90-978d-41e3-8a36-a3d117999207)

![Status do projeto](https://img.shields.io/badge/STATUS-EM_DESENVOLVIMENTO-green)

# Índice

- [CarsOn - Compra e venda de veículos](#carson---compra-e-venda-de-ve%C3%ADculos)
- [Índice](#índice)
- [Descrição do Projeto](#o-que-é-carson)
- [Funcionalidades do Projeto](#hammer-funcionalidades-do-projeto)
- [Acesso ao Projeto](#file_folder-acesso-ao-projeto)
- [Tecnologias utilizadas](#heavy_check_mark-tecnologias-utilizadas)
- [Autor](#autor)

# O que é CarsOn?
CarsOn é um projeto web Front-End de compra e venda de veículos desenvolvido com o intuito de demonstrar na prática meus conhecimentos em React.js, TailwindCss, trabalhando com API, HTML, Css e JavaScript.
![projeto-carson](https://github.com/allessandrogomes/carson-react/assets/112139213/381be55b-0254-4d27-a2f6-87992f2bdf32)


O site tem algumas funcionalidades que serão demonstradas nos próximos tópicos, como: 
- Anunciar um novo veículo
- Pesquisar por um veículo
- Validação e preenchimento automático de formulários
- Filtragens múltiplas
- Chat
- Responsividade para Desktops, Tablets e Smartphones

# :hammer: Funcionalidades do Projeto
<h2>Anunciar um novo veículo</h2>
<p>Ao clicar no botão "Anunciar", será aberto uma nova tela solicitando os dados do novo veículo a ser anunciado. Caso o preenchimento do formulário esteja incorreto, o usuário será informado. Após o preenchimento correto e ao realizar o anúncio, este será inserido na lista de veículos, aparecendo assim o novo card com suas respectivas informações. É importante mencionar, que esse novo veículo estará correspondendo também a todos os comportamentos conjuntamente com os outros veículos, como filtragens e pesquisa.</p>

![anunciar-gif-readme](https://github.com/allessandrogomes/carson-react/assets/112139213/61cdf0bd-1a7c-4a79-b127-b08bf71aa208)

<h2>Funcionalidade Pesquisar</h2>
<p>Com essa funcionalidade simples, é possível pesquisar os veículos pelo seu nome ou marca. Ao digitar, imediatamente irá aparecer uma lista de sugestão para melhor auxiliar o usuário nessa busca, mostrando os veículos disponíveis de acordo com o que foi digitado até o momento. O usuário poderá escolher um dos itens sugeridos ou pesquisar por meio da lupa.</p>

![pesquisar-gif-readme](https://github.com/allessandrogomes/carson-react/assets/112139213/3fc5460d-b388-4eb4-b271-7ea77a68a185)

<h2>Validação e preenchimento automático de formulários</h2>
<p>A validação de formulários é executada para que os dados sejam enviados corretamente, informando ao usuário caso contenha algum erro(como a data de nascimento de um menor de idade), evitando problemas futuros para o nosso projeto. Além disso, está presente também o preenchimento automático auxiliando o usuário. Nesse caso, o preenchimento do número de telefone recebe uma formatação automática, enquanto o CEP utiliza uma API pública para preencher o endereço do usuário.</p>

![validacao-formularios-gif-readme](https://github.com/allessandrogomes/carson-react/assets/112139213/e5777f7d-3080-4ceb-8bed-e8d28b6afa18)

<h2>Filtragens múltiplas</h2>
<p>Nessa funcionalidade, conseguimos realizar o comportamento de filtragem dos veículos, seja ele por Estado, Cor, Marca, Ano ou Preço. Os filtros também são múltiplos, ou seja, podemos utilizar mais de um filtro para realizar a requisição do veículo interessado. Os novos veículos anunciados também estão inclusos na filtragem. Em caso de não existir o veículo, será retornada uma mensagem informando.</p>

![filtragem-gif-readme](https://github.com/allessandrogomes/carson-react/assets/112139213/8844d82a-6ae5-49f6-82ff-0e66c84f3ac5)

<h2>Chat</h2>
<p>Uma funcionalidade simples, mas que é muito encontrada em sites hoje em dia, o chat. Nele podemos digitar nossa mensagem para o devido atendimento.</p>

![chat-gif-readme](https://github.com/allessandrogomes/carson-react/assets/112139213/7ff6dbd7-186c-4897-bf89-12e215639a96)

<h2>Responsividade para Desktops, Tablets e Smartphones</h2>
<p>O projeto CarsOn também foi desenvolvido pensando nos diversos tipos de telas. Diante disso, está implementada a responsivadade para Desktops, Tablets e Smartphones. Dessa forma conseguimos oferecer a melhor experiência para o usuário, independentemente do seu dispositivo.</p>

![responsividade-gif-readme](https://github.com/allessandrogomes/carson-react/assets/112139213/70a35d85-a52b-4277-84e1-21de7da80833)

# :file_folder: Acesso ao Projeto

<h3>Faça a clonagem do Projeto</h3>

```
git clone https://github.com/allessandrogomes/carson-react.git
```
<h3>Instale as dependências</h3>

```
npm install
```

<h3>Rode o Projeto</h3>

```
npm start
```

<h3>Ou pode acessar também o link</h3>

```
https://carson-react.vercel.app
```

# :heavy_check_mark: Tecnologias utilizadas

- ``React.js``
- ``TailwindCSS``
- ``PostCSS``

# Autor

| [<img loading="lazy" src="https://github.com/allessandrogomes.png" width=115><br><sub>Alessandro Gomes</sub>](https://github.com/allessandrogomes) |
| :---: |
