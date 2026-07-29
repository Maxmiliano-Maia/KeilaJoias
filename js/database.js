const pedidos =
JSON.parse(localStorage.getItem("pedidos")) || [];

const produtos =
JSON.parse(localStorage.getItem("produtos")) || [];

document.getElementById("pedidos").innerHTML =
pedidos.length;

document.getElementById("produtos").innerHTML =
produtos.length;

const clientes =
new Set(
pedidos.map(p=>p.cliente.email)
);

document.getElementById("clientes").innerHTML =
clientes.size;

let faturamento=0;

pedidos.forEach(p=>{

if(

p.status!="Cancelado"

){

faturamento+=Number(p.total);

}

});

document.getElementById("hoje").innerHTML=

"R$ "+faturamento.toLocaleString("pt-BR",{

minimumFractionDigits:2

});

const tabela =
document.getElementById("ultimosPedidos");

pedidos
.slice()
.reverse()
.slice(0,8)
.forEach(p=>{

tabela.innerHTML+=`

<tr>

<td>${p.cliente.nome}</td>

<td>

R$ ${Number(p.total).toLocaleString('pt-BR',{

minimumFractionDigits:2

})}

</td>

<td>${p.status}</td>

</tr>

`;

});