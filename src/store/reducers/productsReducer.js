const initialState = {
    cart: [{
        "id":1,
        "name":"Nike - Air 90's",
        "marca": "Nike",
        "price":199.99,
        "categorie":"tênis",
        "desc": " A camiseta Nike Sportswear apresenta um escudo.",
        "gender":"masculino",
        "numeric":["40","41","42","43","44","45"],
        "image": "https://authenticfeet.vteximg.com.br/arquivos/ids/217475-1000-1000/Tenis-Nike-Air-Max-90-Feminino-Preto.jpg?v=636513671955130000"
    },
    {
        "id":2,
        "name":"Adidas - 900's",
        "marca": "Adidas",
        "price":179.99,
        "categorie":"tênis",
        "desc": " A camiseta Nike Sportswear apresenta um escudo.",
        "gender":"masculino",
        "numeric":["39","40","41","42","43","44","45"],
        "image": "https://authenticfeet.vteximg.com.br/arquivos/ids/238716-1000-1000/Tenis-adidas-ZX-2K-Boost-Masculino-Multicolor.jpg?v=637394262622570000"
    },{
        "id":3,
        "name":"Adidas - Preta",
        "marca": "Adidas",
        "price":179.99,
        "categorie":"tênis",
        "desc": " A camiseta Nike Sportswear apresenta um escudo.",
        "gender":"masculino",
        "numeric":["P","M","G","GG","GGG"],
        "image": "https://images.lojanike.com.br/1024x1024/produto/222533_2375128_20200727103536.jpg"
    },{
        "id":4,
        "name":"C&A - Calça jeans",
        "marca": "C&A",
        "price":59.99,
        "categorie":"calça",
        "desc": " A camiseta Nike Sportswear apresenta um escudo.",
        "gender":"feminino",
        "numeric":["32","34","36","38","40","42","44"],
        "image": "https://static.hering.com.br//sys_master/images/h84/h8f/9910170681374.jpg?name=H982-1ASN-C1"
    },{
        "id":5,
        "name":"Marisa - Vestido",
        "marca": "Marisa",
        "price":149.99,
        "categorie":"vestido",
        "desc": " A camiseta Nike Sportswear apresenta um escudo.",
        "gender":"feminino",
        "numeric":["P","M","G","GG","GGG"],
        "image": "https://images2.marisa.com.br/medias/sys_master/images/images/hdc/h5c/10511725592606/-Vestido-Feminino-Estampa-Babado-Marisa-10033946252-C1.jpg"
    },{
        "id":6,
        "name":"Pedraria - Sapatilha",
        "marca": "",
        "price":79.99,
        "categorie":"sapatilha",
        "desc": " A camiseta Nike Sportswear apresenta um escudo.",
        "gender":"feminino",
        "numeric":["32","34","36","38","40"],
        "image": "https://23929.cdn.simplo7.net/static/23929/sku/sapatilhas-bico-redondo-sapatilha-preta-pedraria-veludo-bico-redondo--p-1600658650146.jpg"
    },{
        "id":7,
        "name":"Nike -Icon Futura",
        "marca": "Nike",
        "price":59.99,
        "categorie":"camiseta",
        "desc": " A camiseta Nike Sportswear apresenta um escudo.",
        "gender":"masculino",
        "numeric":["P","M","G","GG","GGG"],
        "image": "https://static.lojadointer.com.br/produtos/camiseta-nike-sportwear-icon-futura-masculina/60/HZM-1299-260/HZM-1299-260_zoom1.jpg?ts=1564788649"
    },{
        "id":8,
        "name":"Camiseta Oklay",
        "marca": "Oklay",
        "price":79.99,
        "categorie":"camiseta",
        "desc": " A camiseta Nike Sportswear apresenta um escudo.",
        "gender":"Feminina",
        "numeric":["PP","P","M","G","GG"],
        "image": "https://rs1.vteximg.com.br/arquivos/ids/242889-1000-1000/CAMISETAS-FEMININAS-ANGLE-GOOD-BYE-SALVIA-min.jpg?v=636993957368530000"
    }],
    
  };
  export const productsReducer = (state = initialState, action) => {
   
    switch (action.type) {
      case 'SHOW_PRODUCTS':
     
        return state
    break
      default:
        return state;
    }
  };