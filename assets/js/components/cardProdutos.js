class CardProduto {

    constructor(produto){

        this.produto = produto;

    }

    render(){

        return `

<div class="produto">

<img src="${this.produto.imagens[0]}">

<div class="conteudo">

<h3>${this.produto.nome}</h3>

<p>${this.produto.material}</p>

<div class="preco">

<small>

R$ ${this.produto.preco.toFixed(2)}

</small>

<strong>

R$ ${this.produto.precoPromocional.toFixed(2)}

</strong>

</div>

<div class="acoes">

<button onclick="favoritar('${this.produto.id}')">

♡

</button>

<button onclick="comprar('${this.produto.id}')">

Comprar

</button>

</div>

</div>

</div>

`;

    }

}