const form=document.getElementById("produtoForm");

const preview=document.getElementById("preview");

let imagens=[];

document
.getElementById("fotos")
.onchange=function(){

preview.innerHTML="";

imagens=[];

const arquivos=[...this.files];

arquivos.forEach(a=>{

const leitor=new FileReader();

leitor.onload=e=>{

imagens.push(e.target.result);

preview.innerHTML+=`

<img src="${e.target.result}">

`;

};

leitor.readAsDataURL(a);

});

};

form.onsubmit=function(e){

e.preventDefault();

const produto=new Produto();

produto.nome=nome.value;

produto.sku=sku.value;

produto.categoria=categoria.value;

produto.preco=Number(preco.value);

produto.promocao=Number(promocao.value);

produto.estoque=Number(estoque.value);

produto.descricao=descricao.value;

produto.imagens=imagens;

produto.destaque=destaque.checked;

produto.ativo=ativo.checked;

API.novoProduto(produto);

alert("Produto cadastrado.");

location.reload();

};

desenhar();

function desenhar(){

const lista=document.getElementById("listaProdutos");

lista.innerHTML="";

API.listarProdutos().forEach(p=>{

lista.innerHTML+=`

<div class="produto">

<img src="${p.imagens[0]}">

<div>

<h3>${p.nome}</h3>

<p>${p.categoria}</p>

<p>Estoque: ${p.estoque}</p>

<p>R$ ${p.preco.toFixed(2)}</p>

</div>

</div>

`;

});

}