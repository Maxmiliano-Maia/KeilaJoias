let carrinho =
JSON.parse(localStorage.getItem("carrinho")) || [];

const lista =
document.getElementById("listaCarrinho");

function atualizar(){

lista.innerHTML="";

let total=0;

if(carrinho.length===0){

lista.innerHTML="<h2>Carrinho vazio.</h2>";

document.getElementById("subtotal").innerHTML="R$ 0,00";

document.getElementById("total").innerHTML="R$ 0,00";

return;

}

carrinho.forEach((produto,index)=>{

total+=Number(produto.preco);

lista.innerHTML+=`

<div class="item">

<img src="${produto.imagem}">

<div class="info">

<h2>${produto.nome}</h2>

<p>${produto.categoria}</p>

<h3>

R$ ${Number(produto.preco).toLocaleString('pt-BR',{
minimumFractionDigits:2
})}

</h3>

<button onclick="remover(${index})">

Remover

</button>

</div>

</div>

`;

});

document.getElementById("subtotal").innerHTML=

"R$ "+total.toLocaleString('pt-BR',{

minimumFractionDigits:2

});

document.getElementById("total").innerHTML=

"R$ "+total.toLocaleString('pt-BR',{

minimumFractionDigits:2

});

}

function remover(i){

carrinho.splice(i,1);

localStorage.setItem(

"carrinho",

JSON.stringify(carrinho)

);

atualizar();

}

document
.getElementById("finalizar")
.onclick=function(){

window.location="checkout.html";

};

atualizar();