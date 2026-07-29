class Produto {

    constructor(){

        this.id = crypto.randomUUID();

        this.nome = "";

        this.slug = "";

        this.descricaoCurta = "";

        this.descricaoCompleta = "";

        this.categoria = "";

        this.subcategoria = "";

        this.sku = "";

        this.codigoBarras = "";

        this.marca = "Keila";

        this.material = "Ouro 18K";

        this.teor = "750";

        this.peso = 0;

        this.estoque = 0;

        this.preco = 0;

        this.precoPromocional = 0;

        this.destaque = false;

        this.promocao = false;

        this.lancamento = false;

        this.ativo = true;

        this.imagens = [];

        this.video = "";

        this.criadoEm = new Date().toISOString();

    }

}