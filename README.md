<h1 align="center">Getting Started Angular.js</h1>

<p align="center">Coleção que reúne pequenos projetos demonstrativos para reforçar meu conhecimento em Angular. Cada projeto aplicará
conceitos fundamentais de Angular, como data binding, componentes, serviços, roteamento e diretivas. Ao final, o site
servirá como uma referência prática e visual de como utilizar as principais funcionalidades do Angular em projetos reais. </p>
===========================================================================

# Components
- Componentes opinativos
- Sistema de injeção

    - Arquivo app.component.ts
        - Uma classe Typescript com comportamentos como manipulação de entrada do usuário
           e busca de dados de um servidor.

        - O decorator Typescript @Component é o responsável por disponibilizar informações
           específicas do componente em questão, metadados, como por exemplo selector, templateUrl
           e styleUrl.
    
    - Arquivo app.component.html
        - Template HTML de tudo que é renderizada no DOM.
    
    - Arquivo app.component.scss
        - estilização do componente.
        - tudo css aplicado só é afetado nos elementos definidos no template desse componente.

# Standalone Components
- standalone = true
- standalone components podem ser importados diretamente para outros componentes autônomos.

# Input
- Os Inputs são uma forma dos componentes pais passarem dados para os componentes filhos.
- As propriedades dos Inputs são semelhantes às props do React.
- Em casos de heranças de classe, os Inputs são herdados.

    - Objeto de configuração:
        - required: define se o repasse do valor é obrigatório ou não.
        - transform: função para alterar o valor de um Input
        - alias: define um nome alternativo para a propriedade de entrada que será usada no templete.

# Outpus
-

# Data binding
- obter uma informação presente na classe do componente no template HTML e vice-versa

    - Interpolação - OK
    - property binding
    - event binding - OK

    - Two-way data binding (C -> T | T -> C)
        - binding bidirecional encarregado de passar informações tanto do componente para o HTML
          como também seguindo o caminho inverso.
        - usa-se binding de eventos em conjunto com o property binding, por isso a notação "banana na caixa"
        - banana na caixa: [()]
        - [(ngModel)]="exemplo"

    - class binding
    - style binding

# Services
- https://fakestoreapi.com/products