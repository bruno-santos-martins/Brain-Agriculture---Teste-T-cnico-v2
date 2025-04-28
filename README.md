# Brain Agriculture - Teste Técnico

Este projeto foi desenvolvido como parte do **teste técnico da Brain Agriculture**.

Ele é uma aplicação **NestJS** utilizando **arquitetura hexagonal (ports & adapters)**, conectada a um banco de dados **PostgreSQL** com **Prisma ORM**, rodando via **Docker** e documentada com **Swagger**.

---

## Índice
- [Sobre o Projeto](#sobre-o-projeto)
- [Arquitetura Hexagonal](#arquitetura-hexagonal)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Principais Funcionalidades](#principais-funcionalidades)
- [Documentação da API](#documentação-da-api)
- [Autor](#autor)

---

## Sobre o Projeto

O sistema é focado no **gerenciamento de produtores rurais**, suas **propriedades (fazendas)**, **safras** e **culturas**.

Principais módulos:
- Cadastro de **Produtores** (Farmers)
- Cadastro de **Fazendas** (Farms)
- Cadastro de **Safras** (Harvests)
- Cadastro de **Culturas** (Crops)
- Dashboard com **resumo de propriedades, áreas e culturas**

---

## Arquitetura Hexagonal

A aplicação segue o modelo de **Arquitetura Hexagonal** (Ports and Adapters), que tem como objetivo **isolar o domínio da aplicação** das suas tecnologias externas, como banco de dados e frameworks.

**Principais camadas:**
- **Domain**:  
  Entidades e regras de negócio puras.
- **Application**:  
  Casos de uso (services) que orquestram regras de negócio.
- **Ports**:  
  Interfaces para entrada e saída de dados.
- **Adapters**:  
  Implementações específicas para banco de dados (ex.: Prisma), controllers (ex.: NestJS) e API.
- **Infrastructure**:  
  Configurações técnicas (ex.: Prisma Client, Docker, conexões externas).

**Vantagens:**
- Alta testabilidade (mock dos ports).
- Baixo acoplamento com frameworks.
- Flexibilidade para trocar infraestrutura (ex.: Prisma → TypeORM) sem alterar regras de negócio.



## Tecnologias Utilizadas

- **Node.js** + **NestJS** (Backend)
- **Prisma ORM** (Acesso ao Banco de Dados)
- **PostgreSQL** (Banco de Dados Relacional)
- **Docker** e **Docker Compose** (Containerização)
- **Swagger** (Documentação da API)
- **Jest** (Testes unitários)

---

## Como Executar o Projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/brain-agriculture-teste.git
cd brain-agriculture-teste


docker-compose up --build

npm install

npx prisma migrate dev

npm run start:dev
