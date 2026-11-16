# 📘 Guia de Estudo — Site da Panificadora Brasil

> Um passo a passo de **tudo** o que foi feito no site, do zero até a publicação, para você estudar frontend e usar como base em outros sites.

**Site no ar:** https://moacirnascimento439.github.io/site-padaria/
**Código:** https://github.com/moacirnascimento439/site-padaria

---

## 🗺️ Sumário

0. [Como estudar com este guia](#0-como-estudar-com-este-guia)
1. [Fundamentos: como um site funciona](#1-fundamentos-como-um-site-funciona)
2. [Etapa 1 — Planejar antes de programar](#2-etapa-1--planejar-antes-de-programar)
3. [Etapa 2 — HTML: a estrutura](#3-etapa-2--html-a-estrutura)
4. [Etapa 3 — CSS: o visual](#4-etapa-3--css-o-visual)
5. [Etapa 4 — JavaScript: a interatividade](#5-etapa-4--javascript-a-interatividade)
6. [Etapa 5 — Testar](#6-etapa-5--testar)
7. [Etapa 6 — Git, GitHub e publicação](#7-etapa-6--git-github-e-publicação)
8. [Histórico: como o site evoluiu](#8-histórico-como-o-site-evoluiu)
9. [Receitas prontas para reaproveitar](#9-receitas-prontas-para-reaproveitar)
10. [Exercícios práticos](#10-exercícios-práticos)
11. [Glossário](#11-glossário)
12. [Próximos passos](#12-próximos-passos)

---

## 0. Como estudar com este guia

1. **Abra o código ao lado deste guia** (no VS Code, de preferência). Cada parte aqui aponta para um trecho real do projeto.
2. **Leia, depois mude algo e veja o que acontece.** Trocar uma cor, apagar uma linha, mudar um número: quebrar e consertar é a forma mais rápida de aprender.
3. **Faça os exercícios da seção 10** na ordem. Eles vão do mais fácil ao mais difícil.
4. Não tente decorar. Entenda **a ideia** de cada parte; a sintaxe você consulta quando precisar (todo programador faz isso).

### Ferramentas recomendadas (todas gratuitas)

| Ferramenta | Para quê |
|---|---|
| **VS Code** | Editor de código |
| Extensão **Live Server** (VS Code) | Abre o site e recarrega sozinho quando você salva |
| **Google Chrome** ou Edge | Navegador com ótimas ferramentas de desenvolvedor |
| **DevTools** (tecla `F12` no navegador) | Inspecionar elementos, ver erros, simular celular |
| **Git** | Controle de versões |
| Conta no **GitHub** | Guardar o código e publicar o site |

---

## 1. Fundamentos: como um site funciona

Quando alguém abre o site, o navegador baixa 3 tipos de arquivo e junta tudo:

```
┌─────────────┐   ┌─────────────┐   ┌─────────────┐
│  index.html │ + │  style.css  │ + │  script.js  │  =  🌐 site
│  ESTRUTURA  │   │   VISUAL    │   │   AÇÕES     │
│ "o que tem" │   │ "como fica" │   │"o que faz"  │
└─────────────┘   └─────────────┘   └─────────────┘
```

Uma analogia com uma casa:
- **HTML** = paredes, portas e cômodos (a estrutura)
- **CSS** = pintura, móveis e decoração (a aparência)
- **JavaScript** = eletricidade e encanamento (o que funciona quando você aperta um botão)

### Estrutura de pastas do projeto

```
site-padaria/
├── index.html        → a página (o navegador sempre procura um arquivo com esse nome)
├── style.css         → estilos
├── script.js         → interatividade
├── img/              → fotos
│   ├── LEIA-ME.md    → lista dos nomes de foto que o site procura
│   └── produtos/     → fotos dos produtos (1.jpg, 2.jpg...)
├── README.md         → apresentação do projeto no GitHub
└── GUIA-DE-ESTUDO.md → este guia
```

**Regra de ouro:** cada arquivo tem uma responsabilidade. Não misture CSS dentro do HTML nem HTML gigante dentro do JS sem necessidade. Isso deixa o projeto fácil de manter.

---

## 2. Etapa 1 — Planejar antes de programar

Antes de escrever uma linha de código, foram respondidas 3 perguntas:

**1. Qual é o objetivo do site?**
Atrair clientes e facilitar pedidos.

**2. O que o cliente precisa encontrar?**
- O que a padaria vende e quanto custa → **Cardápio**
- Se está aberta agora → **Status aberto/fechado**
- Onde fica e como falar com ela → **Contato, mapa, WhatsApp**
- Se é confiável → **Sobre / história / galeria**

**3. Qual a ação principal que queremos que ele faça?**
Fazer um pedido pelo WhatsApp. Por isso o WhatsApp aparece em **4 lugares**: carrinho, formulário, contato e botão flutuante.

Daí saiu a lista de seções, de cima para baixo:

```
┌────────────────────────────────┐
│ Cabeçalho (logo + menu)        │ ← sempre visível
├────────────────────────────────┤
│ Hero (título grande + botões)  │ ← primeira impressão
│ Diferenciais (3 cartões)       │
│ Sobre (história + números)     │
│ Cardápio (filtros + produtos)  │ ← onde o cliente compra
│ Galeria (fotos)                │
│ Contato (dados + mapa + form)  │
├────────────────────────────────┤
│ Rodapé                         │
└────────────────────────────────┘
  + Carrinho (painel lateral)
  + Botão do WhatsApp (flutuante)
  + Botão "voltar ao topo"
```

> 💡 **Dica para seus próximos sites:** desenhe essa lista num papel antes de começar. Quase todo site de pequeno negócio (pizzaria, salão, oficina, loja) segue essa mesma ordem.

---

## 3. Etapa 2 — HTML: a estrutura

### 3.1 O esqueleto básico

Todo arquivo HTML começa assim:

```html
<!DOCTYPE html>            <!-- avisa que é HTML moderno (HTML5) -->
<html lang="pt-BR">        <!-- idioma: ajuda o Google e leitores de tela -->
<head>
  <!-- informações SOBRE a página (não aparecem na tela) -->
</head>
<body>
  <!-- tudo que APARECE na tela -->
</body>
</html>
```

### 3.2 O `<head>` explicado linha a linha

```html
<meta charset="UTF-8">
```
Permite acentos e emojis (ç, ã, 🥖). Sem isso, aparecem símbolos estranhos.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
**Essencial para celular.** Sem essa linha, o celular mostra o site "encolhido" como se fosse um computador.

```html
<title>Panificadora Brasil | Jacobina-BA</title>
<meta name="description" content="Panificadora Brasil em Jacobina-BA: pães quentinhos...">
```
O título aparece na aba do navegador e no Google. A descrição é o textinho que aparece embaixo do link no Google. Isso é **SEO** (otimização para buscadores).

```html
<link rel="icon" href="data:image/svg+xml,<svg ...><text ...>🥖</text></svg>">
```
O ícone da aba (favicon). Truque: em vez de um arquivo de imagem, usamos um emoji dentro de um SVG escrito direto no código.

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display...&family=Poppins..." rel="stylesheet">
```
Carrega duas fontes do Google Fonts: **Playfair Display** (elegante, para títulos) e **Poppins** (limpa, para textos). Combinar uma fonte "com personalidade" nos títulos com uma fonte simples nos textos é uma regra clássica de design.

```html
<link rel="stylesheet" href="style.css">
```
Liga o arquivo CSS à página.

### 3.3 HTML semântico: usar a tag certa

Em vez de usar `<div>` para tudo, usamos tags que **dizem o que o conteúdo é**:

| Tag | Significado | Onde usamos |
|---|---|---|
| `<header>` | Cabeçalho | Logo + menu |
| `<nav>` | Navegação | Links do menu |
| `<main>` | Conteúdo principal | Envolve todas as seções |
| `<section>` | Uma seção temática | Hero, Sobre, Cardápio... |
| `<article>` | Item independente | Cada card de produto |
| `<figure>` + `<figcaption>` | Imagem com legenda | Fotos da galeria |
| `<aside>` | Conteúdo à parte | Painel do carrinho |
| `<footer>` | Rodapé | Fim da página |
| `<form>`, `<label>`, `<input>`, `<textarea>` | Formulário | Contato |

**Por que isso importa?** O Google entende melhor o site, leitores de tela (usados por pessoas cegas) navegam melhor, e o código fica mais fácil de ler.

### 3.4 Os três tipos de "etiqueta": `id`, `class` e `data-*`

Esse é um dos conceitos mais importantes do projeto:

```html
<section class="cardapio secao" id="cardapio">
<button class="filtro" data-filtro="doces">Doces</button>
```

| Atributo | Regra | Usado por | Exemplo no projeto |
|---|---|---|---|
| `id` | **Único** na página | JavaScript e links `#` | `id="cardapio"` |
| `class` | Pode **repetir** | CSS (estilo) | `class="botao botao--principal"` |
| `data-*` | Informação extra | JavaScript | `data-filtro="doces"` |

- Um link `href="#cardapio"` rola a página até o elemento com `id="cardapio"`. É assim que o menu funciona **sem nenhum JavaScript**.
- Um elemento pode ter **várias classes** separadas por espaço: `class="cardapio secao"` recebe o estilo de `.cardapio` **e** de `.secao`.
- No JavaScript, `data-filtro="doces"` vira `botao.dataset.filtro`, que vale `"doces"`.

### 3.5 Seção por seção

#### Cabeçalho
```html
<header class="header" id="header">
  <div class="container header__conteudo">
    <a href="#inicio" class="logo">🥖 Panificadora <span>Brasil</span></a>
    <button class="menu-botao" id="menuBotao" aria-label="Abrir menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <nav class="menu" id="menu"> ...links... </nav>
  </div>
</header>
```
- O `<span>` dentro do logo existe só para pintar "Brasil" de outra cor no CSS.
- O botão "hambúrguer" tem **3 `<span>` vazios**: cada um vira uma das 3 linhas (☰). No CSS elas viram um "X" quando o menu abre.
- `aria-label` dá um nome ao botão para leitores de tela (o botão não tem texto visível). `aria-expanded` diz se o menu está aberto. Isso é **acessibilidade**.

#### Hero (a primeira tela)
```html
<p class="status" id="statusLoja">Verificando horário...</p>
<h1>O cheirinho de pão quente que <span>abraça</span> o seu dia</h1>
```
- O texto do `status` é **trocado pelo JavaScript** (aberto/fechado). O HTML só tem um texto provisório.
- Só existe **um `<h1>` por página**: é o título principal. As seções usam `<h2>` e os cards `<h3>`. Essa hierarquia é importante para SEO.

#### Foto com "plano B" (emoji se a foto não existir)
```html
<div class="hero__circulo">
  <span aria-hidden="true">🥐</span>
  <img src="img/fachada.jpg" alt="Fachada da Panificadora Brasil" onerror="this.remove()">
</div>
```
- `alt` descreve a imagem (aparece se ela não carregar e é lido por leitores de tela).
- `onerror="this.remove()"`: se o arquivo não existir, o navegador dispara o evento de erro e a imagem se remove. O emoji que estava **embaixo** dela aparece.
- `aria-hidden="true"` esconde o emoji dos leitores de tela (é só decoração).

#### Números animados
```html
<strong class="contador" data-alvo="2016">0</strong>
<strong class="contador" data-desde="2016-01-05" data-sufixo=" anos">0</strong>
```
O HTML começa com `0`. O JavaScript lê `data-alvo` (até onde contar), `data-sufixo` (texto depois do número) e `data-desde` (data para calcular os anos).

#### Cardápio vazio de propósito
```html
<div class="produtos" id="listaProdutos"></div>
```
Os produtos **não estão no HTML**. O JavaScript cria os cards a partir de uma lista. Vantagem: para mudar o cardápio, você edita só uma lista, e não 12 blocos de HTML.

#### Mapa do Google
```html
<iframe class="mapa"
  src="https://maps.google.com/maps?q=Rua%20Jo%C3%A3o%20Teixeira%2C%20Peru%2C%20Jacobina%20-%20BA&z=16&output=embed"
  title="Mapa da Panificadora Brasil" loading="lazy"></iframe>
```
- `<iframe>` = uma "janela" que mostra outro site dentro do seu.
- `q=` é o endereço (com espaços e acentos codificados: `%20` é espaço, `%C3%A3` é "ã"). `z=16` é o zoom. `output=embed` deixa o mapa pronto para incorporar.
- `loading="lazy"` só carrega o mapa quando o usuário rola até ele, o que deixa o site mais rápido.

#### Links especiais
```html
<a href="tel:+557436224747">(74) 3622-4747</a>                 <!-- no celular, liga -->
<a href="https://wa.me/557436224747" target="_blank" rel="noopener">WhatsApp</a>
```
- `tel:` abre o discador do celular.
- `wa.me/NUMERO` abre uma conversa no WhatsApp. O número leva **55 (Brasil) + DDD + número**, só dígitos.
- `target="_blank"` abre em nova aba; `rel="noopener"` é uma proteção de segurança que sempre acompanha o `_blank`.

#### Formulário
```html
<form class="formulario" id="formContato" novalidate>
  <label for="nome">Seu nome</label>
  <input type="text" id="nome" placeholder="Ex.: Maria Silva">
  <small class="erro" id="erroNome"></small>
  ...
  <button type="submit">Enviar pelo WhatsApp</button>
</form>
```
- `<label for="nome">` liga o texto ao campo com `id="nome"`: clicar no texto foca o campo.
- `placeholder` é o texto cinza de exemplo.
- `<small class="erro">` começa vazio; o JavaScript escreve a mensagem de erro ali.
- `novalidate` desliga as mensagens automáticas do navegador, porque fizemos as nossas.

#### O `<script>` no final
```html
  <script src="script.js"></script>
</body>
```
Fica **no final** para que todo o HTML já exista quando o JavaScript rodar. Se ficasse no `<head>`, o `document.getElementById('menu')` não encontraria nada.

---

## 4. Etapa 3 — CSS: o visual

### 4.1 Como uma regra CSS funciona

```css
.botao {              /* SELETOR: quem vai receber o estilo */
  padding: 14px 30px; /* PROPRIEDADE: VALOR; */
  border-radius: 50px;
}
```

Seletores usados no projeto:

| Seletor | Pega | Exemplo |
|---|---|---|
| `.classe` | Elementos com a classe | `.botao` |
| `#id` | O elemento com o id | (evitamos no CSS; usamos classes) |
| `tag` | Todas as tags | `body`, `a`, `h1` |
| `.pai .filho` | Filho dentro do pai | `.logo span` |
| `.a.b` | Elemento com as duas classes | `.carrinho.aberto` |
| `:hover` | Quando o mouse passa | `.botao:hover` |
| `:focus` | Campo selecionado | `input:focus` |
| `::after` | Elemento "fantasma" criado pelo CSS | `.menu a::after` |
| `:nth-child(2)` | O 2º filho | Linhas do hambúrguer |

### 4.2 Organização do arquivo

O `style.css` está dividido em 14 blocos numerados, na **mesma ordem das seções do HTML**:

```
1. Variáveis   2. Reset   3. Classes reutilizáveis   4. Cabeçalho
5. Hero   6. Diferenciais   7. Sobre   8. Cardápio   9. Galeria
10. Contato   11. Rodapé   12. Carrinho   13. Aviso/botões flutuantes
14. Responsividade
```
Assim você sempre sabe onde procurar.

### 4.3 Variáveis CSS

```css
:root {
  --marrom: #5c3a1e;
  --dourado: #e0a43a;
  --creme: #fff8ee;
  --sombra: 0 10px 30px rgba(92, 58, 30, 0.12);
  --raio: 16px;
}

.botao--principal { background: var(--dourado); }
```
Você define **uma vez** e usa em todo lugar com `var(--nome)`. Para fazer o site de uma pizzaria vermelha, por exemplo, basta trocar as cores aqui em cima.

> 🎨 **Paleta usada:** marrom e dourado lembram pão assado e café; creme dá sensação de aconchego. Escolher cores ligadas ao negócio ajuda o cliente a "sentir" a marca.

### 4.4 Reset e box-sizing

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
- Navegadores colocam margens padrão diferentes; zeramos tudo para ter controle.
- `box-sizing: border-box` faz o `padding` ficar **dentro** da largura. Sem isso, uma caixa de `width: 300px` com `padding: 20px` teria 340px. Com isso, continua com 300px. Use **sempre**.

### 4.5 O Box Model (modelo de caixa)

Todo elemento é uma caixa com camadas:

```
┌───────────── margin (espaço FORA) ─────────────┐
│ ┌─────────── border (borda) ─────────────────┐ │
│ │ ┌───────── padding (espaço DENTRO) ──────┐ │ │
│ │ │            conteúdo                    │ │ │
│ │ └────────────────────────────────────────┘ │ │
│ └────────────────────────────────────────────┘ │
└────────────────────────────────────────────────┘
```

### 4.6 Unidades de medida

| Unidade | O que é | Exemplo |
|---|---|---|
| `px` | Pixels fixos | `border-radius: 16px` |
| `rem` | Relativa ao tamanho da fonte base (normalmente 16px) | `font-size: 2.4rem` = 38,4px |
| `%` | Porcentagem do pai | `width: 100%` |
| `vh` | % da altura da tela | `min-height: 100vh` (hero ocupa a tela toda) |
| `fr` | Fração do espaço livre (só no Grid) | `1fr 1fr` = duas colunas iguais |

### 4.7 A classe `.container`

```css
.container {
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
  padding: 0 20px;
}
```
Limita a largura do conteúdo em telas grandes e centraliza (`margin: 0 auto`). O `padding` lateral evita que o texto encoste na borda do celular. Quase todo site usa algo assim.

### 4.8 Flexbox — organizar em uma linha

```css
.header__conteudo {
  display: flex;
  align-items: center;            /* alinha na vertical */
  justify-content: space-between; /* logo na esquerda, menu na direita */
}
.menu { display: flex; gap: 28px; } /* gap = espaço entre os itens */
```

```
justify-content: space-between
┌──────────────────────────────────────────┐
│ [Logo]                    [Menu][Menu]   │
└──────────────────────────────────────────┘
```

Use Flexbox quando os itens estão **em uma direção** (linha ou coluna).

### 4.9 Grid — organizar em linhas e colunas

```css
.hero__conteudo {
  display: grid;
  grid-template-columns: 1.1fr 1fr; /* 2 colunas, a 1ª um pouco maior */
  gap: 40px;
}
```

**O truque mais útil do projeto** (grade que se adapta sozinha):
```css
.produtos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
}
```
Lê-se: *"crie quantas colunas couberem, cada uma com no mínimo 240px e dividindo o espaço que sobrar"*.
- Computador (1150px) → 4 colunas
- Tablet → 2 ou 3 colunas
- Celular → 1 coluna

Tudo isso **sem media query**.

### 4.10 Centralizar qualquer coisa

```css
.hero__circulo {
  display: grid;
  place-items: center; /* centraliza na horizontal E na vertical */
}
```
Duas linhas. Guarde essa.

### 4.11 Posicionamento (`position`)

| Valor | Comportamento | Onde usamos |
|---|---|---|
| `static` | Padrão, segue o fluxo | Quase tudo |
| `relative` | Segue o fluxo e vira "referência" para filhos `absolute` | `.hero__circulo`, `.foto` |
| `absolute` | Sai do fluxo e se posiciona em relação ao pai `relative` | Foto por cima do emoji, contador do carrinho |
| `fixed` | Preso na tela, mesmo rolando | Cabeçalho, carrinho, botão do WhatsApp |

**Padrão "foto por cima do emoji":**
```css
.foto { position: relative; overflow: hidden; }
.foto img {
  position: absolute;
  inset: 0;           /* = top: 0; right: 0; bottom: 0; left: 0 */
  width: 100%;
  height: 100%;
  object-fit: cover;  /* preenche sem distorcer (corta o excesso) */
}
```

`z-index` decide quem fica na frente quando elementos se sobrepõem (maior = mais na frente). No projeto: botão do WhatsApp (60) < cabeçalho (100) < fundo escuro (200) < carrinho (300) < aviso (400).

### 4.12 O padrão mais importante: estados com classes

O CSS define **dois estados**, e o JavaScript só troca a classe:

```css
.carrinho {
  transform: translateX(100%);       /* estado 1: fora da tela, à direita */
  transition: transform 0.35s ease;  /* a mudança acontece em 0,35s, suave */
}
.carrinho.aberto {
  transform: translateX(0);          /* estado 2: na tela */
}
```
```js
painelCarrinho.classList.toggle('aberto', true); // JS só liga a classe
```

Esse mesmo padrão aparece em **todo o site**:

| Elemento | Classe | Efeito |
|---|---|---|
| Cabeçalho | `.rolado` | Ganha fundo branco e sombra ao rolar |
| Menu do celular | `.aberto` | Desce do topo |
| Hambúrguer | `.ativo` | Vira um "X" |
| Carrinho | `.aberto` | Desliza da direita |
| Fundo escuro | `.aberto` | Aparece atrás do carrinho |
| Aviso | `.mostrar` | Sobe da parte de baixo |
| Botão topo | `.mostrar` | Aparece depois de rolar 500px |
| Seções | `.visivel` | Aparecem com animação ao rolar |
| Campo do form | `.invalido` | Borda vermelha |
| Filtro | `.ativo` | Fica dourado |

> 💡 **Por que é bom?** O JavaScript não precisa saber cores, tamanhos nem animações. Quer mudar a animação? Mexe só no CSS.

### 4.13 Transições e animações

**Transição** = de um estado para outro, quando algo muda (hover, classe):
```css
.botao { transition: transform 0.2s; }
.botao:hover { transform: translateY(-3px); } /* sobe 3px ao passar o mouse */
```

**Animação** = movimento que roda sozinho, definido com `@keyframes`:
```css
@keyframes flutuar {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-18px); }
}
.flutuante { animation: flutuar 4s ease-in-out infinite; }
.f2 { animation-delay: 1s; } /* começa 1s depois, para não andarem juntos */
```

Animações do projeto: `flutuar` (emojis do hero), `surgir` (cards do cardápio ao filtrar), `pulsar` (onda do botão do WhatsApp).

**Animar com `transform` e `opacity`** é o mais leve para o navegador. Evite animar `width`, `height`, `top`...

### 4.14 Pseudo-elemento `::after` — a linha embaixo do menu

```css
.menu a { position: relative; }
.menu a::after {
  content: '';           /* obrigatório, mesmo vazio */
  position: absolute;
  left: 0; bottom: -4px;
  width: 0;              /* começa sem largura */
  height: 2px;
  background: var(--dourado);
  transition: width 0.3s;
}
.menu a:hover::after { width: 100%; } /* cresce ao passar o mouse */
```
O `::after` cria um elemento "de mentira" sem precisar mexer no HTML.

### 4.15 Nomes de classes no padrão BEM

```
.hero              → BLOCO
.hero__texto       → ELEMENTO (parte do bloco)       → dois underlines
.botao--principal  → MODIFICADOR (variação do bloco) → dois hífens
```
Só de ler `.carrinho__rodape` você já sabe que é o rodapé do carrinho. Isso evita conflitos de nomes em projetos grandes.

### 4.16 Responsividade (media queries)

```css
@media (max-width: 768px) {
  /* só vale em telas de ATÉ 768px de largura */
  .menu-botao { display: flex; }   /* mostra o hambúrguer */
  .menu { flex-direction: column; transform: translateY(-100%); }
  .whatsapp-flutuante__texto { display: none; } /* no celular, só o ícone */
}
```

Pontos de quebra usados:
- **900px** → layouts de 2 colunas (hero, sobre, contato) viram 1 coluna
- **768px** → menu vira hambúrguer, diferenciais empilham

**Um bug real que corrigimos:** no celular, a página estava "vazando" para o lado (436px numa tela de 390px). A causa: os campos do formulário dentro de uma coluna `1fr` do Grid não encolhiam. A correção:
```css
grid-template-columns: minmax(0, 1fr); /* deixa a coluna encolher de verdade */
.formulario input, .formulario textarea { width: 100%; }
```
> 💡 Se um dia seu site tiver rolagem horizontal no celular, desconfie de um item do Grid ou Flex que não está encolhendo.

### 4.17 Detalhes que fazem diferença

```css
html {
  scroll-behavior: smooth;  /* rolagem suave ao clicar no menu */
  scroll-padding-top: 80px; /* a seção não fica escondida atrás do menu fixo */
}
```
```css
border-radius: 40% 60% 55% 45% / 50% 40% 60% 50%; /* formato "orgânico" da imagem do Sobre */
background: radial-gradient(circle at 80% 40%, var(--dourado-claro) 0%, var(--creme) 55%); /* brilho no hero */
pointer-events: none; /* elemento invisível não bloqueia cliques */
```

---

## 5. Etapa 4 — JavaScript: a interatividade

### 5.1 O ciclo básico de quase todo código JS

```
1. ACHAR o elemento   →  document.getElementById('menuBotao')
2. ESPERAR um evento  →  .addEventListener('click', ...)
3. FAZER algo         →  menu.classList.toggle('aberto')
```

### 5.2 Organização do `script.js`

```
CONFIGURAÇÕES (WhatsApp e lista de produtos)  ← o que você mais vai mudar
FUNÇÕES AUXILIARES (formatar preço, aviso, WhatsApp)
1. Menu
2. Status aberto/fechado
3. Cardápio e filtros
4. Carrinho
5. Formulário
6. Animações ao rolar
7. Ano no rodapé
```

### 5.3 Variáveis: `const` e `let`

```js
const WHATSAPP = '557436224747'; // const: não será reatribuída
let carrinho = [];               // let: será trocada por outra lista depois
```
Regra prática: **use `const` sempre**; troque para `let` só quando precisar reatribuir. (Nunca use `var`, é a forma antiga.)

### 5.4 Dados: arrays e objetos

```js
const produtos = [   // [ ] = ARRAY (lista)
  { id: 1, nome: 'Pão Francês', preco: 0.90, categoria: 'paes', emoji: '🥖' }, // { } = OBJETO
  { id: 4, nome: 'Bolo de Cenoura', preco: 32.00, categoria: 'doces', emoji: '🍰' },
];

produtos[0].nome     // 'Pão Francês'  (posição 0 = primeiro item)
produtos.length      // quantidade de itens
```
Objeto = uma "ficha" com campos (`nome`, `preco`...). Array = uma lista de fichas.

### 5.5 Funções

```js
function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
formatarPreco(8.5); // "R$ 8,50"
```
Uma função é um bloco de código com nome, que recebe dados (parâmetros) e pode devolver um resultado (`return`). **Se você escreve o mesmo código duas vezes, transforme-o em função.** Por isso existe `abrirWhatsApp()`, usada pelo carrinho e pelo formulário.

**Arrow function** (forma curta, muito usada em eventos):
```js
() => alternarCarrinho(true)
(p) => p.categoria === 'doces'
```

### 5.6 Selecionar elementos

```js
document.getElementById('menu')              // um elemento pelo id
document.querySelector('.filtro.ativo')      // o PRIMEIRO que bate com o seletor CSS
document.querySelectorAll('.revelar')        // TODOS que batem (lista)
elemento.closest('.filtro')                  // sobe na árvore até achar um pai que bate
```

### 5.7 Eventos

```js
menuBotao.addEventListener('click', () => { ... });           // clique
window.addEventListener('scroll', () => { ... });             // rolagem
form.addEventListener('submit', (evento) => { ... });         // envio de formulário
```
Eventos usados: `click`, `scroll`, `submit`, além do `onerror` das imagens.

### 5.8 Mexer em classes e textos

```js
el.classList.add('visivel');
el.classList.remove('aberto');
el.classList.toggle('rolado', window.scrollY > 50); // liga se true, desliga se false

el.textContent = 'Novo texto';   // troca o texto (seguro)
el.innerHTML = '<li>...</li>';   // troca o HTML de dentro
el.setAttribute('aria-expanded', true);
el.dataset.filtro                // lê data-filtro="..."
```

### 5.9 Parte 1 — Menu

```js
window.addEventListener('scroll', () => {
  header.classList.toggle('rolado', window.scrollY > 50);
  botaoTopo.classList.toggle('mostrar', window.scrollY > 500);
});
```
`window.scrollY` = quantos pixels a página já rolou.

```js
menuBotao.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto'); // toggle devolve true/false
  menuBotao.classList.toggle('ativo', aberto);
  menuBotao.setAttribute('aria-expanded', aberto);
});
```
Também fechamos o menu ao clicar num link (`forEach` passa por cada link) e ao abrir o carrinho.

### 5.10 Parte 2 — Aberto / Fechado

```js
const HORARIOS = [
  null,                   // 0 domingo: fechado
  [6 * 60, 20 * 60 + 30], // 1 segunda: 360 a 1230 minutos (06:00 às 20:30)
  ...
  [6 * 60, 15 * 60],      // 6 sábado: 06:00 às 15:00
];
```
**Ideia-chave:** transformar horas em **minutos desde a meia-noite**. Assim, comparar "20:30" vira comparar números (`1230`), o que é bem mais fácil.

```js
const agora = new Date();
const dia = agora.getDay();                                   // 0 a 6
const minutos = agora.getHours() * 60 + agora.getMinutes();   // ex.: 14:15 → 855
const horarioHoje = HORARIOS[dia];
const aberto = horarioHoje !== null && minutos >= horarioHoje[0] && minutos < horarioHoje[1];
```
- `&&` = "E" (todas as condições precisam ser verdadeiras).
- Depois, um `if / else if / else` escolhe a frase: aberto, "abrimos hoje", "abrimos segunda" ou "abrimos amanhã".
- `setInterval(atualizarStatus, 60 * 1000)` repete a verificação a cada 60 segundos.

> ⚠️ `new Date()` usa o relógio **do aparelho do visitante**. Para clientes de Jacobina, está perfeito.

### 5.11 Parte 3 — Cardápio: `filter`, `map` e template strings

```js
function mostrarProdutos(categoria) {
  const filtrados = categoria === 'todos'
    ? produtos
    : produtos.filter((p) => p.categoria === categoria);

  listaProdutos.innerHTML = filtrados.map((p) => `
    <article class="produto">
      <h3>${p.nome}</h3>
      <span class="produto__preco">${formatarPreco(p.preco)}</span>
      <button data-id="${p.id}">Adicionar</button>
    </article>
  `).join('');
}
```

Passo a passo:
1. **Operador ternário** `condição ? A : B` → um `if/else` em uma linha.
2. **`filter`** → nova lista só com os itens que passam no teste.
3. **`map`** → transforma cada produto em um texto de HTML.
4. **Template string** (crase `` ` ``) → texto de várias linhas que aceita variáveis com `${...}`.
5. **`join('')`** → junta a lista de textos em um texto só.
6. **`innerHTML`** → coloca esse HTML dentro da `<div>`.

```
produtos (12 objetos) ──filter──▶ 3 doces ──map──▶ 3 textos HTML ──join──▶ 1 texto ──▶ tela
```

#### Delegação de eventos

```js
listaProdutos.addEventListener('click', (evento) => {
  const botao = evento.target.closest('button[data-id]');
  if (botao) adicionarAoCarrinho(Number(botao.dataset.id));
});
```
Em vez de colocar um "ouvinte" em cada um dos 12 botões, colocamos **um só** na lista. Quando algo é clicado, `evento.target` diz o que foi clicado e `closest` encontra o botão. Vantagem: funciona até para botões criados depois (como os que aparecem ao trocar de filtro).

> `Number('4')` transforma o texto `"4"` em número `4`. Tudo que vem de `dataset` é texto!

### 5.12 Parte 4 — Carrinho: estado + renderização

O carrinho é só uma lista simples:
```js
carrinho = [ { id: 4, quantidade: 1 }, { id: 5, quantidade: 2 } ];
```
Guardamos só o `id` e a quantidade. Nome, preço e emoji são buscados na lista `produtos` com `find`. Assim, se o preço mudar, o carrinho já usa o novo preço.

```js
function adicionarAoCarrinho(id) {
  const itemExistente = carrinho.find((item) => item.id === id); // find: o 1º que bate (ou undefined)
  if (itemExistente) {
    itemExistente.quantidade++;            // ++ soma 1
  } else {
    carrinho.push({ id, quantidade: 1 });  // push: adiciona no fim da lista
  }
  atualizarCarrinho();
}
```

```js
function mudarQuantidade(id, mudanca) {
  const item = carrinho.find((i) => i.id === id);
  item.quantidade += mudanca;                       // +1 ou -1
  if (item.quantidade <= 0) {
    carrinho = carrinho.filter((i) => i.id !== id); // remove o item
  }
  atualizarCarrinho();
}
```

#### ⭐ O padrão "estado → renderizar"

```
  usuário clica  ──▶  muda os DADOS (carrinho)  ──▶  atualizarCarrinho()  ──▶  tela redesenhada
```
**Toda** mudança chama `atualizarCarrinho()`, que:
1. Redesenha a lista de itens com `map`
2. Calcula o total e a quantidade
3. Atualiza o número do ícone 🛒
4. Salva no navegador

Você nunca "remenda" a tela; sempre redesenha a partir dos dados. **Essa é exatamente a ideia do React, Vue e Angular.** Entendendo isso, aprender um framework fica muito mais fácil.

#### localStorage — memória do navegador

```js
// salvar: lista → texto
localStorage.setItem('carrinhoPadaria', JSON.stringify(carrinho));

// carregar: texto → lista (ou lista vazia se não houver nada)
carrinho = JSON.parse(localStorage.getItem('carrinhoPadaria')) || [];
```
- O `localStorage` só guarda **texto**. `JSON.stringify` converte a lista em texto e `JSON.parse` faz o caminho de volta.
- `|| []` → "se não tiver nada, use lista vazia".
- Fica dentro de `try { } catch { }`: se o navegador bloquear (modo anônimo, por exemplo), o site não quebra.

#### Montar a mensagem do WhatsApp

```js
const linhas = carrinho.map((item) => {
  const p = produtos.find((prod) => prod.id === item.id);
  return `• ${item.quantidade}x ${p.nome} — ${formatarPreco(p.preco * item.quantidade)}`;
});
const mensagem = `Olá, Panificadora Brasil! Gostaria de fazer um pedido:\n\n${linhas.join('\n')}\n\nTotal: ...`;
```
`\n` = quebra de linha. Resultado no WhatsApp:
```
Olá, Panificadora Brasil! Gostaria de fazer um pedido:

• 1x Bolo de Cenoura — R$ 32,00
• 2x Cupcake — R$ 14,00

Total: R$ 46,00
```

```js
function abrirWhatsApp(mensagem) {
  const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}
```
`encodeURIComponent` converte espaços, acentos e quebras de linha para um formato que cabe num link.

### 5.13 Parte 5 — Formulário com validação

```js
form.addEventListener('submit', (evento) => {
  evento.preventDefault();  // impede o comportamento padrão (recarregar a página)
  let valido = true;

  validarCampo(nome, 'erroNome', nome.value.trim().length >= 3, 'Digite seu nome (mínimo 3 letras).');
  validarCampo(mensagem, 'erroMensagem', mensagem.value.trim().length >= 10, 'Escreva uma mensagem um pouco maior.');

  if (!valido) return;      // se algo falhou, para aqui
  abrirWhatsApp(...);
  evento.target.reset();    // limpa o formulário
});
```
- `.value` → o que o usuário digitou.
- `.trim()` → remove espaços do começo e do fim (para "   " não contar como nome).
- `.length` → quantidade de caracteres.
- `return` dentro de uma função → sai dela na hora.
- `validarCampo` é uma função pequena que **evita repetir** o mesmo código para cada campo.

### 5.14 Parte 6 — Animações ao rolar

#### IntersectionObserver
```js
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {               // entrou na tela?
      entrada.target.classList.add('visivel');  // CSS faz a animação
      observador.unobserve(entrada.target);     // para de vigiar (anima só 1 vez)
    }
  });
}, { threshold: 0.15 });                        // dispara com 15% do elemento visível

document.querySelectorAll('.revelar').forEach((el) => observador.observe(el));
```
É um "vigia" que avisa quando um elemento aparece na tela. É bem mais leve que ficar checando a posição a cada rolagem.

#### Contador animado com requestAnimationFrame
```js
const inicio = performance.now();
function passo(agora) {
  const progresso = Math.min((agora - inicio) / duracao, 1); // de 0 a 1
  elemento.textContent = Math.floor(progresso * alvo) + sufixo;
  if (progresso < 1) requestAnimationFrame(passo);           // chama de novo no próximo quadro
}
requestAnimationFrame(passo);
```
- `requestAnimationFrame` roda a função a cada quadro da tela (~60 vezes por segundo).
- `progresso` vai de 0 a 1 em 1,5 segundo; multiplicado pelo alvo, o número sobe de 0 até 2016.
- `Math.floor` arredonda para baixo; `Math.min(x, 1)` garante que não passe de 1.

#### Anos de história calculados sozinhos
```js
const [ano, mes, dia] = '2016-01-05'.split('-').map(Number); // [2016, 1, 5]
let anos = hoje.getFullYear() - ano;
const jaFezAniversario = hoje.getMonth() + 1 > mes ||
  (hoje.getMonth() + 1 === mes && hoje.getDate() >= dia);
if (!jaFezAniversario) anos--;
```
- `split('-')` quebra o texto em partes; `.map(Number)` converte cada parte em número.
- `const [a, b, c] = lista` é **desestruturação**: tira os itens da lista direto para variáveis.
- ⚠️ `getMonth()` começa em **0** (janeiro = 0), por isso o `+ 1`. Essa pegadinha confunde todo mundo.
- `||` = "OU".

### 5.15 Parte 7 — Ano automático
```js
document.getElementById('ano').textContent = new Date().getFullYear();
```
O rodapé nunca fica com o ano desatualizado.

---

## 6. Etapa 5 — Testar

O que foi testado em cada versão:

| Teste | Como fazer você mesmo |
|---|---|
| Visual no computador | Abrir o site normalmente |
| Visual no celular | `F12` → ícone de celular (📱) no topo do DevTools → escolher "iPhone" |
| Erros de JavaScript | `F12` → aba **Console** (erros aparecem em vermelho) |
| Rolagem horizontal no celular | No modo celular, tentar arrastar a página para o lado; não deve mexer |
| Carrinho | Adicionar 1 bolo e 2 cupcakes → total deve ser R$ 46,00 |
| Filtros | Clicar em cada categoria |
| Formulário | Enviar vazio (deve dar erro) e preenchido (abre o WhatsApp) |
| Fotos | Colocar uma foto de teste em `img/galeria-1.jpg` e ver se cobre o emoji |
| Status | Mudar o relógio do computador ou testar em horários diferentes |

> 💡 No DevTools, aba **Elements**, você pode clicar em qualquer parte do site e mudar o CSS ao vivo. É a melhor forma de experimentar.

> ℹ️ No Console aparecem avisos "Failed to load resource" para as fotos que ainda não existem. Isso é esperado: o `onerror` trata o caso e mostra o emoji.

---

## 7. Etapa 6 — Git, GitHub e publicação

### 7.1 Conceitos

- **Git** → programa que guarda o histórico do projeto (como um "salvar" com descrição, que permite voltar no tempo).
- **Commit** → uma "foto" do projeto num momento, com uma mensagem explicando o que mudou.
- **GitHub** → site que guarda seus repositórios na nuvem (e funciona como portfólio).
- **Repositório (repo)** → a pasta do projeto com todo o histórico.
- **Branch `main`** → a linha principal do projeto.
- **Push** → enviar seus commits para o GitHub.

### 7.2 Comandos usados, na ordem

```bash
git init -b main
```
Transforma a pasta em um repositório Git (só uma vez, no início).

```bash
git add -A
```
Prepara **todos** os arquivos alterados para o próximo commit.

```bash
git commit -m "Site da Padaria: HTML, CSS e JavaScript"
```
Cria o commit com uma mensagem.

```bash
git remote add origin https://github.com/moacirnascimento439/site-padaria
```
Conecta a pasta ao repositório do GitHub (só uma vez).

```bash
git push -u origin main
```
Envia para o GitHub. Nas próximas vezes, basta `git push`.

**Fluxo do dia a dia** (toda vez que mudar algo):
```bash
git add -A
```
```bash
git commit -m "Descreva o que mudou"
```
```bash
git push
```

Comandos úteis para consultar:
```bash
git status
```
```bash
git log --oneline
```

### 7.3 GitHub Pages (hospedagem grátis)

1. No repositório: **Settings → Pages**
2. **Source:** "Deploy from a branch"
3. **Branch:** `main` e pasta `/ (root)` → **Save**
4. Na aba **Actions** aparece "pages build and deployment". Quando ficar ✅, o site está em:
   `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`

> 🐞 **Problema real que tivemos:** erro **404**. A causa era o Pages ainda **desligado** (Branch em "None"). Depois de escolher `main` e salvar, funcionou. A partir daí, **cada `git push` atualiza o site sozinho** em 1 ou 2 minutos.

### 7.4 Boas mensagens de commit

✅ `Adiciona botão flutuante do WhatsApp`
✅ `Corrige estouro de largura no celular`
❌ `mudanças`
❌ `asdf`

Escreva como se completasse a frase *"Este commit..."*.

### 7.5 README.md
O `README.md` é a "vitrine" do repositório: aparece logo abaixo dos arquivos no GitHub. Um bom README tem: o que é o projeto, link do site, funcionalidades, tecnologias e como rodar. Recrutadores olham isso!

---

## 8. Histórico: como o site evoluiu

| Versão | O que mudou | O que dá para aprender |
|---|---|---|
| **1. Primeira versão** | Site genérico "Pão Dourado" com dados de exemplo | Montar a estrutura completa antes de ter os dados reais |
| **2. Correção mobile** | Estouro horizontal no celular corrigido com `minmax(0, 1fr)` | Testar no celular **sempre** |
| **3. Publicação** | Repositório criado, push e GitHub Pages ligado | O 404 vinha do Pages desligado |
| **4. Dados reais** | Nome, endereço, telefone e horários reais; botão do WhatsApp; mapa; galeria; fotos com plano B; depoimentos fictícios removidos | Separar **dados** de **código** facilita trocar tudo |
| **5. Inauguração** | 05/01/2016; "anos de história" calculados automaticamente | Calcular valores em vez de escrever "10 anos" fixo, para o site não ficar desatualizado |

> 💡 Sobre os depoimentos: num site de um negócio real, **não use avaliações inventadas**. Isso engana os clientes. Use depoimentos reais (com permissão) ou um link para as avaliações do Google.

---

## 9. Receitas prontas para reaproveitar

### Botão flutuante do WhatsApp
```html
<a class="whatsapp-flutuante" href="https://wa.me/55DDDNUMERO" target="_blank" rel="noopener">💬</a>
```
```css
.whatsapp-flutuante {
  position: fixed; bottom: 24px; right: 24px;
  width: 60px; height: 60px; border-radius: 50%;
  background: #25d366; display: grid; place-items: center;
}
```

### Painel que abre e fecha (menu, carrinho, modal)
```css
.painel        { transform: translateX(100%); transition: transform .3s; }
.painel.aberto { transform: translateX(0); }
```
```js
botao.addEventListener('click', () => painel.classList.toggle('aberto'));
```

### Lista de dados → cards na tela
```js
const itens = [{ nome: 'A', preco: 10 }, { nome: 'B', preco: 20 }];
container.innerHTML = itens.map((i) => `<div class="card">${i.nome} — ${i.preco}</div>`).join('');
```

### Filtro por categoria
```js
const filtrados = itens.filter((i) => i.categoria === categoriaEscolhida);
```

### Aparecer ao rolar
```css
.revelar         { opacity: 0; transform: translateY(40px); transition: .8s; }
.revelar.visivel { opacity: 1; transform: none; }
```
```js
const obs = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) e.target.classList.add('visivel');
}));
document.querySelectorAll('.revelar').forEach((el) => obs.observe(el));
```

### Salvar e carregar do navegador
```js
localStorage.setItem('chave', JSON.stringify(dados));
const dados = JSON.parse(localStorage.getItem('chave')) || [];
```

### Formatar dinheiro em reais
```js
valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
```

### Grade responsiva sem media query
```css
.grade { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 24px; }
```

### Imagem com "plano B"
```html
<div class="caixa"><span>🖼️</span><img src="foto.jpg" alt="..." onerror="this.remove()"></div>
```

---

## 10. Exercícios práticos

Faça na ordem. Cada um usa algo explicado acima.

### 🟢 Fácil
1. Troque a cor `--dourado` por um vermelho (`#c0392b`) e veja o site inteiro mudar.
2. Adicione um produto novo na lista `produtos` (ex.: "Rosca de Coco", categoria `doces`).
3. Mude o texto do título principal (`<h1>`).
4. Troque a fonte dos títulos no Google Fonts por outra (ex.: "Lobster").
5. Mude a duração da animação `flutuar` de `4s` para `2s`.

### 🟡 Médio
6. Crie uma nova categoria de filtro, "Lanches": um botão novo no HTML + produtos com `categoria: 'lanches'`.
7. Adicione um botão **"Limpar pedido"** no carrinho que esvazia a lista (`carrinho = []`) e chama `atualizarCarrinho()`.
8. Adicione um campo **"Telefone"** no formulário, com validação de no mínimo 10 dígitos.
9. Crie uma seção **"Promoção do dia"** com um card de destaque, reaproveitando as classes existentes.
10. Mostre a **quantidade de cada produto** que já está no carrinho no próprio botão: "Adicionar (2)".

### 🔴 Desafio
11. Adicione **taxa de entrega** de R$ 5,00 no carrinho, grátis para pedidos acima de R$ 50,00.
12. Adicione um campo de **endereço de entrega** no carrinho e inclua na mensagem do WhatsApp.
13. Faça um **modo escuro** com um botão que troca as variáveis CSS (dica: uma classe `.escuro` no `<body>` redefinindo as variáveis).
14. Crie uma **barra de busca** que filtra os produtos pelo nome enquanto a pessoa digita (evento `input` + `filter` + `includes`).
15. **Projeto final:** copie a pasta e transforme o site em um site para outro negócio (pizzaria, barbearia, loja de roupas). Troque dados, cores, produtos e textos e publique no GitHub Pages.

---

## 11. Glossário

| Termo | Significado |
|---|---|
| **Frontend** | A parte do site que o usuário vê e usa (HTML, CSS, JS) |
| **DOM** | A "árvore" de elementos da página que o JavaScript consegue ler e alterar |
| **Tag** | Um elemento HTML: `<p>`, `<div>`, `<img>` |
| **Atributo** | Configuração de uma tag: `src`, `href`, `class`, `id` |
| **Seletor** | Como o CSS/JS encontra elementos: `.classe`, `#id` |
| **Responsivo** | Que se adapta a qualquer tamanho de tela |
| **Media query** | Regra CSS que só vale em certos tamanhos de tela |
| **Evento** | Algo que acontece (clique, rolagem, envio) e que o JS pode "ouvir" |
| **Callback** | Função passada para ser executada depois (ex.: dentro do `addEventListener`) |
| **Array** | Lista de valores `[ ]` |
| **Objeto** | Conjunto de campos `{ chave: valor }` |
| **Template string** | Texto com crase que aceita `${variáveis}` |
| **Estado** | Os dados atuais do app (ex.: o conteúdo do carrinho) |
| **Renderizar** | Desenhar na tela a partir dos dados |
| **localStorage** | Memória do navegador que sobrevive ao fechar a página |
| **JSON** | Formato de texto para representar dados |
| **SEO** | Técnicas para aparecer bem no Google |
| **Acessibilidade (a11y)** | Fazer o site funcionar para todos, inclusive pessoas com deficiência |
| **Deploy** | Publicar o site na internet |
| **Repositório** | Pasta de projeto com histórico no Git/GitHub |
| **Commit / Push** | Salvar uma versão / enviar para o GitHub |

---

## 12. Próximos passos

**Referências para consultar sempre:**
- **MDN Web Docs** (developer.mozilla.org/pt-BR): a "bíblia" do HTML, CSS e JS, em português
- **CSS-Tricks**: guias visuais de Flexbox e Grid ("A Complete Guide to Flexbox" / "to Grid")
- **Flexbox Froggy** e **Grid Garden**: joguinhos para treinar Flexbox e Grid
- **Can I Use** (caniuse.com): saber se um recurso funciona em todos os navegadores

**Trilha sugerida depois deste projeto:**
1. Fazer 2 ou 3 sites parecidos para outros negócios (fixar o básico)
2. Aprender **`fetch`** para buscar dados de APIs (ex.: um site de previsão do tempo)
3. Aprender **módulos JS** (`import` / `export`) para dividir o código em vários arquivos
4. Aprender **Git com branches** e **pull requests**
5. Aprender um framework: **React** (o padrão "estado → renderizar" você já conhece daqui!)

---

> 🥖 **Resumo em uma frase:** HTML organiza o conteúdo, CSS define os estados visuais, e o JavaScript guarda os dados, liga e desliga classes e redesenha a tela quando os dados mudam. Domine essas três ideias e você consegue construir quase qualquer site.

Bons estudos! 💛
