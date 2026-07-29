class Carrinho{

    constructor(){

        this.itens = JSON.parse(

            localStorage.getItem("carrinho")

            || "[]"

        );

    }

    salvar(){

        localStorage.setItem(

            "carrinho",

            JSON.stringify(this.itens)

        );

    }

    adicionar(produto){

        const existente =

        this.itens.find(

            i=>i.id===produto.id

        );

        if(existente){

            existente.quantidade++;

        }

        else{

            this.itens.push({

                ...produto,

                quantidade:1

            });

        }

        this.salvar();

    }

    remover(id){

        this.itens=

        this.itens.filter(

            p=>p.id!==id

        );

        this.salvar();

    }

    aumentar(id){

        const item=

        this.itens.find(

            p=>p.id===id

        );

        if(item){

            item.quantidade++;

            this.salvar();

        }

    }

    diminuir(id){

        const item=

        this.itens.find(

            p=>p.id===id

        );

        if(!item) return;

        item.quantidade--;

        if(item.quantidade<=0){

            this.remover(id);

            return;

        }

        this.salvar();

    }

    total(){

        return this.itens.reduce(

            (t,p)=>

            t+

            p.preco*

            p.quantidade,

            0

        );

    }

}