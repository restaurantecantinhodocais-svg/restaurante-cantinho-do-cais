export const menuData = {
  comida: {
    entradas: [
      { nome: "Camarão", preco: "20.00€" },
      { nome: "Favas Guisadas", preco: "3.00€" },
      { nome: "Iscas de Atum", preco: "15.00€" },
      { nome: "Lapas Grelhadas", preco: "20.00€" },
      { nome: "Mexilhão Grelhado", preco: "10.00€" },
      { nome: "Queijo Curado", preco: "3.00€" },
      { nome: "Queijo Fresco", preco: "2.50€" },
      { nome: "Sopa de Peixe", preco: "3.50€" }
    ],
    pratos_peixe: [
      { nome: "Atum", preco: "17.50€" },
      { nome: "Bacalhau", preco: "17.50€" },
      { nome: "Chicharros Fritos", preco: "10.00€" },
      { nome: "Filetes Fritos", preco: "20.00€" },
      { nome: "1/2 Filetes Fritos", preco: "12.50€" },
      { nome: "Lulas Grelhadas", preco: "17.50€" },
      { nome: "Molho de Peixe (1 Dose)", preco: "25.00€" },
      { nome: "Molho de Peixe (2+ Doses)", preco: "20.00€/dose" },
      { nome: "Peixe Grelhado", preco: "20.00€" },
      { nome: "Polvo Assado", preco: "20.00€" },
      { nome: "1/2 Polvo Assado", preco: "15.00€" },
      { nome: "Polvo Guisado", preco: "17.50€" },
      { nome: "1/2 Polvo Guisado", preco: "12.50€" }
    ],
    pratos_carne: [
      { nome: "Assaduras", preco: "8.50€" },
      { nome: "Bifanas", preco: "10.00€" },
      { nome: "Bife de Novilho", preco: "25.00€" },
      { nome: "Lombinhos", preco: "12.50€" },
      { nome: "Peito de Frango", preco: "10.00€" }
    ],
    pratos_vegetarianos: [
      { nome: "Omeletes", preco: "7.50€" },
      { nome: "Salada de Feijão", preco: "7.50€" },
      { nome: "Salada com Queijo Fresco", preco: "8.50€" }
    ],
    menu_infantil: [
      { nome: "Filetes Fritos", preco: "10.00€" },
      { nome: "Hambúrguer no Prato", preco: "6.50€" },
      { nome: "Lombinhos", preco: "7.50€" }
    ],
    sobremesas: [
      { nome: "Ananás", preco: "3.50€" },
      { nome: "Gelados", preco: "3.00€" },
      { nome: "Queijadas", preco: "1.20€" }
    ]
  },
  bebidas: {
    vinhos: {
      tintos: { 
        alentejo: [
          { nome: "Pontual (Grande Reserva)", quantidade: "75cl", preco: "25€" },
          { nome: "Pontual (Reserva)", quantidade: "75cl", preco: "17,5€" },
          { nome: "Pontual (Syrah)", quantidade: "75cl", preco: "15€" },
          { nome: "Pontual (Touriga Nacional)", quantidade: "75cl", preco: "15€" },
          { nome: "Pontual (Petit Verdot - Alicante Bouschet)", quantidade: "75cl", preco: "15€" },
          { nome: "Herdade Grande", quantidade: "75cl", preco: "12,5€" },
          { nome: "Herdade do Pombal", quantidade: "75cl", preco: "10€" },
          { nome: "Herdade do Pombal", quantidade: "37,5cl", preco: "5€" },
          { nome: "Charneco (Alicante Bouschet - Cabernet Sauvignon)", quantidade: "75cl", preco: "10€" },
          { nome: "Charneco", quantidade: "75cl", preco: "7,5€" },
          { nome: "Pérola", quantidade: "Jarro 1Lt", preco: "7,5€" },
          { nome: "Pérola", quantidade: "Jarro 0,5Lt", preco: "4€" }
        ], 
        douro: [
          { nome: "Duas Quintas", quantidade: "75cl", preco: "20€" },
          { nome: "Duas Quintas", quantidade: "37,5cl", preco: "10€" },
          { nome: "Quinta da Soalheira (Reserva)", quantidade: "75cl", preco: "15€" },
          { nome: "Bons Ares", quantidade: "75cl", preco: "15€" },
          { nome: "Lello (Reserva)", quantidade: "75cl", preco: "12,5€" },
          { nome: "Quinta da Soalheira", quantidade: "75cl", preco: "10€" },
          { nome: "Lello", quantidade: "75cl", preco: "7,5€" },
          { nome: "Lello", quantidade: "37,5cl", preco: "5€" },
          { nome: "Flor do Tua", quantidade: "75cl", preco: "10€" }
        ], 
        dão: [
          { nome: "Borges Reserva", quantidade: "75cl", preco: "20€" },
          { nome: "Quinta de São Simão de Aguieira", quantidade: "75cl", preco: "15€" },
          { nome: "Taboadella Villae", quantidade: "75cl", preco: "15€" },
          { nome: "Dona Sancha", quantidade: "75cl", preco: "15€" }
        ], 
        outras_regiões: [
          { nome: "Pactus", quantidade: "75cl", preco: "20€" },
          { nome: "Monte Capucho", quantidade: "75cl", preco: "15€" }
        ] 
      },
      brancos: { 
        alentejo: [
          { nome: "Invisível", quantidade: "75cl", preco: "20€" },
          { nome: "Nosso Terroir", quantidade: "75cl", preco: "15€" },
          { nome: "Herdade Grande", quantidade: "75cl", preco: "12,5€" },
          { nome: "Charneco (Sauvignon Blanc)", quantidade: "75cl", preco: "10€" },
          { nome: "Pérola", quantidade: "Jarro 1lt", preco: "7,5€" },
          { nome: "Pérola", quantidade: "Jarro 0,5 lt", preco: "4€" }
        ], 
        douro: [
          { nome: "Vendaval", quantidade: "75cl", preco: "20€" },
          { nome: "Borges Reserva", quantidade: "75cl", preco: "20€" },
          { nome: "Duas Quintas", quantidade: "75cl", preco: "20€" },
          { nome: "Duas Quintas", quantidade: "37,5cl", preco: "10€" },
          { nome: "Bons Ares", quantidade: "75cl", preco: "15€" },
          { nome: "Quinta da Soalheira", quantidade: "75cl", preco: "10€" },
          { nome: "Lello", quantidade: "75cl", preco: "7,5€" },
          { nome: "Lello", quantidade: "37,5cl", preco: "5€" },
          { nome: "Borges Gouveio", quantidade: "75cl", preco: "15€" }
        ], 
        dão: [
          { nome: "Borges Reserva", quantidade: "75cl", preco: "20€" },
          { nome: "Quinta de São Simão de Aguieira", quantidade: "75cl", preco: "15€" },
          { nome: "Taboadella Villae", quantidade: "75cl", preco: "15€" },
          { nome: "Dona Sancha", quantidade: "75cl", preco: "15€" }
        ], 
        outras_regiões: [
          { nome: "Pactus", quantidade: "75cl", preco: "20€" },
          { nome: "Monte Capucho", quantidade: "75cl", preco: "15€" }
        ] 
      },
      verdes_alvarinhos: [
        { nome: "Alvarinho (Borges)", quantidade: "75cl", preco: "17,5€" },
        { nome: "Quinta de Simaens (Borges)", quantidade: "75cl", preco: "12,5€" },
        { nome: "Muralhas (Monção)", quantidade: "75cl", preco: "8,5€" },
        { nome: "Muralhas (Monção)", quantidade: "37,5cl", preco: "5€" }
      ],
      rosés: [
        { nome: "Quinta da Soalheira", quantidade: "75cl", preco: "10€" },
        { nome: "Dão Meia Encosta", quantidade: "75cl", preco: "7,5€" }
      ],
      espumantes: [
        { nome: "Fita Azul", quantidade: "75cl", preco: "15€" }
      ]
    },
    cervejaria: [
      { nome: "Fino", quantidade: "200ml", preco: "1.00€" },
      { nome: "Tulipa", quantidade: "300ml", preco: "1.50€" },
      { nome: "Caneca", quantidade: "400ml", preco: "1.80€" },
      { nome: "Heineken", quantidade: "250ml", preco: "1.20€" },
      { nome: "Super Bock", quantidade: "200ml", preco: "1.00€" },
      { nome: "Super Bock", quantidade: "330ml", preco: "1.20€" },
      { nome: "Especial", quantidade: "330ml", preco: "1.20€" },
      { nome: "Preta Doce", quantidade: "330ml", preco: "1.20€" },
      { nome: "Sagres 0% Álcool", quantidade: "330ml", preco: "1.50€" },
      { nome: "Panaché", quantidade: "300ml", preco: "1.50€" },
      { nome: "Panaché", quantidade: "400ml", preco: "1.80€" },
      { nome: "Caldeado com cerveja", quantidade: "400ml", preco: "1.80€" },
      { nome: "Caldeado com vinho", quantidade: "400ml", preco: "1.80€" }
    ],
    águas: [
      { nome: "Água sem gás", quantidade: "250ml", preco: "0.50€" },
      { nome: "Água sem gás", quantidade: "1.5lts", preco: "2.50€" },
      { nome: "Água com gás Frize", quantidade: "250ml", preco: "1.00€" },
      { nome: "Água com gás Pedras Salgadas", quantidade: "250ml", preco: "1.20€" },
      { nome: "Água com gás Castelo", quantidade: "250ml", preco: "1.20€" },
      { nome: "Água Tónica", quantidade: "250ml", preco: "1.20€" }
    ],
    sumos: [
      { nome: "Juver", quantidade: "200ml", preco: "1.20€" },
      { nome: "Sprite", quantidade: "330ml", preco: "1.20€" },
      { nome: "Laranjada", quantidade: "250ml", preco: "1.00€" },
      { nome: "Kima", quantidade: "250ml", preco: "1.00€" },
      { nome: "Coca-Cola", quantidade: "330ml", preco: "1.20€" },
      { nome: "Fanta", quantidade: "330ml", preco: "1.20€" },
      { nome: "Ice Tea", quantidade: "330ml", preco: "1.20€" },
      { nome: "Capri-sun", quantidade: "330ml", preco: "1.20€" },
      { nome: "Espresso Monster", quantidade: "250ml", preco: "1.50€" }
    ],
    licores: [
      { nome: "Licor de Maracujá/Amora/Nêveda/Anis", quantidade: "50ml", preco: "1.50€" },
      { nome: "Licor Beirão", quantidade: "30ml", preco: "1.50€" },
      { nome: "Creme de Whisky", quantidade: "50ml", preco: "1.50€" },
      { nome: "Martini", quantidade: "50ml", preco: "1.50€" },
      { nome: "Vinho Abafado", quantidade: "50ml", preco: "1.00€" },
      { nome: "Vinho do Porto", quantidade: "50ml", preco: "1.50€" },
      { nome: "\"Risco\" de Licor", quantidade: "30ml", preco: "1.00€" }
    ],
    aguardentes: [
      { nome: "Curvada de Velha", quantidade: "50ml", preco: "3.50€" },
      { nome: "CR&F", quantidade: "50ml", preco: "2.50€" },
      { nome: "Mulher do Capote \"Velhíssima\"", quantidade: "50ml", preco: "3.50€" },
      { nome: "Mulher do Capote \"Tianica\"", quantidade: "30ml", preco: "1.20€" },
      { nome: "Licor de Aguardente \"Mistura Branca\"", quantidade: "50ml", preco: "1.50€" },
      { nome: "Abelheira", quantidade: "50ml", preco: "1.50€" },
      { nome: "Ponte de Amarante", quantidade: "50ml", preco: "1.50€" }
    ],
    brandys: [
      { nome: "Macieira", quantidade: "50ml", preco: "1.50€" },
      { nome: "Brandy 1920", quantidade: "50ml", preco: "1.50€" },
      { nome: "Brandy de Maracujá", quantidade: "50ml", preco: "1.50€" },
      { nome: "Genebra", quantidade: "50ml", preco: "1.50€" },
      { nome: "Constantino", quantidade: "50ml", preco: "1.50€" },
      { nome: "Croft", quantidade: "50ml", preco: "1.50€" },
      { nome: "\"Risco\" de Brandy", quantidade: "30ml", preco: "1.00€" }
    ],
    whiskys: [
      { nome: "Black Label", quantidade: "50ml", preco: "3.50€" },
      { nome: "Logan", quantidade: "50ml", preco: "2.50€" },
      { nome: "Famous Grouse", quantidade: "50ml", preco: "2.00€" },
      { nome: "Red Label", quantidade: "50ml", preco: "1.50€" },
      { nome: "Cutty Sark", quantidade: "50ml", preco: "1.50€" },
      { nome: "Jameson", quantidade: "50ml", preco: "1.50€" },
      { nome: "\"Risco\" Whisky Novo", quantidade: "30ml", preco: "1.00€" }
    ]
  }
};