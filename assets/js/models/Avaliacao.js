class Avaliacao{

    constructor(){

        this.id=crypto.randomUUID();

        this.produtoId="";

        this.cliente="";

        this.estrelas=5;

        this.comentario="";

        this.data=

        new Date().toISOString();

    }

}

class Favoritos{

    constructor(){

        this.lista=

        JSON.parse(

        localStorage.getItem("favoritos")

        ||"[]"

        );

    }

    adicionar(id){

        if(

        this.lista.includes(id)

        ) return;

        this.lista.push(id);

        this.salvar();

    }

    remover(id){

        this.lista=

        this.lista.filter(

        p=>p!=id

        );

        this.salvar();

    }

    salvar(){

        localStorage.setItem(

        "favoritos",

        JSON.stringify(

        this.lista

        )

        );

    }

}

function pesquisar(texto){

    texto=

    texto.toLowerCase();

    return API

    .listarProdutos()

    .filter(p=>

        p.nome

        .toLowerCase()

        .includes(texto)

        ||

        p.categoria

        .toLowerCase()

        .includes(texto)

    );

}