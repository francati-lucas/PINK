# PINK - Mulheres com Propósito 🌸
Este é o site oficial do **Movimento PINK (Mulheres com Propósito)**, fundado em 2012 pela missionária Jordania Nargiz. O projeto foi desenvolvido em **React** com **Vite**, utilizando **Firebase** para o gerenciamento dinâmico de conteúdos (como séries de mensagens e encontros locais) através de um painel administrativo seguro.
O design do site foi estruturado com uma estética premium e minimalista, utilizando paletas de cores quentes e terrosas (beges, tons de rosa e marrons dourados) para transmitir acolhimento e sofisticação.
---
## 🚀 Funcionalidades Principais
*   **Página Inicial (Home):**
    *   Apresentação do movimento e dos pastores fundadores (com vídeo institucional integrado).
    *   **Encontros Locais:** Visualização de encontros mensais com modais detalhados ("Saiba Mais") contendo informações de agenda, foto/nome da líder local e uma galeria interativa de encontros com funcionalidade de **Lightbox** (zoom ao clicar).
*   **PINK Mais Perto (PMP):** Apresentação do livro *"Você não está sozinha"*, manual do método e formulário/direcionamento para mentorias.
*   **PINK APOIO:** Página dedicada ao desenvolvimento de líderes e equipes de recepção, mídias e intercessão.
*   **PINK HOME:** Informações e agendamento de encontros residenciais íntimos para amigas e vizinhas.
*   **Conferência PINK LOVE:** Detalhes da conferência anual de Junho com lista de alvos de fé e galeria de teasers.
*   **Séries de Mensagens:** Página com paginação dinâmica/carregamento para séries criadas no painel.
*   **Loja:** Catálogo de produtos oficiais (camisetas, livros, copos térmicos) com detalhes de meios de pagamento.
*   **Contato:** Links rápidos integrados para WhatsApp, Instagram, Facebook e YouTube.
*   **Painel Admin (`/admin`):** Área restrita para gerenciamento em tempo real de séries (criar, editar, deletar e destacar) e agendas de encontros.
---
## 🛠️ Tecnologias Utilizadas
*   **Frontend:** React.js (Hooks, Contexts) + Vite (Build rápido)
*   **Estilização:** Vanilla CSS (CSS Variables customizadas para o design system)
*   **Roteamento:** React Router DOM
*   **Banco de Dados:** Firebase Firestore (persistência de séries e encontros)
*   **Autenticação:** Firebase Auth (acesso restrito ao painel admin)
*   **Ícones e Mídia:** SVG Customizados e player nativo de vídeo otimizado
---
## 💻 Como Executar o Projeto Localmente
### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
### 1. Clonar o repositório
```bash
git clone https://github.com/francati-lucas/PINK.git
cd pink-website
```
### 2. Instalar dependências
```bash
npm install
```
### 3. Configurar variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto com as credenciais do seu Firebase:
```env
VITE_FIREBASE_API_KEY=sua_api_key
VITE_FIREBASE_AUTH_DOMAIN=seu_auth_domain
VITE_FIREBASE_PROJECT_ID=seu_project_id
VITE_FIREBASE_STORAGE_BUCKET=seu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
VITE_FIREBASE_APP_ID=seu_app_id
```
### 4. Executar em modo de desenvolvimento
```bash
npm run dev
```
O projeto estará disponível no endereço `http://localhost:5173/`.
### 5. Compilar para produção (Build)
```bash
npm run build
```
Os arquivos otimizados para deploy serão gerados na pasta `/dist`.