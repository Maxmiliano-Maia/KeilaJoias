const carrinho =
JSON.parse(localStorage.getItem("carrinho")) || [];

const pedidos =
JSON.parse(localStorage.getItem("pedidos")) || [];

const lista =
document.getElementById("itensPedido");

let total=0;

carrinho.forEach(item=>{

total+=Number(item.preco);

lista.innerHTML+=`

<div class="item">

<span>

${item.nome}

</span>

<strong>

R$ ${Number(item.preco).toLocaleString('pt-BR',{

minimumFractionDigits:2

})}

</strong>

</div>

`;

});

document.getElementById("valorTotal").innerHTML=

"R$ "+total.toLocaleString('pt-BR',{

minimumFractionDigits:2

});

document
.getElementById("finalizar")
.onclick=function(){

const pedido={

id:Date.now(),

cliente:{

nome:nome.value,

telefone:telefone.value,

email:email.value,

cep:cep.value,

endereco:endereco.value,

numero:numero.value,

bairro:bairro.value,

cidade:cidade.value,

estado:estado.value

},

forma:

document.querySelector(

'input[name=pagamento]:checked'

).value,

itens:carrinho,

total:total,

status:"Aguardando Pagamento",

data:new Date().toLocaleString()

};

pedidos.push(pedido);

localStorage.setItem(

"pedidos",

JSON.stringify(pedidos)

);

localStorage.removeItem("carrinho");

alert(

"Pedido realizado com sucesso!"

);

window.location="index.html";

};