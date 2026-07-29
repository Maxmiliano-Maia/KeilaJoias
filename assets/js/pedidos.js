let pedidos =
JSON.parse(localStorage.getItem("pedidos")) || [];

const tabela =
document.getElementById("tabelaPedidos");

function desenhar(lista){

tabela.innerHTML="";

lista.forEach((pedido,index)=>{

tabela.innerHTML+=`

<tr>

<td>${pedido.id}</td>

<td>${pedido.cliente.nome}</td>

<td>

R$ ${pedido.total.toLocaleString('pt-BR',{
minimumFractionDigits:2
})}

</td>

<td>${pedido.forma}</td>

<td>

<select onchange="alterar(${index},this.value)">

<option ${pedido.status=="Aguardando Pagamento"?"selected":""}>

Aguardando Pagamento

</option>

<option ${pedido.status=="Pago"?"selected":""}>

Pago

</option>

<option ${pedido.status=="Separando"?"selected":""}>

Separando

</option>

<option ${pedido.status=="Enviado"?"selected":""}>

Enviado

</option>

<option ${pedido.status=="Entregue"?"selected":""}>

Entregue

</option>

<option ${pedido.status=="Cancelado"?"selected":""}>

Cancelado

</option>

</select>

</td>

<td>

<button onclick="ver(${index})">

Ver

</button>

<button onclick="excluir(${index})">

Excluir

</button>

</td>

</tr>

`;

});

}

function alterar(i,status){

pedidos[i].status=status;

localStorage.setItem(

"pedidos",

JSON.stringify(pedidos)

);

}

function excluir(i){

if(confirm("Excluir pedido?")){

pedidos.splice(i,1);

localStorage.setItem(

"pedidos",

JSON.stringify(pedidos)

);

desenhar(pedidos);

}

}

function ver(i){

const p=pedidos[i];

let texto="";

texto+="Cliente: "+p.cliente.nome+"\n\n";

texto+="Telefone: "+p.cliente.telefone+"\n";

texto+="Email: "+p.cliente.email+"\n\n";

texto+="Itens:\n";

p.itens.forEach(item=>{

texto+=

item.nome+

" - R$ "+item.preco+"\n";

});

texto+="\n";

texto+="Total: R$ "+p.total;

alert(texto);

}

document
.getElementById("pesquisa")
.onkeyup=function(){

const termo=
this.value.toLowerCase();

desenhar(

pedidos.filter(p=>

p.cliente.nome

.toLowerCase()

.includes(termo)

)

);

}

desenhar(pedidos);