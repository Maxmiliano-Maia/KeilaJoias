const form = document.getElementById("produtoForm");

let produtos =
JSON.parse(localStorage.getItem("produtos")) || [];

function salvar(){

localStorage.setItem(

"produtos",

JSON.stringify(produtos)

);

}

function listar(){

const lista =
document.getElementById("listaProdutos");

lista.innerHTML="";

produtos.forEach((produto,index)=>{

lista.innerHTML +=`

<div class="produto">

<img src="${produto.imagem}">

<div class="info">

<h3>${produto.nome}</h3>

<p>R$ ${produto.preco}</p>

<p>Estoque: ${produto.estoque}</p>

<p>${produto.categoria}</p>

</div>

<div class="acoes">

<button onclick="remover(${index})">

Excluir

</button>

</div>

</div>

`;

});

}

function remover(i){

produtos.splice(i,1);

salvar();

listar();

}

form.addEventListener("submit",function(e){

e.preventDefault();

const arquivo =
document.getElementById("foto").files[0];

const leitor =
new FileReader();

leitor.onload=function(){

produtos.push({

id:Date.now(),

nome:nome.value,

preco:preco.value,

estoque:estoque.value,

categoria:categoria.value,

descricao:descricao.value,

imagem:leitor.result

});

salvar();

listar();

form.reset();

};

if(arquivo)

leitor.readAsDataURL(arquivo);

});

listar();