/* =========================================================
   CONFIGURAÇÕES — troque pelos dados reais da padaria
   ========================================================= */
// Número do WhatsApp com código do país (55) + DDD + número, só dígitos
const WHATSAPP = '557436224747'; // (74) 3622-4747

// Lista de produtos. Para adicionar um novo, copie uma linha e mude os dados.
// ⚠️ Os preços abaixo são EXEMPLOS: confira e troque pelos preços reais.
// FOTO: salve a foto do produto como img/produtos/ID.jpg (ex.: img/produtos/1.jpg
// para o Pão Francês). Sem foto, o site mostra o emoji.
const produtos = [
  { id: 1,  nome: 'Pão Francês',       descricao: 'Crocante por fora, macio por dentro (unid.).', preco: 0.90,  categoria: 'paes',     emoji: '🥖' },
  { id: 2,  nome: 'Pão de Fermentação Natural', descricao: 'Massa madre, 24h de fermentação.', preco: 18.00, categoria: 'paes',     emoji: '🍞' },
  { id: 3,  nome: 'Croissant',         descricao: 'Folhado na manteiga, receita francesa.',   preco: 8.50,  categoria: 'paes',     emoji: '🥐' },
  { id: 4,  nome: 'Bolo de Cenoura',   descricao: 'Com cobertura generosa de chocolate.',     preco: 32.00, categoria: 'doces',    emoji: '🍰' },
  { id: 5,  nome: 'Cupcake',           descricao: 'Baunilha com chantilly de morango.',       preco: 7.00,  categoria: 'doces',    emoji: '🧁' },
  { id: 6,  nome: 'Sonho',             descricao: 'Recheado com creme de baunilha.',          preco: 6.50,  categoria: 'doces',    emoji: '🍩' },
  { id: 7,  nome: 'Pão de Queijo',     descricao: 'Mineiro de verdade, porção com 10.',       preco: 12.00, categoria: 'salgados', emoji: '🧀' },
  { id: 8,  nome: 'Coxinha',           descricao: 'Frango com catupiry, massa leve.',         preco: 7.50,  categoria: 'salgados', emoji: '🍗' },
  { id: 9,  nome: 'Misto Quente',      descricao: 'Presunto e queijo no pão de forma.',       preco: 9.00,  categoria: 'salgados', emoji: '🥪' },
  { id: 10, nome: 'Café Coado',        descricao: 'Grãos especiais torrados na semana.',      preco: 5.00,  categoria: 'bebidas',  emoji: '☕' },
  { id: 11, nome: 'Suco Natural',      descricao: 'Laranja espremida na hora (300 ml).',      preco: 8.00,  categoria: 'bebidas',  emoji: '🍊' },
  { id: 12, nome: 'Chocolate Quente',  descricao: 'Cremoso, com canela por cima.',            preco: 9.50,  categoria: 'bebidas',  emoji: '🍫' },
];

/* =========================================================
   FUNÇÕES AUXILIARES
   ========================================================= */
// Transforma 8.5 em "R$ 8,50"
function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Mostra uma mensagem rápida na parte de baixo da tela
function mostrarAviso(texto) {
  const aviso = document.getElementById('aviso');
  aviso.textContent = texto;
  aviso.classList.add('mostrar');
  setTimeout(() => aviso.classList.remove('mostrar'), 2000); // some após 2s
}

// Abre o WhatsApp com uma mensagem pronta
function abrirWhatsApp(mensagem) {
  const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}

/* =========================================================
   1. MENU: fundo ao rolar + menu do celular
   ========================================================= */
const header = document.getElementById('header');
const menu = document.getElementById('menu');
const menuBotao = document.getElementById('menuBotao');
const botaoTopo = document.getElementById('botaoTopo');

window.addEventListener('scroll', () => {
  const rolou = window.scrollY > 50;
  header.classList.toggle('rolado', rolou);            // menu ganha fundo branco
  botaoTopo.classList.toggle('mostrar', window.scrollY > 500); // mostra botão "topo"
});

menuBotao.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  menuBotao.classList.toggle('ativo', aberto);
  menuBotao.setAttribute('aria-expanded', aberto);
});

// Fecha o menu do celular ao clicar em um link
menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('aberto');
    menuBotao.classList.remove('ativo');
  });
});

botaoTopo.addEventListener('click', () => window.scrollTo({ top: 0 }));

/* =========================================================
   2. STATUS "ABERTO / FECHADO" pelo horário atual
   ========================================================= */
// Horários em minutos desde a meia-noite (6:00 = 6*60 = 360).
// Índice = dia da semana: 0 = domingo, 1 = segunda ... 6 = sábado. null = fechado.
const HORARIOS = [
  null,               // domingo: fechado
  [6 * 60, 20 * 60 + 30], // segunda: 06:00 às 20:30
  [6 * 60, 20 * 60 + 30], // terça
  [6 * 60, 20 * 60 + 30], // quarta
  [6 * 60, 20 * 60 + 30], // quinta
  [6 * 60, 20 * 60 + 30], // sexta
  [6 * 60, 15 * 60],      // sábado: 06:00 às 15:00
];

function atualizarStatus() {
  const agora = new Date();
  const dia = agora.getDay();
  const minutos = agora.getHours() * 60 + agora.getMinutes();
  const horarioHoje = HORARIOS[dia];

  // Está aberto se hoje tem horário e agora está entre a abertura e o fechamento
  const aberto = horarioHoje !== null && minutos >= horarioHoje[0] && minutos < horarioHoje[1];

  let texto;
  if (aberto) {
    texto = '🟢 Aberto agora — venha buscar!';
  } else if (horarioHoje !== null && minutos < horarioHoje[0]) {
    texto = '🔴 Fechado agora — abrimos hoje às 6h!';
  } else if (dia === 6 || dia === 0) {
    texto = '🔴 Fechado agora — abrimos segunda às 6h!'; // sábado à tarde ou domingo
  } else {
    texto = '🔴 Fechado agora — abrimos amanhã às 6h!';
  }

  const status = document.getElementById('statusLoja');
  status.textContent = texto;
  status.className = 'status ' + (aberto ? 'aberto' : 'fechado');
}
atualizarStatus();
setInterval(atualizarStatus, 60 * 1000); // confere de novo a cada minuto

/* =========================================================
   3. CARDÁPIO: criar os cards e filtrar por categoria
   ========================================================= */
const listaProdutos = document.getElementById('listaProdutos');

function mostrarProdutos(categoria) {
  // Se for "todos", usa a lista inteira; senão, só os da categoria
  const filtrados = categoria === 'todos'
    ? produtos
    : produtos.filter((p) => p.categoria === categoria);

  // Monta o HTML de cada card e junta tudo
  listaProdutos.innerHTML = filtrados.map((p) => `
    <article class="produto">
      <div class="produto__emoji">
        ${p.emoji}
        <img src="img/produtos/${p.id}.jpg" alt="${p.nome}" onerror="this.remove()">
      </div>
      <h3>${p.nome}</h3>
      <p>${p.descricao}</p>
      <span class="produto__preco">${formatarPreco(p.preco)}</span>
      <button class="botao botao--principal" data-id="${p.id}">Adicionar</button>
    </article>
  `).join('');
}

// Clique nos botões de filtro
document.getElementById('filtros').addEventListener('click', (evento) => {
  const botao = evento.target.closest('.filtro');
  if (!botao) return; // clicou fora de um botão

  document.querySelector('.filtro.ativo').classList.remove('ativo');
  botao.classList.add('ativo');
  mostrarProdutos(botao.dataset.filtro);
});

// Clique em "Adicionar" (um único ouvinte para todos os cards)
listaProdutos.addEventListener('click', (evento) => {
  const botao = evento.target.closest('button[data-id]');
  if (botao) adicionarAoCarrinho(Number(botao.dataset.id));
});

mostrarProdutos('todos');

/* =========================================================
   4. CARRINHO: adicionar, alterar quantidade e salvar
   ========================================================= */
// Carrega o carrinho salvo no navegador (ou começa vazio)
let carrinho = [];
try {
  carrinho = JSON.parse(localStorage.getItem('carrinhoPadaria')) || [];
} catch (erro) {
  carrinho = [];
}

function salvarCarrinho() {
  try {
    localStorage.setItem('carrinhoPadaria', JSON.stringify(carrinho));
  } catch (erro) { /* navegador sem permissão para salvar: segue sem salvar */ }
}

function adicionarAoCarrinho(id) {
  const itemExistente = carrinho.find((item) => item.id === id);

  if (itemExistente) {
    itemExistente.quantidade++;         // já está no carrinho: soma 1
  } else {
    carrinho.push({ id, quantidade: 1 }); // novo item
  }

  const produto = produtos.find((p) => p.id === id);
  mostrarAviso(`${produto.emoji} ${produto.nome} adicionado!`);
  atualizarCarrinho();
}

function mudarQuantidade(id, mudanca) {
  const item = carrinho.find((i) => i.id === id);
  item.quantidade += mudanca;

  // Se chegou a zero, remove o item da lista
  if (item.quantidade <= 0) {
    carrinho = carrinho.filter((i) => i.id !== id);
  }
  atualizarCarrinho();
}

// Redesenha o carrinho na tela sempre que algo muda
function atualizarCarrinho() {
  const lista = document.getElementById('itensCarrinho');
  let total = 0;
  let quantidadeTotal = 0;

  if (carrinho.length === 0) {
    lista.innerHTML = '<li class="carrinho__vazio">Seu pedido está vazio 🥺<br>Escolha algo gostoso no cardápio!</li>';
  } else {
    lista.innerHTML = carrinho.map((item) => {
      const p = produtos.find((prod) => prod.id === item.id);
      total += p.preco * item.quantidade;
      quantidadeTotal += item.quantidade;
      return `
        <li class="carrinho__item">
          <span class="emoji">${p.emoji}</span>
          <div class="info">
            <strong>${p.nome}</strong><br>
            <small>${formatarPreco(p.preco)} cada</small>
          </div>
          <div class="quantidade">
            <button data-id="${p.id}" data-mudanca="-1" aria-label="Diminuir">−</button>
            <span>${item.quantidade}</span>
            <button data-id="${p.id}" data-mudanca="1" aria-label="Aumentar">+</button>
          </div>
        </li>`;
    }).join('');
  }

  document.getElementById('totalCarrinho').textContent = formatarPreco(total);
  document.getElementById('contadorCarrinho').textContent = quantidadeTotal;
  salvarCarrinho();
}

// Botões + e − dentro do carrinho
document.getElementById('itensCarrinho').addEventListener('click', (evento) => {
  const botao = evento.target.closest('button[data-mudanca]');
  if (botao) mudarQuantidade(Number(botao.dataset.id), Number(botao.dataset.mudanca));
});

// Abrir e fechar o painel do carrinho
const painelCarrinho = document.getElementById('carrinho');
const fundoCarrinho = document.getElementById('carrinhoFundo');

function alternarCarrinho(abrir) {
  painelCarrinho.classList.toggle('aberto', abrir);
  fundoCarrinho.classList.toggle('aberto', abrir);
  menu.classList.remove('aberto');      // fecha o menu do celular, se estiver aberto
  menuBotao.classList.remove('ativo');
}

document.getElementById('abrirCarrinho').addEventListener('click', () => alternarCarrinho(true));
document.getElementById('fecharCarrinho').addEventListener('click', () => alternarCarrinho(false));
fundoCarrinho.addEventListener('click', () => alternarCarrinho(false));

// Monta a mensagem do pedido e envia pelo WhatsApp
document.getElementById('finalizarPedido').addEventListener('click', () => {
  if (carrinho.length === 0) {
    mostrarAviso('Adicione pelo menos um produto 🙂');
    return;
  }

  let total = 0;
  const linhas = carrinho.map((item) => {
    const p = produtos.find((prod) => prod.id === item.id);
    total += p.preco * item.quantidade;
    return `• ${item.quantidade}x ${p.nome} — ${formatarPreco(p.preco * item.quantidade)}`;
  });

  const mensagem = `Olá, Panificadora Brasil! Gostaria de fazer um pedido:\n\n${linhas.join('\n')}\n\nTotal: ${formatarPreco(total)}`;
  abrirWhatsApp(mensagem);
});

atualizarCarrinho(); // desenha o carrinho ao abrir a página

/* =========================================================
   5. FORMULÁRIO DE CONTATO com validação
   ========================================================= */
document.getElementById('formContato').addEventListener('submit', (evento) => {
  evento.preventDefault(); // impede a página de recarregar

  const nome = document.getElementById('nome');
  const mensagem = document.getElementById('mensagem');
  let valido = true;

  // Função pequena para marcar/desmarcar erro em um campo
  function validarCampo(campo, idErro, condicao, textoErro) {
    const erro = document.getElementById(idErro);
    if (condicao) {
      campo.classList.remove('invalido');
      erro.textContent = '';
    } else {
      campo.classList.add('invalido');
      erro.textContent = textoErro;
      valido = false;
    }
  }

  validarCampo(nome, 'erroNome', nome.value.trim().length >= 3, 'Digite seu nome (mínimo 3 letras).');
  validarCampo(mensagem, 'erroMensagem', mensagem.value.trim().length >= 10, 'Escreva uma mensagem um pouco maior.');

  if (!valido) return;

  abrirWhatsApp(`Olá! Meu nome é ${nome.value.trim()}.\n\n${mensagem.value.trim()}`);
  evento.target.reset();
  mostrarAviso('Abrindo o WhatsApp... 📲');
});

/* =========================================================
   6. ANIMAÇÕES AO ROLAR A PÁGINA
   ========================================================= */
// IntersectionObserver "vigia" os elementos e avisa quando aparecem na tela
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visivel');
      observador.unobserve(entrada.target); // anima só uma vez
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.revelar').forEach((el) => observador.observe(el));

// Contadores: animam de 0 até o número quando aparecem na tela
const observadorNumeros = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (!entrada.isIntersecting) return;

    const elemento = entrada.target;
    const alvo = Number(elemento.dataset.alvo);
    const sufixo = elemento.dataset.sufixo || ''; // texto depois do número, ex.: "h"
    const duracao = 1500; // milissegundos
    const inicio = performance.now();

    function passo(agora) {
      const progresso = Math.min((agora - inicio) / duracao, 1); // de 0 a 1
      elemento.textContent = Math.floor(progresso * alvo) + sufixo;
      if (progresso < 1) requestAnimationFrame(passo);
    }
    requestAnimationFrame(passo);
    observadorNumeros.unobserve(elemento);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.contador').forEach((el) => observadorNumeros.observe(el));

/* =========================================================
   7. ANO AUTOMÁTICO NO RODAPÉ
   ========================================================= */
document.getElementById('ano').textContent = new Date().getFullYear();
