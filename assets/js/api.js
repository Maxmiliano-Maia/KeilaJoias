const DB={

ler(chave){

return JSON.parse(

localStorage.getItem(chave)

||"[]"

);

},

salvar(chave,dados){

localStorage.setItem(

chave,

JSON.stringify(dados)

);

},

adicionar(chave,obj){

const lista=this.ler(chave);

lista.push(obj);

this.salvar(chave,lista);

},

remover(chave,id){

let lista=this.ler(chave);

lista=lista.filter(x=>x.id!=id);

this.salvar(chave,lista);

},

buscar(chave,id){

return this.ler(chave)

.find(x=>x.id==id);

},

editar(chave,id,dados){

const lista=this.ler(chave);

const indice=

lista.findIndex(x=>x.id==id);

if(indice==-1)return;

lista[indice]={

...lista[indice],

...dados

};

this.salvar(chave,lista);

}

}