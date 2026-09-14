export interface Product {
  id: string;
  nome: string;
  imagem: string;
  precoAtual: number;
  precoOriginal?: number;
  loja: "Amazon" | "Mercado Livre";
  categoria: string;
  linkAfiliado: string;
  descricaoCurta?: string;
}

export const categorias = [
  "Todos",
  "Eletrônicos",
  "Casa & Cozinha",
  "Acessórios",
] as const;

export type Categoria = (typeof categorias)[number];

export const produtos: Product[] = [
  {
    id: "1",
    nome: 'Fone Bluetooth JBL Tune 510BT',
    imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    precoAtual: 149.99,
    precoOriginal: 249.99,
    loja: "Amazon",
    categoria: "Eletrônicos",
    linkAfiliado: "https://www.amazon.com.br/dp/B09HJG8NFQ?tag=SEU-AFILIADO-20",
    descricaoCurta: "Fone on-ear sem fio com 40h de bateria e som JBL Pure Bass.",
  },
  {
    id: "2",
    nome: 'Smart TV LG 50" 4K UHD',
    imagem: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
    precoAtual: 2199.00,
    precoOriginal: 2999.00,
    loja: "Amazon",
    categoria: "Eletrônicos",
    linkAfiliado: "https://www.amazon.com.br/dp/B0BXKM5G5P?tag=SEU-AFILIADO-20",
    descricaoCurta: 'TV 50 polegadas com processador α5 Gen5, webOS e ThinQ AI.',
  },
  {
    id: "3",
    nome: 'Cafeteira Elétrica Mondial',
    imagem: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop",
    precoAtual: 189.90,
    precoOriginal: 259.90,
    loja: "Amazon",
    categoria: "Casa & Cozinha",
    linkAfiliado: "https://www.amazon.com.br/dp/B07YKFLBQP?tag=SEU-AFILIADO-20",
    descricaoCurta: "Cafeteira elétrica com jarra de vidro, 15 xícaras e timer programável.",
  },
  {
    id: "4",
    nome: 'Mouse Gamer Logitech G203',
    imagem: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    precoAtual: 129.99,
    precoOriginal: 199.99,
    loja: "Mercado Livre",
    categoria: "Acessórios",
    linkAfiliado: "https://mercadolivre.com/produto?tag=SEU-AFILIADO-ML",
    descricaoCurta: "Mouse gamer com RGB, 8000 DPI e sensor HERO.",
  },
  {
    id: "5",
    nome: 'Aspirador Robô Xiaomi Mi Robot',
    imagem: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    precoAtual: 1499.00,
    precoOriginal: 2099.00,
    loja: "Mercado Livre",
    categoria: "Casa & Cozinha",
    linkAfiliado: "https://mercadolivre.com/produto?tag=SEU-AFILIADO-ML",
    descricaoCurta: "Aspirador robô com mapeamento laser, 2000Pa de sucção e controle por app.",
  },
  {
    id: "6",
    nome: 'Carregador Portátil Anker 20000mAh',
    imagem: "https://images.unsplash.com/photo-1609091839311-d57676e21833?w=400&h=400&fit=crop",
    precoAtual: 159.90,
    precoOriginal: 229.90,
    loja: "Mercado Livre",
    categoria: "Acessórios",
    linkAfiliado: "https://mercadolivre.com/produto?tag=SEU-AFILIADO-ML",
    descricaoCurta: "Power bank com 20000mAh, carregamento rápido PowerIQ e USB-C.",
  },
];
