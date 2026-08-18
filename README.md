# 🥫 Minha Despensa

Aplicação para organizar e monitorar a validade de itens da despensa/geladeira, evitando desperdício de alimentos. Feita com HTML, CSS e JavaScript puro (sem frameworks).

> Projeto desenvolvido como forma de aprender e praticar HTML, CSS e JavaScript puro, sem frameworks ou bibliotecas.

## 📸 Screenshot

<img width="1920" height="905" alt="image" src="https://github.com/user-attachments/assets/619ace49-f09b-4ae6-80bb-f63080f51957" />

<img width="1920" height="741" alt="image" src="https://github.com/user-attachments/assets/93bec92d-bf68-4e5c-8f3b-2f9df62d18e0" />

<img width="1010" height="847" alt="image" src="https://github.com/user-attachments/assets/21591aeb-9b78-4c30-886d-70edfee0434d" />

## ✨ Funcionalidades

- **Cadastro de produtos** — nome, quantidade, categoria e data de validade
- **Cálculo automático de status** — o sistema identifica se o produto está **válido**, **perto de vencer** (até 7 dias) ou **urgente** (já vencido), com base na data de validade informada
- **Edição de produtos** — reabre o formulário já preenchido com os dados atuais, permitindo atualizar as informações sem duplicar linhas
- **Exclusão de produtos** — remove o item da tabela principal e dos cards de resumo
- **Busca por nome** — filtra os produtos da tabela em tempo real conforme a digitação
- **Filtro por categoria** — permite visualizar apenas os produtos de uma categoria específica (ou todos)
- **Cards de resumo** — visão rápida dos produtos vencidos, próximos do vencimento e válidos

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS, sem frameworks ou bibliotecas)

## 🚀 Como rodar o projeto

Não é necessário nenhuma instalação ou servidor. Basta:

1. Clonar o repositório
   ```bash
   git clone https://github.com/seu-usuario/minha-despensa.git
   ```
2. Abrir o arquivo `index.html` diretamente no navegador

## 📚 O que eu aprendi com este projeto

- Manipulação do DOM com JavaScript puro (`querySelector`, `createElement`, `appendChild`, `remove`)
- Criação e leitura de elementos dinamicamente a partir de dados de um formulário
- Uso de atributos `data-*` para guardar informações sem exibi-las visualmente
- Manipulação de datas (`Date`, cálculo de diferença de dias) para gerar status automáticos
- Boas práticas de organização de código e separação de responsabilidades (criar vs. editar)
- Estilização de tabelas, modais e elementos customizados com CSS

## 📌 Próximos passos (melhorias futuras)

- [ ] Mover produtos entre os cards de resumo automaticamente ao editar a validade
- [ ] Edição de quantidade e categoria refletida também nos cards
- [ ] Página de login/autenticação de usuário
 
---

Desenvolvido por Emanuele Ferreira 💛
