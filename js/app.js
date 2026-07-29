const lista = document.getElementById("listaProdutos");

let carrinho = [];

async function carregarProdutos() {

    const resposta = await fetch("data/produtos.json");

    const produtos = await resposta.json();

    lista.innerHTML = "";

    produtos.forEach(produto => {

        lista.innerHTML += `

        <div class="produto">

            <img src="${produto.imagem}" alt="${produto.nome}">

            <h3>${produto.nome}</h3>

            <p class="preco">

                ${produto.preco.toLocaleString('pt-BR',{
                    style:'currency',
                    currency:'BRL'
                })}

            </p>

            <button onclick="comprar(${produto.id})">

                Comprar

            </button>

        </div>

        `;

    });

    window.produtos = produtos;

}

function comprar(id){

    const produto = window.produtos.find(p=>p.id===id);

    carrinho.push(produto);

    document.getElementById("cartCount").innerText = carrinho.length;

    salvarCarrinho();

    alert(produto.nome + " adicionado ao carrinho.");

}

function salvarCarrinho(){

    localStorage.setItem(

        "carrinho",

        JSON.stringify(carrinho)

    );

}

function carregarCarrinho(){

    const dados = localStorage.getItem("carrinho");

    if(dados){

        carrinho = JSON.parse(dados);

        document.getElementById("cartCount").innerText = carrinho.length;

    }

}

carregarCarrinho();

carregarProdutos();