# Sistema de Faturação de Fornecedores

Uma plataforma web moderna para gestão de faturas de fornecedores e transportadoras com design futurístico.

## 🚀 Funcionalidades

- ✅ Dashboard com estatísticas em tempo real
- ✅ Gestão completa de faturas
- ✅ Organização de fornecedores e transportadoras
- ✅ Upload de documentos por categoria
- ✅ Interface futurística com tema neon
- ✅ Design responsivo para todos os dispositivos
- ✅ Sistema de notificações
- ✅ Gestão de utilizadores

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes de UI
- **Vercel Blob** - Armazenamento de ficheiros
- **React Dropzone** - Upload de ficheiros
- **Lucide React** - Ícones

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- Conta Vercel (para upload de ficheiros)

## 🔧 Instalação e Configuração

### 1. Clonar o Projeto
\`\`\`bash
git clone <url-do-repositorio>
cd invoice-management-system
\`\`\`

### 2. Instalar Dependências
\`\`\`bash
npm install
# ou
yarn install
\`\`\`

### 3. Configurar Variáveis de Ambiente
Criar ficheiro `.env.local` na raiz do projeto:
\`\`\`env
BLOB_READ_WRITE_TOKEN=your_vercel_blob_token_here
\`\`\`

### 4. Executar em Desenvolvimento
\`\`\`bash
npm run dev
# ou
yarn dev
\`\`\`

O projeto estará disponível em `http://localhost:3000`

## 🌐 Deploy na Vercel

### 1. Fazer Push para GitHub
\`\`\`bash
git add .
git commit -m "Initial commit"
git push origin main
\`\`\`

### 2. Conectar à Vercel
1. Aceder a [vercel.com](https://vercel.com)
2. Fazer login e clicar em "New Project"
3. Importar o repositório do GitHub
4. Configurar as variáveis de ambiente
5. Fazer deploy

### 3. Configurar Vercel Blob
1. No dashboard da Vercel, ir ao projeto
2. Ir a "Storage" → "Create Database" → "Blob"
3. Copiar o token gerado
4. Adicionar como variável de ambiente `BLOB_READ_WRITE_TOKEN`

## 📁 Estrutura do Projeto

\`\`\`
├── app/                    # App Router do Next.js
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Dashboard
│   ├── invoices/          # Páginas de faturas
│   ├── suppliers/         # Páginas de fornecedores
│   ├── transporters/      # Páginas de transportadoras
│   ├── users/             # Páginas de utilizadores
│   ├── settings/          # Páginas de configurações
│   └── api/               # API routes
├── components/            # Componentes reutilizáveis
│   ├── ui/               # Componentes base (shadcn/ui)
│   └── ...               # Componentes customizados
├── lib/                  # Utilitários
└── public/               # Ficheiros estáticos
\`\`\`

## 🎨 Personalização do Tema

O tema futurístico pode ser personalizado editando:

- `tailwind.config.ts` - Cores e configurações
- `app/globals.css` - Estilos globais e animações
- Componentes individuais para ajustes específicos

## 📱 Funcionalidades Principais

### Dashboard
- Estatísticas de faturas, pagamentos e entidades
- Faturas recentes e pagamentos pendentes
- Interface com design futurístico

### Gestão de Faturas
- Criar, editar e visualizar faturas
- Upload de documentos por categoria:
  - Factura Fornecedor
  - Comprovativo Banco
  - Comprovativo PayPal
  - Factura Transportadora
  - Comprovativo Pagamento Transportadora

### Gestão de Entidades
- Fornecedores e transportadoras
- Informações de contacto completas
- Histórico de transações

## 🔒 Segurança

- Upload seguro de ficheiros via Vercel Blob
- Validação de tipos de ficheiro
- Sanitização de inputs
- Proteção contra XSS

## 🐛 Resolução de Problemas

### Erro de Upload de Ficheiros
- Verificar se `BLOB_READ_WRITE_TOKEN` está configurado
- Confirmar que o token tem permissões de leitura e escrita

### Problemas de Estilo
- Executar `npm run build` para verificar erros de build
- Verificar se todas as classes Tailwind estão corretas

### Problemas de Performance
- Otimizar imagens antes do upload
- Verificar tamanho dos ficheiros anexados

## 📞 Suporte

Para questões técnicas ou bugs, criar uma issue no repositório do projeto.

## 📄 Licença

Este projeto está sob licença MIT. Ver ficheiro LICENSE para mais detalhes.
\`\`\`

Agora vamos criar um arquivo .env.example:
