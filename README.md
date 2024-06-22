Visão Geral
Cinema App é uma aplicação web que permite aos usuários gerenciar filmes, avaliações e comentários. Inclui funcionalidades para registro de usuários, login e administração de usuários e filmes. Esta aplicação é construída utilizando Flask, MySQL e outras tecnologias.

Estrutura do Projeto
cinema_app/
├── css/
│   └── index.css
├── filmes/
│   ├── create.html
│   ├── edit.html
│   └── filmes.html
├── js/
│   └── script.js
├── usuarios/
│   ├── create.html
│   ├── edit.html
│   ├── usuarios.html
│   ├── avaliacoes.html
│   └── cadastro.html
├── docker-compose.yml
├── index.html
└── login.html

Funcionalidades

Registro e Login de Usuários
Gerenciamento de Usuários (Operações CRUD para usuários)
Gerenciamento de Filmes (Operações CRUD para filmes)
Gerenciamento de Avaliações e Comentários para filmes
Autenticação JWT


Começando
Pré-requisitos

Docker
Docker Compose
Instalação

Clone o repositório:

git clone <url-do-repositório>
cd cinema_app
Configure as variáveis de ambiente (crie um arquivo .env se necessário):

MYSQL_ROOT_PASSWORD=root
MYSQL_DATABASE=cinema_app
MYSQL_USER=root
MYSQL_PASSWORD=root
Inicie a aplicação usando Docker Compose:


docker-compose up
Acessando a Aplicação
A aplicação deve estar acessível em http://localhost:5000.

Endpoints:

Endpoints de Usuário

POST /register: Registrar um novo usuário.
POST /register-admin: Registrar um novo usuário administrador.
POST /login: Logar um usuário.
GET /logout: Deslogar o usuário atual.
GET /usuarios: Listar todos os usuários.
GET /usuarios/int:usuario_id: Obter detalhes de um usuário específico.
PUT /usuarios/int:usuario_id: Atualizar um usuário.
DELETE /usuarios/int:usuario_id: Deletar um usuário.

Endpoints de Filme

GET /filmes: Listar todos os filmes.
POST /filmes: Adicionar um novo filme.
GET /filmes/int:filme_id: Obter detalhes de um filme específico.
PUT /filmes/int:filme_id: Atualizar um filme.
DELETE /filmes/int:filme_id: Deletar um filme.
Endpoints de Avaliação

POST /avaliacoes: Adicionar uma nova avaliação para um filme.
GET /avaliacoes/int:filme_id: Listar todas as avaliações para um filme específico.
Endpoints de Comentário

POST /comentarios: Adicionar um novo comentário para um filme.
GET /comentarios/int:filme_id: Listar todos os comentários para um filme específico.
Frontend
Templates HTML

index.html: Página inicial
login.html: Página de login
usuarios/create.html: Página de criação de usuário
usuarios/edit.html: Página de edição de usuário
usuarios/usuarios.html: Página de listagem de usuários
usuarios/avaliacoes.html: Página de listagem de avaliações
usuarios/cadastro.html: Página de registro
filmes/create.html: Página de criação de filme
filmes/edit.html: Página de edição de filme
filmes/filmes.html: Página de listagem de filmes
CSS

css/index.css: Estilos para a aplicação
JavaScript

js/script.js: Funcionalidades JavaScript para a aplicação