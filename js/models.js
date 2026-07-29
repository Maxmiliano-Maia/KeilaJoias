class Produto{

constructor(){

this.id=Date.now();

this.nome="";

this.descricao="";

this.preco=0;

this.categoria="";

this.estoque=0;

this.imagens=[];

this.destaque=false;

this.promocao=false;

this.ativo=true;

}

}

class Cliente{

constructor(){

this.id=Date.now();

this.nome="";

this.email="";

this.telefone="";

this.endereco={};

}

}

class Pedido{

constructor(){

this.id=Date.now();

this.cliente={};

this.itens=[];

this.total=0;

this.status="Aguardando";

this.pagamento="";

this.data=new Date();

}

}