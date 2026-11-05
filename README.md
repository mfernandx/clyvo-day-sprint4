# 🐾 CLYVO DAY — Mobile

Aplicação mobile desenvolvida em **React Native + Expo + TypeScript** para o projeto **CLYVO DAY**, uma plataforma voltada à continuidade do cuidado e ao acompanhamento da jornada de saúde e bem-estar dos pets.

O aplicativo conecta **Tutores** e **Veterinários** em uma experiência única, permitindo registrar acontecimentos do cotidiano do pet, acompanhar sua evolução, organizar eventos de cuidado, realizar check-ups, interagir com a comunidade e incentivar a constância do Tutor por meio de mecanismos de engajamento e gamificação.

> O CLYVO DAY não é um sistema de pet shop. Seu foco está na construção de uma jornada contínua de cuidado, aproximando Tutores, pets e profissionais veterinários.

---

## 📑 Sumário

- [Sobre o projeto](#-sobre-o-projeto)
- [Objetivos](#-objetivos)
- [Perfis de usuário](#-perfis-de-usuário)
- [Principais funcionalidades](#-principais-funcionalidades)
- [Tecnologias utilizadas](#️-tecnologias-utilizadas)
- [Arquitetura do frontend](#-arquitetura-do-frontend)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Navegação](#-navegação)
- [Autenticação e sessão](#-autenticação-e-sessão)
- [Integração com a API](#-integração-com-a-api)
- [Gerenciamento de estado assíncrono](#-gerenciamento-de-estado-assíncrono)
- [Funcionalidades do Tutor](#-funcionalidades-do-tutor)
- [Funcionalidades do Veterinário](#-funcionalidades-do-veterinário)
- [Comunidade](#-comunidade)
- [Gamificação](#-gamificação)
- [Validação e tratamento de erros](#-validação-e-tratamento-de-erros)
- [Como executar o projeto](#️-como-executar-o-projeto)
- [Configuração da API](#️-configuração-da-api)
- [Executando no Android](#-executando-no-android)
- [Backend](#️-backend)
- [Segurança](#-segurança)
- [Boas práticas adotadas](#-boas-práticas-adotadas)
- [Melhorias futuras](#-melhorias-futuras)

---

# 🐶 Sobre o projeto

O **CLYVO DAY** foi desenvolvido com a proposta de transformar o acompanhamento da vida de um pet em uma experiência contínua, simples e próxima.

Em vez de registrar informações apenas quando surge algum problema de saúde, o aplicativo incentiva o Tutor a acompanhar o pet ao longo do tempo, registrando informações relacionadas à rotina, alimentação, comportamento, saúde, sono, atividades e eventos importantes.

Esses registros constroem um histórico que pode contribuir para uma visão mais ampla da jornada do animal.

A aplicação possui dois tipos principais de usuários:

- **Tutor** — responsável pelo acompanhamento cotidiano do pet;
- **Veterinário** — profissional que pode acompanhar pacientes e visualizar informações relevantes da plataforma.

O frontend mobile consome uma **API REST desenvolvida em ASP.NET Core**, responsável pelas regras de negócio, autenticação e persistência dos dados.

---

# 🎯 Objetivos

O CLYVO DAY busca:

- incentivar a continuidade do cuidado com os pets;
- facilitar o registro da rotina e de acontecimentos importantes;
- construir um histórico longitudinal do animal;
- aproximar Tutores e Veterinários;
- permitir o acompanhamento de indicadores do estado do pet;
- organizar eventos futuros de cuidado;
- incentivar o engajamento por meio de pontuação, conquistas e sequência de registros;
- disponibilizar uma comunidade compartilhada entre Tutores e Veterinários;
- proporcionar uma experiência acolhedora e intuitiva.

---

# 🎥 Vídeo de demonstração

Para visualizar o funcionamento do CLYVO DAY na prática, acesse o vídeo de demonstração do projeto:

👉 [Assistir ao vídeo de demonstração](https://youtu.be/ZdBk8hItJak?si=tl_HDeu02aIoJorE)

---

# 👥 Perfis de usuário

## 🐾 Tutor

O Tutor possui acesso às funcionalidades relacionadas aos seus pets e ao acompanhamento diário.

Entre suas possibilidades estão:

- visualizar seus pets;
- cadastrar informações relacionadas ao pet;
- realizar registros diários;
- realizar CheckUps;
- registrar eventos de cuidado;
- acompanhar próximos cuidados;
- acompanhar sua sequência de registros;
- visualizar sua pontuação;
- acompanhar conquistas;
- publicar na comunidade;
- visualizar sua jornada;
- editar dados da conta;
- manter sua sessão autenticada.

---

## 🩺 Veterinário

O Veterinário possui uma experiência própria dentro do aplicativo.

Entre suas funcionalidades estão:

- visualizar pacientes;
- pesquisar pets;
- acompanhar informações disponíveis dos pacientes;
- acessar a comunidade;
- criar publicações;
- visualizar Insights;
- acompanhar o engajamento dos Tutores;
- visualizar informações profissionais;
- editar dados da conta;
- manter sua sessão autenticada.

---

# ✨ Principais funcionalidades

### 🔐 Autenticação

- cadastro de Tutor;
- cadastro de Veterinário;
- autenticação através da API .NET;
- utilização de JWT;
- persistência de sessão;
- recuperação automática do usuário autenticado;
- navegação baseada no tipo de usuário;
- logout;
- rotas protegidas.

### 🐕 Pets

- cadastro de pets;
- listagem dos pets pertencentes ao Tutor;
- listagem de pacientes para Veterinários;
- pesquisa de pacientes.

### 📖 Registro Diário

Permite registrar acontecimentos cotidianos relacionados ao pet.

Entre as categorias disponíveis estão:

- passeio;
- alimentação;
- saúde;
- rotina;
- brincadeira;
- sono;
- comportamento;
- treino.

Os registros podem possuir diferentes níveis de privacidade.

### ❤️ CheckUp

Permite registrar indicadores relacionados ao estado atual do pet, como:

- humor;
- energia;
- hidratação;
- alimentação;
- qualidade do sono;
- sociabilidade;
- medicação;
- peso;
- observações.

Os indicadores podem ser avaliados utilizando uma escala de **0 a 10**.

### 📅 Eventos de cuidado

O Tutor pode cadastrar eventos relacionados ao cuidado do pet, como:

- vacinação;
- consulta;
- medicação;
- exame;
- higiene;
- outros cuidados.

Cada evento pode possuir:

- tipo;
- descrição;
- data;
- observações;
- status.

Os próximos cuidados são apresentados na Home do Tutor.

### 🌎 Comunidade

Tutores e Veterinários compartilham um ambiente de comunidade.

É possível:

- visualizar publicações;
- criar publicações;
- informar categoria;
- adicionar conteúdo;
- informar localização;
- identificar o autor e seu tipo de usuário.

### 🏆 Conquistas

O aplicativo possui elementos de gamificação para incentivar a continuidade do cuidado.

As conquistas são definidas pelo backend e representam a evolução do Tutor na plataforma.

### 🔥 Sequência de cuidado

A Home possui uma sequência de cuidado baseada na frequência dos registros do Tutor/pet.

A funcionalidade busca incentivar registros consistentes ao longo dos dias.

### 📊 Insights do Veterinário

A área de Insights apresenta informações resumidas da plataforma para o Veterinário, incluindo:

- quantidade de pacientes;
- quantidade de Tutores;
- Tutores ativos;
- média de pontos;
- pontuação de engajamento;
- ranking de Tutores;
- conquistas atuais dos Tutores.

### ✏️ Edição do perfil

Tutores e Veterinários podem alterar informações da conta diretamente pelo perfil.

Atualmente é possível editar:

- e-mail;
- telefone.

A edição é realizada através de modais individuais e os dados são sincronizados novamente com a API após a atualização.

---

# 🛠️ Tecnologias utilizadas

O frontend utiliza as seguintes tecnologias:

| Tecnologia | Utilização |
|---|---|
| React Native | Desenvolvimento da aplicação mobile |
| Expo | Ambiente e ferramentas de desenvolvimento |
| TypeScript | Tipagem estática |
| React Navigation | Navegação entre telas |
| TanStack Query | Requisições, cache e sincronização |
| Axios | Cliente HTTP |
| AsyncStorage | Persistência local da sessão |
| Yup | Validação de formulários |
| Expo Vector Icons | Ícones da interface |
| React Hooks | Estado e ciclo de vida dos componentes |

O backend consumido pela aplicação utiliza **ASP.NET Core, C#, Entity Framework Core, JWT e banco de dados relacional**.

---

# 🏗 Arquitetura do frontend

O projeto foi organizado buscando separar responsabilidades entre interface, acesso aos dados, regras de apresentação e navegação.

O fluxo principal segue a estrutura:

```text
Screen
   │
   ▼
Custom Hook
   │
   ▼
TanStack Query
   │
   ▼
Service
   │
   ▼
Axios
   │
   ▼
REST API (.NET)
   │
   ▼
Banco de Dados
```

Essa organização evita que as telas sejam responsáveis diretamente pela comunicação HTTP.

### Screens

Responsáveis pela apresentação da interface e interação com o usuário.

### Components

Elementos reutilizáveis da interface.

Exemplos:

```text
Cards
Modais
Seletores
Campos de perfil
Cards de eventos
Cards de Insights
```

### Services

Centralizam as chamadas HTTP realizadas para a API.

Exemplo:

```ts
const response = await api.get('/api/Pet/my');
```

### Hooks

Encapsulam operações com TanStack Query e comportamentos reutilizáveis.

Exemplos:

```text
usePets
usePatients
useTutors
useCareEvents
useDailyPetLogs
useCreateCareEvent
useUpdateEmail
useUpdatePhone
```

### Contexts

Gerenciam estados que precisam ser compartilhados entre diferentes partes da aplicação.

Os principais são:

```text
AuthContext
RegistrationContext
```

---

# 📂 Estrutura de pastas

A estrutura pode variar levemente conforme a evolução do projeto, mas segue aproximadamente:

```text
clyvo-day-app/
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── src/
│   │
│   ├── components/
│   │   ├── careEvent/
│   │   ├── community/
│   │   ├── home/
│   │   ├── insights/
│   │   ├── monitoring/
│   │   ├── profile/
│   │   └── ...
│   │
│   ├── constants/
│   │   ├── careEventTypes.ts
│   │   └── ...
│   │
│   ├── contexts/
│   │   ├── AuthContext.tsx
│   │   └── RegistrationContext.tsx
│   │
│   ├── hooks/
│   │   ├── useCareEvents.ts
│   │   ├── useCreateCareEvent.ts
│   │   ├── useDailyPetLogs.ts
│   │   ├── useLogin.ts
│   │   ├── usePatients.ts
│   │   ├── usePets.ts
│   │   ├── useTutors.ts
│   │   ├── useUpdateEmail.ts
│   │   └── useUpdatePhone.ts
│   │
│   ├── model/
│   │   ├── CareEvent.ts
│   │   ├── DailyPetLog.ts
│   │   ├── Pet.ts
│   │   ├── PetMonitoring.ts
│   │   ├── Tutor.ts
│   │   ├── User.ts
│   │   └── ...
│   │
│   ├── navigation/
│   │   ├── PublicNavigator.tsx
│   │   ├── RootNavigator.tsx
│   │   ├── TutorNavigator.tsx
│   │   ├── VeterinarianNavigator.tsx
│   │   ├── CommunityNavigator.tsx
│   │   └── navigationTypes.ts
│   │
│   ├── service/
│   │   ├── api.ts
│   │   ├── authService.ts
│   │   ├── careEventService.ts
│   │   ├── communityService.ts
│   │   ├── petService.ts
│   │   ├── tutorService.ts
│   │   ├── userService.ts
│   │   └── ...
│   │
│   ├── storage/
│   │   └── sessionStorage.ts
│   │
│   ├── utils/
│   │   ├── calculateCareStreak.ts
│   │   └── ...
│   │
│   └── views/
│       ├── public/
│       ├── tutor/
│       ├── veterinarian/
│       └── community/
│
├── App.tsx
├── app.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

# 🧭 Navegação

Toda a navegação da aplicação é realizada utilizando **React Navigation**.

A aplicação não utiliza Expo Router e não realiza troca manual de telas através de estados.

O `RootNavigator` determina qual fluxo deve ser apresentado de acordo com a autenticação e o tipo do usuário.

Fluxo simplificado:

```text
                    RootNavigator
                         │
              ┌──────────┴──────────┐
              │                     │
       Não autenticado         Autenticado
              │                     │
              ▼              ┌──────┴──────┐
       PublicNavigator        │             │
                         Tutor          Veterinário
                           │                │
                           ▼                ▼
                    TutorNavigator   VeterinarianNavigator
```

---

## Navegação pública

O fluxo público contém telas como:

```text
Início
  │
  ├── Login
  │
  └── Cadastro
          │
          ├── Tutor → Cadastro do Pet
          │
          └── Veterinário → Dados profissionais
```

---

## Navegação do Tutor

A estrutura principal do Tutor possui Tabs e telas adicionais em Stack.

```text
TutorStack
│
├── TutorTabs
│   ├── Home
│   ├── Jornada
│   └── Perfil
│
├── Pets
├── Registro Diário
├── CheckUp
├── Evento de Cuidado
└── Conquistas
```

---

## Navegação do Veterinário

```text
VeterinarianStack
│
├── VeterinarianTabs
│   ├── Início
│   ├── Pacientes
│   ├── Comunidade
│   └── Perfil
│
└── Insights
```

---

# 🔐 Autenticação e sessão

A autenticação é realizada pela API ASP.NET Core utilizando **JWT (JSON Web Token)**.

O fluxo de autenticação funciona da seguinte maneira:

```text
LoginScreen
    │
    ▼
POST /api/Auth/login
    │
    ▼
API valida as credenciais
    │
    ▼
JWT é retornado
    │
    ▼
Token é armazenado localmente
    │
    ▼
GET /api/Auth/me
    │
    ▼
Usuário completo é recuperado
    │
    ▼
AuthContext é atualizado
    │
    ▼
RootNavigator escolhe o fluxo
```

O token é enviado automaticamente nas requisições autenticadas:

```http
Authorization: Bearer TOKEN
```

Isso é feito através de um interceptor do Axios.

---

# 💾 Persistência da sessão

O **AsyncStorage** é utilizado somente para informações locais necessárias à aplicação, principalmente autenticação.

São armazenados localmente:

```text
JWT
dados necessários da sessão
```

Dados de negócio como pets, registros, eventos e usuários são obtidos através da API REST.

Ao abrir novamente o aplicativo:

```text
App inicia
   ↓
AuthContext verifica a sessão
   ↓
Token encontrado
   ↓
GET /api/Auth/me
   ↓
Usuário é validado
   ↓
Sessão restaurada
```

Dessa forma, o usuário não precisa realizar login novamente a cada abertura do aplicativo enquanto sua sessão permanecer válida.

---

# 🌐 Integração com a API

As chamadas HTTP são centralizadas em uma instância Axios.

Exemplo conceitual:

```ts
import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://ENDERECO_DA_API',
});
```

Os Services utilizam essa instância:

```ts
async getMyPets(): Promise<Pet[]> {
    const response = await api.get<Pet[]>('/api/Pet/my');
    return response.data;
}
```

As Screens não precisam conhecer detalhes de Axios ou URLs.

---

# 🔄 Gerenciamento de estado assíncrono

O projeto utiliza **TanStack Query** para operações assíncronas.

A biblioteca é responsável por:

- execução das requisições;
- gerenciamento de loading;
- gerenciamento de erros;
- cache;
- refetch;
- invalidação de queries;
- sincronização da interface após mutations.

Exemplo:

```ts
export function usePets() {
    return useQuery({
        queryKey: ['myPets'],
        queryFn: petService.getMyPets,
    });
}
```

Após cadastrar um evento:

```ts
queryClient.invalidateQueries({
    queryKey: ['careEvents', careEvent.petId],
});
```

Isso permite que outras telas que dependem desses dados sejam atualizadas.

---

# 🐾 Funcionalidades do Tutor

## Home

A Home concentra atalhos e informações importantes.

Atualmente apresenta:

- saudação personalizada;
- acesso aos pets;
- sequência de cuidado;
- Registro Diário;
- CheckUp;
- publicação na comunidade;
- Evento de Cuidado;
- próximos cuidados.

---

## Pets

O Tutor visualiza somente os pets vinculados à própria conta.

A autorização dos dados não depende apenas do frontend. O backend disponibiliza uma rota específica baseada no usuário autenticado.

Exemplo:

```http
GET /api/Pet/my
```

---

## Registro Diário

Os registros diários constroem a jornada cotidiana do pet.

Exemplo de payload:

```json
{
    "petId": 1,
    "dailyPetLogType": "Routine",
    "content": "Hoje passeamos no parque.",
    "privacy": 0
}
```

A privacidade pode determinar se o conteúdo pode ou não ser visualizado por profissionais.

---

## Jornada

A Jornada apresenta os acontecimentos registrados ao longo do tempo.

O objetivo é construir uma visualização longitudinal da vida do pet, evitando uma experiência baseada apenas em tarefas isoladas.

---

## CheckUp

O CheckUp permite registrar indicadores relacionados ao estado do pet.

Exemplo:

```json
{
    "petId": 1,
    "mood": "8/10",
    "energyLevel": "9/10",
    "hydrationLevel": "8/10",
    "food": "7/10",
    "sleepQuality": "9/10",
    "sociability": "8/10",
    "tookMedication": false,
    "weight": 7.8,
    "observations": "Pet ativo durante o dia."
}
```

O Tutor não precisa necessariamente preencher todos os indicadores, mas pelo menos uma informação deve ser registrada.

---

## Eventos de cuidado

Os eventos permitem organizar cuidados importantes.

Exemplo:

```json
{
    "petId": 1,
    "typeEvent": "Vacinação",
    "description": "Vacina anual",
    "eventDate": "2026-10-10",
    "observations": "Levar carteira de vacinação."
}
```

Os status possíveis no domínio são:

```text
Scheduled
Completed
Cancelled
Missed
```

Os eventos futuros podem ser apresentados na seção **Próximos cuidados** da Home.

---

# 🩺 Funcionalidades do Veterinário

## Pacientes

A tela de pacientes permite:

- listar pets disponíveis para acompanhamento;
- pesquisar pelo nome;
- pesquisar por espécie;
- pesquisar por raça;
- visualizar informações básicas.

A rota geral de pets é protegida para o perfil Veterinário.

---

## Insights

A tela de Insights oferece uma visão resumida da plataforma.

Entre as informações apresentadas estão:

```text
Quantidade de pacientes
Quantidade de Tutores
Tutores ativos
Média de pontos
Pontuação total
Ranking de engajamento
Conquistas
```

Os dados são calculados utilizando informações reais retornadas pela API.

---

# 🌎 Comunidade

A Comunidade é compartilhada pelos dois tipos de usuário.

Uma publicação pode possuir:

```text
categoria
conteúdo
localização
imagem
autor
tipo do autor
data
```

A interface identifica quando o autor é Veterinário, permitindo diferenciar os tipos de participantes da comunidade.

---

# 🎮 Gamificação

O CLYVO DAY utiliza elementos de gamificação para incentivar a continuidade do cuidado.

## Pontos de engajamento

Cada Tutor possui uma pontuação:

```text
scoreEngagement
```

Essa pontuação é controlada pelo backend.

---

## Conquistas

As conquistas disponíveis no domínio são:

```text
Nenhum
InicianteAtencioso
TutorDedicado
GuardiãoPet
ClyvoMaster
```

O backend é responsável por determinar qual conquista pertence ao Tutor.

O frontend apenas apresenta essa informação.

---

## Sequência de cuidado

A sequência considera a constância dos registros.

Exemplo:

```text
Segunda   ✅
Terça     ✅
Quarta    ✅
Quinta    ✅

🔥 4 dias seguidos
```

A interface apresenta mensagens diferentes de acordo com a evolução da sequência.

---

# ✅ Validação e tratamento de erros

Os formulários possuem validações para evitar o envio de dados inválidos.

Entre as validações utilizadas estão:

- campos obrigatórios;
- formato de e-mail;
- telefone;
- datas;
- limites de caracteres;
- valores numéricos;
- avaliações de 0 a 10.

A aplicação também apresenta feedback visual para:

```text
Loading
Erro
Lista vazia
Sucesso
Atualização
```

Erros da API são tratados para evitar a exposição direta de mensagens técnicas ao usuário.

---

# ✏️ Atualização de dados do usuário

E-mail e telefone podem ser atualizados diretamente no perfil.

Endpoints utilizados:

```http
PUT /api/User/{userId}/email
PUT /api/User/{userId}/phone
```

Após uma alteração:

```text
Usuário edita
    ↓
PUT para API
    ↓
API atualiza
    ↓
GET /api/Auth/me
    ↓
AuthContext atualizado
    ↓
Interface atualizada
```

Isso mantém os dados locais sincronizados com o backend.

---

# ⚙️ Como executar o projeto

## Pré-requisitos

Antes de iniciar, tenha instalado:

- Node.js;
- npm;
- Git;
- Expo;
- Android Studio, caso utilize emulador Android;
- Expo Go, caso utilize dispositivo físico;
- backend CLYVO DAY em execução.

Verifique:

```bash
node --version
npm --version
git --version
```

---

## 1. Clonar o repositório

```bash
git clone https://github.com/mfernandx/clyvo-day-sprint4.git
```

Entre na pasta:

```bash
cd clyvo-day-app
```

---

## 2. Instalar as dependências

```bash
npm install
```

Para projetos Expo, dependências específicas do ecossistema devem preferencialmente ser instaladas utilizando:

```bash
npx expo install <pacote>
```

Isso ajuda a manter versões compatíveis com o SDK do Expo utilizado pelo projeto.

---

## 3. Verificar o ambiente Expo

Execute:

```bash
npx expo-doctor
```

O comando verifica possíveis incompatibilidades entre:

- Expo SDK;
- React;
- React Native;
- dependências;
- configuração do projeto.

---

## 4. Iniciar a aplicação

```bash
npx expo start
```

O Metro Bundler será iniciado.

Também é possível limpar o cache:

```bash
npx expo start -c
```

---

# 📱 Executando no Android

## Android Emulator

Quando a API está sendo executada no computador e o aplicativo está no Android Emulator, `localhost` dentro do Android representa o próprio emulador.

Por isso, normalmente utiliza-se:

```text
10.0.2.2
```

Exemplo:

```ts
baseURL: 'http://10.0.2.2:10000'
```

---

## Dispositivo físico

Ao utilizar Expo Go em um dispositivo físico, o celular precisa conseguir acessar o computador que está executando a API.

Nesse caso, utilize o endereço IP local do computador.

Exemplo:

```text
http://192.168.x.x:10000
```

O computador e o dispositivo geralmente precisam estar na mesma rede local e o backend deve aceitar conexões pelo endereço utilizado.

---

# 🖥️ Backend

O frontend depende da API do CLYVO DAY.

A API é responsável por:

- autenticação;
- autorização;
- regras de negócio;
- persistência;
- usuários;
- Tutores;
- Veterinários;
- pets;
- registros diários;
- monitoramentos;
- eventos de cuidado;
- comunidade;
- pontuação;
- conquistas.

A documentação interativa da API pode ser acessada através do link:

```text
https://clyvo-day-api.azurewebsites.net/scalar
```

---

# 🔒 Segurança

Algumas práticas de segurança adotadas no projeto:

### JWT

A autenticação utiliza tokens JWT emitidos pelo backend.

### Rotas protegidas

Endpoints que dependem de autenticação são protegidos no servidor.

### Autorização por perfil

A API diferencia permissões entre:

```text
Tutor
Veterinário
```

### Autorização no backend

O frontend esconder uma tela ou botão **não é considerado uma medida de segurança**.

A autorização real deve ocorrer no backend.

Por exemplo, um Tutor não deve conseguir obter pets pertencentes a outro Tutor simplesmente alterando manualmente uma requisição.

### Senhas

Senhas não devem ser armazenadas em texto puro.

O backend é responsável pelo armazenamento seguro utilizando hash.

### Informações sensíveis

Arquivos versionados no Git não devem conter:

```text
senhas
tokens
JWT secrets
connection strings sensíveis
chaves privadas
credenciais
```

---

# 🧹 Boas práticas adotadas

Durante o desenvolvimento foram aplicadas práticas como:

- TypeScript para maior segurança de tipos;
- componentes reutilizáveis;
- separação entre Screen, Hook e Service;
- React Navigation para navegação;
- TanStack Query para estado assíncrono;
- Axios centralizado;
- interceptor para JWT;
- AsyncStorage para persistência de sessão;
- validação de formulários;
- feedback de loading;
- tratamento de erros;
- estados vazios;
- pull-to-refresh;
- invalidação de cache após mutations;
- navegação baseada em autenticação;
- separação entre Tutor e Veterinário;
- autorização de recursos sensíveis no backend;
- reutilização de componentes visuais.

---

# 🎨 Identidade visual

O CLYVO DAY utiliza uma identidade visual leve e acolhedora.

A interface foi construída com:

- tons suaves de azul;
- cores pastéis;
- verde para elementos ligados ao Veterinário;
- laranja para sequência e engajamento;
- cards arredondados;
- ícones amigáveis;
- espaçamento confortável;
- hierarquia visual simples.

A intenção é evitar a aparência de um sistema clínico excessivamente técnico e apresentar o acompanhamento do pet como uma **jornada de cuidado**.

---

# 🔄 Fluxo geral da aplicação

```text
                    CLYVO DAY
                        │
                        ▼
                 Usuário abre App
                        │
                        ▼
                 Existe sessão?
                  /           \
                Não            Sim
                │               │
                ▼               ▼
          Fluxo público      /Auth/me
                │               │
         Login / Cadastro       ▼
                │          Usuário válido
                │               │
                └───────┬───────┘
                        ▼
                  Tipo de usuário
                   /           \
                  /             \
               Tutor         Veterinário
                 │               │
                 ▼               ▼
           TutorNavigator   VetNavigator
                 │               │
        ┌────────┼───────┐       ├── Pacientes
        │        │       │       ├── Comunidade
       Home   Jornada   Perfil   ├── Insights
        │                        └── Perfil
        ├── Pets
        ├── Registro Diário
        ├── CheckUp
        ├── Evento de Cuidado
        ├── Comunidade
        └── Conquistas
```

---

# 🐾 Conceito do CLYVO DAY

O CLYVO DAY parte da ideia de que o cuidado não acontece somente durante uma consulta.

Ele acontece:

```text
no passeio,
na alimentação,
no sono,
na mudança de comportamento,
na medicação,
na vacinação,
na brincadeira,
no CheckUp,
no pequeno registro de cada dia.
```

Cada registro representa um pequeno momento.

Juntos, esses momentos constroem a jornada do pet.

---

## 💙 CLYVO DAY

**Pequenos registros ajudam a construir uma grande jornada.**

Projeto desenvolvido para fins acadêmicos no curso de **Análise e Desenvolvimento de Sistemas**.
