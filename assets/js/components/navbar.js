class Navbar{

render(){

return `

<header class="navbar">

<div class="container">

<div class="logo">

KEILA

<span>

Fine Jewelry

</span>

</div>

<nav>

<a href="index.html">

Início

</a>

<a href="categoria.html">

Joias

</a>

<a href="favoritos.html">

Favoritos

</a>

<a href="conta.html">

Minha Conta

</a>

<a href="carrinho.html">

🛒

<span id="cartCount">

0

</span>

</a>

</nav>

</div>

</header>

`;

}

}

document.body.insertAdjacentHTML(

"afterbegin",

new Navbar().render()

);

class Navbar{

render(){

return `

<header class="navbar">

<div class="container">

<div class="logo">

KEILA

<span>

Fine Jewelry

</span>

</div>

<nav>

<a href="index.html">

Início

</a>

<a href="categoria.html">

Joias

</a>

<a href="favoritos.html">

Favoritos

</a>

<a href="conta.html">

Minha Conta

</a>

<a href="carrinho.html">

🛒

<span id="cartCount">

0

</span>

</a>

</nav>

</div>

</header>

`;

}

}

document.body.insertAdjacentHTML(

"afterbegin",

new Navbar().render()

);

class Toast{

static mostrar(msg){

const div=document.createElement("div");

div.className="toast";

div.innerHTML=msg;

document.body.appendChild(div);

setTimeout(()=>{

div.remove();

},3000);

}

}

class Loader{

static abrir(){

document.body.insertAdjacentHTML(

"beforeend",

`

<div id="loader">

Carregando...

</div>

`

);

}

static fechar(){

document

.getElementById("loader")

.remove();

}

}

class Loader{

static abrir(){

document.body.insertAdjacentHTML(

"beforeend",

`

<div id="loader">

Carregando...

</div>

`

);

}

static fechar(){

document

.getElementById("loader")

.remove();

}

}

class Modal{

static confirmar(texto,callback){

if(confirm(texto))

callback();

}

}