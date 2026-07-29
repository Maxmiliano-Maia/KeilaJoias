let favoritos =

JSON.parse(

localStorage.getItem("favoritos")

||"[]"

);

const produtos =

API.listarProdutos();

const lista =

document.getElementById(

"listaFavoritos"

);

function desenhar(){

lista.innerHTML="";

if(favoritos.length===0){

lista.innerHTML=

"<h2>Você ainda não possui favoritos.</h2>";

return;

}

favoritos.forEach(id=>{

const produto=

produtos.find(

p=>p.id==id

);

if(!produto) return;

lista.innerHTML+=`

<div class="card">

<img src="${produto.imagens[0]}">

<h2>

${produto.nome}

</h2>

<p>

R$ ${produto.preco.toFixed(2)}

</p>

<button onclick="abrir('${produto.id}')">

Ver Produto

</button>

<button onclick="remover('${produto.id}')">

Remover

</button>

</div>

`;

});

}

function abrir(id){

location=

"produto.html?id="+id;

}

function remover(id){

favoritos=

favoritos.filter(

x=>x!=id

);

localStorage.setItem(

"favoritos",

JSON.stringify(

favoritos

)

);

desenhar();

}

desenhar();