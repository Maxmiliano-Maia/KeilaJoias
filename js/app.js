const lista = document.getElementById("listaProdutos");

let carrinho =
JSON.parse(localStorage.getItem("carrinho")) || [];

function atualizarCarrinho(){

    const contador =
    document.getElementById("cartCount");

    if(contador){

        contador.innerText=carrinho.length;

    }

}

function salvarCarrinho(){

    localStorage.setItem(

        "carrinho",

        JSON.stringify(carrinho)

    );

}

function comprar(id){

    const produtos =
    JSON.parse(localStorage.getItem("produtos")) || [];

    const produto =
    produtos.find(p=>p.id==id);

    if(!produto) return;

    carrinho.push(produto);

    salvarCarrinho();

    atualizarCarrinho();

    alert("Produto adicionado ao carrinho.");

}

function carregarProdutos(){

    if(!lista) return;

    const produtos =
    JSON.parse(localStorage.getItem("produtos")) || [];

    lista.innerHTML="";

    if(produtos.length==0){

        lista.innerHTML=`

        <h2 style="text-align:center;width:100%;color:#d4af37;">

        Nenhuma joia cadastrada.

        </h2>

        `;

        return;

    }

    produtos.forEach(produto=>{

        lista.innerHTML+=`

        <div class="produto">

            <img src="${produto.imagem}">

            <h3>${produto.nome}</h3>

            <p class="preco">

                R$ ${Number(produto.preco).toLocaleString('pt-BR',{
                    minimumFractionDigits:2
                })}

            </p>

            <button onclick="comprar(${produto.id})">

                Comprar

            </button>

        </div>

        `;

    });

}

atualizarCarrinho();

carregarProdutos();