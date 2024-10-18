# Teste Técnico

## Linguagens, Frameworks e Libs utilizadas:

- React
- TypeScript
- TailwindCSS
- Framer Motion
- Axios
- React Query
- JSON Server
- @testing-library/react

### Instruções para Execução do Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/GuilhermeGomesti1/meep-shop-test.git
cd meep-shop-test
```

2. **Instale as dependências:**:

```bash
npm install
```

3. **Inicie o servidor JSON (em um terminal separado):**:

```bash
npm run server
```

O servidor será iniciado na porta 3001 e utilizará o arquivo db.json como base de dados.

4. **Inicie o front-end React**:

```bash
npm start
```

5. **Executar os testes:**:

```bash
npm test
```

### Simulação em Mobile:

https://github.com/user-attachments/assets/f3084156-7474-4820-a49d-e2a21c5b62ac

### Estrutura do Diretório

- **`public/`**: Contém arquivos estáticos e globais, incluindo imagens utilizadas na aplicação.
- **`src/`**: Contém o código-fonte da aplicação.
- **`components/`**: Componentes da aplicação.

  - **`cart-animation/`**: Componente de barra lateral que exibe as informações do carrinho ao adicionar um produto.

  - **`cart-summary/`**:Componente que exibe uma barra inferior com um resumo do carrinho, incluindo a lista de produtos, a quantidade total de itens e o preço total. Mostra uma mensagem quando o carrinho está vazio.

  - **`catalago-meep/`**: Componente que exibe o catalogo de produtos.

  - **`common/`**: Contém os componentes mais reutilizáveis.

    - **`buttons/`**:

      - `add-to-cart.tsx`: Componente que adiciona um produto ao carrinho com seus dados mais quantidade e observação especificadas.
      - `go-top.tsx/`: Componente que exibe um button para ir ao topo da tela após descer o catálogo em telas menores.
      - `order-submit-button.tsx/`: Componente de botão que finaliza o pedido ao enviar os produtos selecionados. Exibe feedback visual de carregamento, erro ou sucesso, e limpa o carrinho após o pedido ser enviado com sucesso.

    - **`icons/`**: Icons reutilizáveis.

    - **`quantity-input`**: Componente para ajustar a quantidade de um produto na página de carrinho. Atualiza automaticamente o total do preço baseado na quantidade selecionada através dos botões de increase e decrease refletindo as mudanças no contexto do carrinho.

    - **`quantity-products`**: Componente que permite selecionar e ajustar a quantidade de um item com botões de aumentar e diminuir. Dispara uma função de callback sempre que a quantidade é alterada, permitindo que o valor seja passado para o carrinho somente após ser enviado, em vez de refletir diretamente no carrinho pelos botões. Ele captura a quantidade e a envia para o mesmo.

  - **`header/`**: Componente de cabeçalho que exibe links de navegação e um ícone de carrinho com a quantidade de itens adicionados.

- **`context/`**:

  - `cart-contexts.tsx`: Contexto de carrinho que fornece acesso global às funções e estado do carrinho de compras, permitindo que componentes possam adicionar, remover e ajustar quantidades de produtos no carrinho. Utiliza useCart para manipular o estado e expõe suas funcionalidades através do CartContext.

- **`hooks`**:

  - `use-cart.ts`: Hook usado em cart-context que gerencia o estado do carrinho de compras. Permite adicionar, aumentar, diminuir, remover itens e limpar o carrinho, além de salvar os itens no localStorage para persistência.
  - `use-products.ts`: Hook customizado que busca a lista de produtos do serviço de API e gerencia o estado de carregamento.
    Utiliza React Query para otimizar as requisições.
  - `use-product-by-id.ts`: Hook que busca um produto específico pelo ID. Utiliza React Query para otimizar as requisições e habilita a chamada somente se um ID válido for fornecido.

- **`pages`**:

  - `cart`: Página do carrinho.
  - `home`: Página Home.
  - `product`: Página do produto.

- **`services/`**:

  - `order-service.ts`: Service responsável por enviar os dados do pedido para o servidor, utilizando uma requisição POST. Ele recebe uma estrutura de dados contendo os itens do pedido e trata a resposta do servidor, lançando erros adequados em caso de falha.
  - `product-service.ts`: Service responsável para buscar a lista de produtos API criada com JSON Server.

- **`App.tsx`**: Configura o roteamento da aplicação, integrando os providers de contexto para gerenciar o carrinho e os produtos.

- **`cart.test.tsx`**: Teste que veriica a funcionalidade do carrinho, assegurando que o preço total e a quantidade de produtos sejam calculados corretamente ao adicionar, aumentar, diminuir e remover itens.

- **`index.tsx`**: Configura a aplicação React, renderizando o componente principal e fornecendo a configuração de rotas usando o RouterProvider.

- **`types`**:

  - `cart-types.ts`: Define a estrutura e os types do contexto do carrinho de compras
  - `product.d.ts`:Define a estrutura e os tipos de um produto no sistema.

- **`db.json`**: Base de dados da API utilizada pelo JSON Server, lista os produtos e registra os pedidos feitos pelos usuários.
