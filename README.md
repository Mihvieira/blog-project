# BlogProject

Este projeto foi gerado utilizando o [Angular CLI](https://github.com/angular/angular-cli) na versão 19.2.4.

## Sobre o Projeto

O **BlogProject** é uma aplicação web desenvolvida com Angular, projetada para demonstrar boas práticas de desenvolvimento frontend, incluindo o uso de componentes modulares, estilos globais e integração com o Angular Router.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
- [Node.js](https://nodejs.org/) (versão 16 ou superior recomendada)
- [Angular CLI](https://angular.dev/cli) (instalado globalmente)

## Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute:

```bash
ng serve

```markdown
# BlogProject

Este projeto foi gerado utilizando o [Angular CLI](https://github.com/angular/angular-cli) na versão 19.2.4.

## Sobre o Projeto

O **BlogProject** é uma aplicação web desenvolvida com Angular, projetada para demonstrar boas práticas de desenvolvimento frontend, incluindo o uso de componentes modulares, estilos globais e integração com o Angular Router.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
- [Node.js](https://nodejs.org/) (versão 16 ou superior recomendada)
- [Angular CLI](https://angular.dev/cli) (instalado globalmente)

## Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute:

```bash
ng serve
```

Após o servidor estar em execução, abra o navegador e acesse `http://localhost:4200/`. A aplicação será recarregada automaticamente sempre que você modificar qualquer arquivo fonte.

## Estrutura do Projeto

A estrutura principal do projeto é organizada da seguinte forma:

```
src/
├── app/
│   ├── components/    # Componentes reutilizáveis
│   └── app.module.ts  # Módulo principal
├── assets/            # Arquivos estáticos (imagens, fontes, etc.)
├── environments/      # Configurações de ambiente
└── styles.css         # Estilos globais
```

## Gerar Componentes

O Angular CLI inclui ferramentas poderosas para scaffolding de código. Para gerar um novo componente, execute:

```bash
ng generate component nome-do-componente
```

Para uma lista completa de esquemas disponíveis (como `components`, `directives` ou `pipes`), execute:

```bash
ng generate --help
```

## Construção do Projeto

Para compilar o projeto, execute:

```bash
ng build
```

Os artefatos de build serão armazenados no diretório `dist/`. Por padrão, o build de produção otimiza a aplicação para desempenho e velocidade.

## Recursos Adicionais

Para mais informações sobre o Angular CLI, incluindo referências detalhadas de comandos, visite a página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
