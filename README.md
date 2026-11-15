# 🥖 Padaria Pão Dourado — Site institucional

Site de uma padaria feito com **HTML, CSS e JavaScript puros** (sem frameworks), pensado para **atrair clientes** e **receber pedidos pelo WhatsApp**.

🔗 **Veja online:** https://moacirnascimento439.github.io/site-padaria/

## ✨ Funcionalidades

- 📱 **Responsivo**: funciona no celular, tablet e computador (com menu "hambúrguer" no celular)
- 🟢 **Aberto / Fechado em tempo real**: o site lê o horário e mostra se a padaria está aberta
- 🍞 **Cardápio com filtros**: Pães, Doces, Salgados e Bebidas
- 🛒 **Carrinho de pedidos**: adicionar, aumentar/diminuir quantidade, total automático
- 💾 **Carrinho salvo**: se o cliente fechar a página, o pedido continua lá (localStorage)
- 💬 **Pedido pelo WhatsApp**: o pedido vira uma mensagem pronta no WhatsApp da padaria
- ✅ **Formulário com validação**: avisa o cliente se faltou preencher algo
- 🎞️ **Animações**: elementos aparecem ao rolar, números contam de 0 até o valor, emojis flutuam

## 🛠️ Tecnologias

| Tecnologia | Para que serve aqui |
|---|---|
| HTML5 | Estrutura e conteúdo da página |
| CSS3 | Visual: cores, layout (Flexbox e Grid), animações, responsividade |
| JavaScript | Interatividade: carrinho, filtros, validação, WhatsApp |
| GitHub Pages | Hospedagem gratuita do site |

## 📁 Estrutura

```
site-padaria/
├── index.html   → o "esqueleto": todo o conteúdo da página
├── style.css    → a "roupa": cores, tamanhos, posições e animações
├── script.js    → o "cérebro": tudo que reage ao clique do usuário
└── README.md    → este arquivo de explicação
```

---

# 📚 Entendendo o código (guia para estudar e reaproveitar)

A ideia é simples: **HTML diz O QUE existe**, **CSS diz COMO fica**, **JavaScript diz O QUE ACONTECE**.

## 1. index.html — a estrutura

O arquivo é dividido em blocos, cada um marcado com um comentário `<!-- ===== NOME ===== -->`:

| Bloco | Tag | O que é |
|---|---|---|
| Cabeçalho | `<header>` | Logo + menu + botão do carrinho |
| Hero | `<section id="inicio">` | Primeira tela, com título chamativo e botões |
| Diferenciais | `<section class="diferenciais">` | 3 cartões com os pontos fortes |
| Sobre | `<section id="sobre">` | História da padaria + números animados |
| Cardápio | `<section id="cardapio">` | Botões de filtro + lista de produtos |
| Depoimentos | `<section id="depoimentos">` | Avaliações de clientes |
| Contato | `<section id="contato">` | Endereço, horário e formulário |
| Rodapé | `<footer>` | Direitos autorais com ano automático |
| Carrinho | `<aside id="carrinho">` | Painel que desliza da direita |

**Conceitos importantes:**

- **`id`** é um nome único. Serve para o JavaScript achar o elemento (`document.getElementById('menu')`) e para os links do menu pularem até a seção (`href="#cardapio"` vai até `id="cardapio"`).
- **`class`** é um "apelido" que vários elementos podem ter. Serve para o CSS estilizar. Ex.: todo elemento com `class="revelar"` ganha a animação de aparecer.
- **`data-algo`** guarda uma informação extra para o JavaScript ler. Ex.: `<button data-filtro="doces">` → no JS, `botao.dataset.filtro` vale `"doces"`.
- **Os produtos não estão no HTML!** A `<div id="listaProdutos">` começa vazia e o JavaScript cria os cards. Assim, para mudar o cardápio, você mexe só numa lista no JS.
- O `<script src="script.js">` fica **no final do body** para o HTML carregar antes do JavaScript tentar usá-lo.

## 2. style.css — o visual

O CSS está numerado em 14 partes. As mais importantes para aprender:

### Variáveis (`:root`)
```css
:root {
  --dourado: #e0a43a;
}
.botao { background: var(--dourado); }
```
Você define a cor **uma vez** e usa em todo lugar. Quer mudar a identidade visual? Troque só as variáveis do topo.

### Nomes das classes
Uso um padrão simples inspirado em **BEM**:
- `.hero` → o bloco
- `.hero__texto` → uma parte dentro do bloco (dois underlines)
- `.botao--principal` → uma variação do bloco (dois hífens)

Isso deixa claro, só de ler o nome, onde aquele estilo é usado.

### Layout com Flexbox e Grid
- **Flexbox** (`display: flex`) → organiza itens **em uma linha** (ex.: o menu).
- **Grid** (`display: grid`) → organiza em **linhas e colunas** (ex.: os cards).

O truque mais útil do projeto:
```css
.produtos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}
```
Lê-se: *"crie quantas colunas couberem, cada uma com no mínimo 240px"*. Resultado: 4 colunas no computador, 1 no celular — **sem nenhuma media query**.

### O "liga/desliga" com classes
Este é o padrão que mais se repete no site:
```css
.carrinho        { transform: translateX(100%); } /* escondido à direita */
.carrinho.aberto { transform: translateX(0); }    /* visível */
```
O CSS define os **dois estados** e o JavaScript só **adiciona ou remove a classe** `aberto`. A `transition` faz a mudança ficar suave. O mesmo vale para o menu (`.aberto`), o cabeçalho (`.rolado`), o aviso (`.mostrar`) e as animações (`.visivel`).

### Animações (`@keyframes`)
```css
@keyframes flutuar {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-18px); }
}
```
Descreve o movimento do começo ao fim; depois é só usar `animation: flutuar 4s infinite`.

### Responsividade (`@media`)
```css
@media (max-width: 768px) { ... }
```
Tudo dentro só vale para telas de até 768px. É aqui que o menu vira hambúrguer e as colunas viram uma só.

## 3. script.js — a interatividade

O arquivo começa com as **configurações** (o que você mais vai querer mudar) e depois tem 7 partes.

### Configurações
```js
const WHATSAPP = '5511999999999';
const produtos = [
  { id: 1, nome: 'Pão Francês', descricao: '...', preco: 0.90, categoria: 'paes', emoji: '🥖' },
  ...
];
```
- Troque o número pelo WhatsApp real (55 + DDD + número).
- Cada produto é um **objeto** `{ }` dentro de uma **lista** `[ ]`. Para adicionar um produto, copie uma linha e mude os valores.

### Funções auxiliares
- `formatarPreco(8.5)` → `"R$ 8,50"` (usa `toLocaleString`, que já formata no padrão brasileiro).
- `mostrarAviso(texto)` → mostra o balãozinho embaixo e some depois de 2 segundos (`setTimeout`).
- `abrirWhatsApp(mensagem)` → abre `https://wa.me/NUMERO?text=MENSAGEM`. O `encodeURIComponent` converte espaços e acentos para um formato que cabe em um link.

### Parte 1 — Menu
```js
window.addEventListener('scroll', () => {
  header.classList.toggle('rolado', window.scrollY > 50);
});
```
`addEventListener` = "quando acontecer X, faça Y". Aqui: quando rolar a página, se desceu mais de 50px, liga a classe `rolado` (fundo branco no menu).
`classList.toggle('classe', condicao)` liga a classe se a condição for verdadeira e desliga se for falsa.

### Parte 2 — Aberto / Fechado
`new Date()` pega a data e hora do computador do cliente. `getDay()` dá o dia (0 = domingo) e `getHours()` a hora. Com um `if` simples (escrito como operador ternário `condicao ? a : b`), o site decide qual mensagem mostrar.

### Parte 3 — Cardápio e filtros
```js
const filtrados = produtos.filter((p) => p.categoria === categoria);
listaProdutos.innerHTML = filtrados.map((p) => `<article>...${p.nome}...</article>`).join('');
```
- **`filter`** → cria uma nova lista só com os itens que passam no teste.
- **`map`** → transforma cada produto em um pedaço de HTML.
- **`join('')`** → junta tudo em um texto só.
- **Template string** (crase `` ` ``) → permite colocar variáveis no texto com `${...}`.

**Delegação de eventos:** em vez de colocar um "ouvinte" em cada botão "Adicionar", coloco **um só** na lista inteira e descubro qual botão foi clicado com `evento.target.closest('button[data-id]')`. Funciona mesmo para botões criados depois.

### Parte 4 — Carrinho
O carrinho é só uma lista: `[{ id: 4, quantidade: 1 }, { id: 5, quantidade: 2 }]`.

- **`adicionarAoCarrinho(id)`** → se o produto já está na lista (`find`), soma 1; se não, adiciona (`push`).
- **`mudarQuantidade(id, +1 ou -1)`** → se chegar a 0, remove o item (`filter`).
- **`atualizarCarrinho()`** → redesenha o painel, calcula o total e salva. **Toda mudança chama essa função** — esse padrão "muda os dados → redesenha a tela" é a base de frameworks como React.
- **`localStorage`** → memória do navegador. `JSON.stringify` transforma a lista em texto para salvar; `JSON.parse` transforma de volta ao carregar. Está dentro de `try/catch` para não quebrar o site se o navegador bloquear o armazenamento.
- **Finalizar pedido** → monta uma mensagem com cada item e o total e chama `abrirWhatsApp`.

### Parte 5 — Formulário
- `evento.preventDefault()` impede o comportamento padrão (recarregar a página).
- `validarCampo(...)` verifica uma condição; se falhar, pinta a borda de vermelho e escreve o erro embaixo.
- `.trim()` remove espaços do começo e do fim (para "     " não contar como nome).

### Parte 6 — Animações ao rolar
```js
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) entrada.target.classList.add('visivel');
  });
});
```
O `IntersectionObserver` "vigia" elementos e avisa quando eles entram na tela. Aí é só ligar a classe `visivel` e o CSS faz a animação.

Os contadores usam `requestAnimationFrame`, que roda uma função a cada quadro da tela (~60 vezes por segundo), aumentando o número aos poucos até chegar ao valor de `data-alvo`.

### Parte 7 — Ano automático
`new Date().getFullYear()` → o rodapé nunca fica com o ano desatualizado.

---

## 🔁 Como reaproveitar em outros projetos

| Quero... | Onde mexer |
|---|---|
| Mudar cores | Variáveis no topo do `style.css` |
| Mudar produtos/preços | Lista `produtos` no topo do `script.js` |
| Mudar o WhatsApp | Constante `WHATSAPP` no `script.js` |
| Mudar horário de funcionamento | Texto no `index.html` + função `atualizarStatus()` |
| Usar fotos reais | Troque `${p.emoji}` por `<img src="img/${p.id}.jpg" alt="${p.nome}">` e crie a pasta `img/` |
| Fazer site de outro negócio | Mantenha a estrutura e troque textos, cores e produtos (serve para pizzaria, cafeteria, loja...) |

**Padrões que valem para qualquer projeto:**
1. Dados em uma lista no JS → HTML gerado com `map`.
2. CSS com dois estados + JS que só liga/desliga classes.
3. Uma função `atualizar...()` que redesenha a tela sempre que os dados mudam.
4. Variáveis CSS para manter o visual consistente.

## ▶️ Como rodar no seu computador

Não precisa instalar nada: baixe o projeto e dê dois cliques no `index.html`.

```bash
git clone https://github.com/moacirnascimento439/site-padaria.git
```

---

Feito com 💛 por [moacirnascimento439](https://github.com/moacirnascimento439)
