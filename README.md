# BlogProject

Este projeto foi gerado utilizando o [Angular CLI](https://angular.dev/cli) na versão 17.0.0.

## Sobre o Projeto

O **BlogProject** é uma aplicação web desenvolvida com Angular, projetada para demonstrar boas práticas de desenvolvimento frontend, incluindo o uso de componentes modulares, estilos globais e integração com o Angular Router.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

-   [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
-   [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)
-   [Angular CLI](https://angular.dev/cli) (instalado globalmente)

## Instalação

1.  Clone o repositório:

    ```bash
    git clone <URL_DO_REPOSITORIO>
    ```

2.  Navegue até o diretório do projeto:

    ```bash
    cd blog-project
    ```

3.  Instale as dependências:

    ```bash
    npm install
    ```

## Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute:

```bash
ng serve
```

Após o servidor estar em execução, abra o navegador e acesse http://localhost:4200/. A aplicação será recarregada automaticamente sempre que você modificar qualquer arquivo fonte.

## Estrutura do Projeto
A estrutura principal do projeto é organizada da seguinte forma:

src/
├── app/
│   ├── components/        # Componentes reutilizáveis
│   ├── app.component.ts   # Componente raiz da aplicação
│   ├── app.config.ts      # Arquivo de configuração da aplicação
│   ├── app.routes.ts      # Definição das rotas da aplicação
│   └── ...
├── assets/                # Arquivos estáticos (imagens, fontes, etc.)
├── environments/          # Configurações de ambiente
└── styles.css             # Estilos globais

## Componentes Standalone
Este projeto utiliza componentes standalone, o que significa que cada componente é independente e não requer a declaração em um módulo.

## Recursos Adicionais
Para mais informações sobre o Angular CLI, incluindo referências detalhadas de comandos, visite a página Angular CLI Overview and Command Reference.
