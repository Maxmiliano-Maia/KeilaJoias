const produtos = API.listarProdutos();

const parametros = new URLSearchParams(location.search);

const id = parametros.get("id");

const produto = produtos.find(p => p.id == id);

if(!produto){

document.body.innerHTML="<h1>Produto não encontrado.</h1>";

throw new Error();

}

document.getElementById("nome").textContent =
produto.nome;

document.getElementById("sku").textContent =
"SKU: "+produto.sku;

document.getElementById("descricao").textContent =
produto.descricao;

document.getElementById("material").textContent =
"Material: "+produto.material;

document.getElementById("peso").textContent =
"Peso: "+produto.peso+" g";

document.getElementById("teor").textContent =
"Teor: "+produto.teor;

document.getElementById("estoque").textContent =
"Estoque: "+produto.estoque;

document.getElementById("precoAntigo").textContent=
"R$ "+produto.preco.toFixed(2);

const precoVenda =
produto.promocao > 0
? produto.promocao
: produto.preco;

document.getElementById("precoAtual").textContent=
"R$ "+precoVenda.toFixed(2);

document.getElementById("pix").textContent=
"À vista no PIX: R$ "+(precoVenda*0.95).toFixed(2);

document.getElementById("parcelas").textContent=
"ou 12x de R$ "+(precoVenda/12).toFixed(2);

const principal =
document.getElementById("fotoPrincipal");

principal.src = produto.imagens[0];

const mini =
document.getElementById("miniaturas");

produto.imagens.forEach(foto=>{

const img=document.createElement("img");

img.src=foto;

img.onclick=function(){

principal.src=foto;

};

mini.appendChild(img);

});

const relacionados =
document.getElementById("relacionados");

produtos
.filter(p=>p.categoria===produto.categoria && p.id!==produto.id)
.slice(0,4)
.forEach(p=>{

relacionados.innerHTML+=`

<div class="produto-card">

<img src="${p.imagens[0]}" style="width:100%;border-radius:10px">

<h3>${p.nome}</h3>

<p>R$ ${p.preco.toFixed(2)}</p>

<a href="produto.html?id=${p.id}">

Ver Produto

</a>

</div>

`;

});

document
.getElementById("calcularFrete")
.onclick=function(){

const cep=
document
.getElementById("cep")
.value
.replace(/\D/g,"");

if(cep.length!=8){

alert("CEP inválido.");

return;

}

const resultado=
document
.getElementById("resultadoFrete");

let valor=0;
let dias=0;

const inicio=
parseInt(
cep.substring(0,2)
);

if(inicio<=29){

valor=25;
dias=2;

}

else if(inicio<=59){

valor=35;
dias=4;

}

else{

valor=45;
dias=7;

}

if(precoVenda>=500){

valor=0;

}

resultado.innerHTML=`

<p>

🚚 Entrega:

<strong>

${dias} dias úteis

</strong>

</p>

<p>

Frete:

<strong>

R$ ${valor.toFixed(2)}

</strong>

</p>

`;

}

document
.getElementById("comprar")
.onclick=function(){

const qtd=

parseInt(

document
.getElementById("quantidade")
.value

);

let carrinho=

JSON.parse(

localStorage.getItem("carrinho")

||"[]"

);

const existente=

carrinho.find(

p=>p.id==produto.id

);

if(existente){

existente.quantidade+=qtd;

}

else{

carrinho.push({

...produto,

quantidade:qtd

});

}

localStorage.setItem(

"carrinho",

JSON.stringify(carrinho)

);

alert("Produto adicionado ao carrinho.");

};