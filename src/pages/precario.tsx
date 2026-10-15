import { useState } from "react";
import { useTranslation } from "react-i18next";
import { menuData } from "@/mocks/precario_completo";
import Layout from "@/components/layout/Layout";

export default function Precario() {
  const { t } = useTranslation();

  const [openMain, setOpenMain] = useState<string | null>("comida");
  const [openSub, setOpenSub] = useState<string | null>(null);
  
  // Estado para o modal de visualização de foto na comida
  const [selectedImage, setSelectedImage] = useState<{ nome: string; url: string } | null>(null);

  const toggleMain = (id: string) => {
    setOpenMain(openMain === id ? null : id);
    setOpenSub(null);
  };

  const toggleSub = (id: string) => {
    setOpenSub(openSub === id ? null : id);
  };

  // Mapeamento direto das imagens oficiais de cada prato da comida
  const getFoodImage = (nome: string, subcategoria: string) => {
    const map: Record<string, Record<string, string>> = {
      entradas: {
        "Camarão": "/fotos-entradas/camarao-entradas.webp",
        "Favas Guisadas": "/fotos-entradas/favas-entradas.webp",
        "Iscas de Atum": "/fotos-entradas/iscas-de-atum-entradas.webp",
        "Lapas Grelhadas": "/fotos-entradas/lapas-entradas.webp",
        "Mexilhão Grelhado": "/fotos-entradas/mexilhoes-entradas.webp",
        "Queijo Curado": "/fotos-entradas/queijo-curado-entradas.webp",
        "Queijo Fresco": "/fotos-entradas/queijo-fresco-entradas.webp",
        "Sopa de Peixe": "/fotos-entradas/sopa-de-peixe-entradas.webp"
      },
      pratos_peixe: {
        "Atum": "/fotos-pratos-de-peixe/atum-pratos-de-peixe.webp",
        "Bacalhau": "/fotos-pratos-de-peixe/bacalhau-pratos-de-peixe.webp",
        "Chicharros Fritos": "/fotos-pratos-de-peixe/chicharros-fritos-pratos-de-peixe.webp",
        "Filetes Fritos": "/fotos-pratos-de-peixe/filetes-fritos-pratos-de-peixe.webp",
        "1/2 Filetes Fritos": "/fotos-pratos-de-peixe/filetes-fritos-pratos-de-peixe.webp",
        "Lulas Grelhadas": "/fotos-pratos-de-peixe/lulas-pratos-de-peixe.webp",
        "Molho de Peixe (1 Dose)": "/fotos-pratos-de-peixe/molho-de-peixe-pratos-de-peixe.webp",
        "Molho de Peixe (2+ Doses)": "/fotos-pratos-de-peixe/molho-de-peixe-pratos-de-peixe.webp",
        "Peixe Grelhado": "/fotos-pratos-de-peixe/peixe-grelhado-pratos-de-peixe.webp",
        "Polvo Assado": "/fotos-pratos-de-peixe/polvo-assado-pratos-de-peixe.webp",
        "1/2 Polvo Assado": "/fotos-pratos-de-peixe/polvo-assado-pratos-de-peixe.webp",
        "Polvo Guisado": "/fotos-pratos-de-peixe/polvo-guisado-pratos-de-peixe.webp",
        "1/2 Polvo Guisado": "/fotos-pratos-de-peixe/polvo-guisado-pratos-de-peixe.webp"
      },
      pratos_carne: {
        "Assaduras": "/fotos-pratos-de-carne/assaduras-pratos-de-carne.webp",
        "Bifanas": "/fotos-pratos-de-carne/bifanas-pratos-de-carne.webp",
        "Bife de Novilho": "/fotos-pratos-de-carne/bife-de-novilho-pratos-de-carne.webp",
        "Lombinhos": "/fotos-pratos-de-carne/lombinhos-pratos-de-carne.webp",
        "Peito de Frango": "/fotos-pratos-de-carne/peitos-de-frango-pratos-de-carne.webp"
      },
      pratos_vegetarianos: {
        "Omeletes": "/fotos-vegetariano/omeletes-pratos-vegetarianos.webp",
        "Salada de Feijão": "/fotos-vegetariano/salada-de-feijao-pratos-vegetarianos.webp",
        "Salada com Queijo Fresco": "/fotos-vegetariano/salada-com-queijo-fresco-pratos-vegetarianos.webp"
      },
      menu_infantil: {
        "Filetes Fritos": "/fotos-menu-infantil/filetes-fritos-menu-infantil.webp",
        "Hambúrguer no Prato": "/fotos-menu-infantil/hamburguer-no-prato-menu-infantil.webp",
        "Lombinhos": "/fotos-menu-infantil/lombinhos-menu-infantil.webp"
      },
      sobremesas: {
        "Ananás": "/fotos-sobremesas/ananas-sobremesas.webp",
        "Gelados": "/fotos-sobremesas/gelados-sobremesas.webp",
        "Queijadas": "/fotos-sobremesas/queijadas-sobremesas.webp"
      }
    };

    return map[subcategoria]?.[nome] || "";
  };

  // Função auxiliar para obter a chave de tradução do nome do prato
  const getDishTranslationKey = (nome: string) => {
    let cleanName = nome.replace("1/2 ", "").replace(" (1 Dose)", "").replace(" (2+ Doses)", "");
    
    const mapping: Record<string, string> = {
      "Camarão": "dish_camarao",
      "Favas Guisadas": "dish_favas_guisadas",
      "Iscas de Atum": "dish_iscas_atum",
      "Lapas Grelhadas": "dish_lapas_grelhadas",
      "Mexilhão Grelhado": "dish_mexilhoes_grelhados",
      "Queijo Curado": "dish_queijo_curado",
      "Queijo Fresco": "dish_queijo_fresco",
      "Sopa de Peixe": "dish_sopa_peixe",
      "Atum": "dish_atum",
      "Bacalhau": "dish_bacalhau",
      "Chicharros Fritos": "dish_chicharros_fritos",
      "Filetes Fritos": "dish_filetes_fritos",
      "Lulas Grelhadas": "dish_lulas_grelhadas",
      "Molho de Peixe": "dish_molho_peixe",
      "Peixe Grelhado": "dish_peixe_grelhado",
      "Polvo Assado": "dish_polvo_assado",
      "Polvo Guisado": "dish_polvo_guisado",
      "Assaduras": "dish_assaduras",
      "Bifanas": "dish_bifanas",
      "Bife de Novilho": "dish_bife_novilho",
      "Lombinhos": "dish_lombinhos",
      "Peito de Frango": "dish_peito_frango",
      "Omeletes": "dish_omeletes",
      "Salada de Feijão": "dish_salada_feijao",
      "Salada com Queijo Fresco": "dish_salada_queijo_fresco",
      "Hambúrguer no Prato": "dish_hamburguer_prato",
      "Ananás": "dish_ananas",
      "Gelados": "dish_gelados",
      "Queijadas": "dish_queijadas"
    };

    return mapping[cleanName] || "";
  };

  // Função auxiliar para obter a tradução exata das bebidas
  const getTranslatedDrinkName = (nome: string) => {
    const mapping: Record<string, string> = {
      "Fino": "cerveja_fino",
      "Tulipa": "cerveja_tulipa",
      "Caneca": "cerveja_caneca",
      "Panaché": "cerveja_panache",
      "Caldeado com cerveja": "cerveja_caldeado_cerveja",
      "Caldeado com vinho": "cerveja_caldeado_vinho",
      "Água sem gás": "agua_sem_gas",
      "Água com gás": "agua_com_gas",
      "Água Tónica": "agua_tonica",
      "\"Risco\" de Licor": "bebida_risco_licor",
      "\"Risco\" de Brandy": "bebida_risco_brandy",
      "\"Risco\" Whisky Novo": "bebida_risco_whisky"
    };

    if (mapping[nome]) {
      return t(mapping[nome]);
    }

    // Tratamento inteligente para águas com marca à frente
    if (nome.startsWith("Água com gás ")) {
      const brand = nome.replace("Água com gás ", "");
      return `${t("agua_com_gas")} ${brand}`;
    }
    if (nome.startsWith("Água sem gás ")) {
      const brand = nome.replace("Água sem gás ", "");
      return `${t("agua_sem_gas")} ${brand}`;
    }

    return "";
  };

  // Função para traduzir o nome da subcategoria de comida
  const getFoodSubCategoryTitle = (subKey: string) => {
    const subCategoryMapping: Record<string, string> = {
      entradas: "menu_cat_starters",
      pratos_peixe: "menu_cat_fish",
      pratos_carne: "menu_cat_meat",
      pratos_vegetarianos: "menu_cat_vegetarian",
      menu_infantil: "menu_cat_kids",
      sobremesas: "menu_cat_desserts"
    };

    const key = subCategoryMapping[subKey];
    return key ? t(key) : subKey.replace("_", " ").toUpperCase();
  };

  // Função segura para traduzir as regiões dos vinhos
  const getWineRegionTitle = (regiao: string) => {
    const cleanKey = regiao.toLowerCase().trim();
    if (cleanKey === "alentejo") return t("regiao_alentejo");
    if (cleanKey === "douro") return t("regiao_douro");
    if (cleanKey === "dão") return t("regiao_dão");
    if (cleanKey === "outras_regiões" || cleanKey === "outras_regioes") return t("regiao_outras_regiões");
    return regiao.replace("_", " ");
  };

  const renderItem = (item: { nome: string; preco: string; quantidade?: string }, subcategoriaKey?: string) => {
    const isHalfPortion = item.nome?.startsWith("1/2");
    const isMultiDoseFishSauce = item.nome === "Molho de Peixe (2+ Doses)";
    const shouldHideCamera = isHalfPortion || isMultiDoseFishSauce;

    let displayName = item.nome;
    if (subcategoriaKey) {
      const translationKey = getDishTranslationKey(item.nome);
      if (translationKey) {
        const translated = t(translationKey);
        if (isHalfPortion) {
          displayName = `1/2 ${translated}`;
        } else if (isMultiDoseFishSauce) {
          displayName = `${translated} (2+ Doses)`;
        } else if (item.nome === "Molho de Peixe (1 Dose)") {
          displayName = `${translated} (1 Dose)`;
        } else {
          displayName = translated;
        }
      }
    }

    return (
      <div className="flex items-center justify-between py-2">
        <div className="flex items-baseline gap-2 truncate">
          <span className="font-medium text-stone-800">{displayName}</span>
          {item.quantidade && (
            <span className="text-sm text-stone-500 font-light whitespace-nowrap">
              ({item.quantidade})
            </span>
          )}
          {subcategoriaKey && !shouldHideCamera && (
            <button
              onClick={() => {
                const imgUrl = getFoodImage(item.nome, subcategoriaKey);
                setSelectedImage({ nome: displayName, url: imgUrl });
              }}
              className="ml-2 text-amber-600 hover:text-amber-800 transition-colors p-1 cursor-pointer"
              title="Ver foto do prato"
              aria-label={`Ver foto de ${displayName}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </button>
          )}
        </div>
        <div className="flex-1 border-b border-dotted border-stone-400 mx-3 mb-1.5"></div>
        <span className="font-medium text-stone-900 whitespace-nowrap">{item.preco}</span>
      </div>
    );
  };

  // Renderizador específico para itens de bebidas
  const renderDrinkItem = (item: { nome: string; preco: string; quantidade?: string }) => {
    let displayName = item.nome;
    const translatedDrink = getTranslatedDrinkName(item.nome);
    
    if (translatedDrink) {
      displayName = translatedDrink;
    } else {
      // Se for uma cerveja de garrafa
      const breweryBrands = ["Heineken", "Super Bock", "Especial", "Preta Doce", "Sagres 0% Álcool"];
      if (breweryBrands.includes(item.nome)) {
        displayName = `${t("cerveja_garrafa")} ${item.nome}`;
      }
    }

    return (
      <div className="flex items-center justify-between py-2">
        <div className="flex items-baseline gap-2 truncate">
          <span className="font-medium text-stone-800">{displayName}</span>
          {item.quantidade && (
            <span className="text-sm text-stone-500 font-light whitespace-nowrap">
              ({item.quantidade})
            </span>
          )}
        </div>
        <div className="flex-1 border-b border-dotted border-stone-400 mx-3 mb-1.5"></div>
        <span className="font-medium text-stone-900 whitespace-nowrap">{item.preco}</span>
      </div>
    );
  };

  return (
    <Layout title={t("menu_full_price_list")} showBackButton={true}>
      <p className="text-stone-500 mb-10 text-lg">
        {t("menu_suggestion_question")}
      </p>

      <div className="space-y-4">
        {/* SECÇÃO COMIDA */}
        <div className="border border-stone-200 rounded-lg overflow-hidden">
          <button onClick={() => toggleMain("comida")} className="w-full text-left p-4 bg-stone-50 font-serif text-2xl text-stone-900 flex justify-between items-center cursor-pointer">
            {t("menu_section_food")} <span>{openMain === "comida" ? "−" : "+"}</span>
          </button>
          {openMain === "comida" && (
            <div className="p-4 space-y-2">
              {Object.entries(menuData.comida).map(([subKey, items]) => (
                <div key={subKey} className="border-b border-stone-100 pb-2">
                  <button onClick={() => toggleSub(subKey)} className="w-full text-left font-semibold text-stone-700 py-2 flex justify-between items-center cursor-pointer">
                    {getFoodSubCategoryTitle(subKey)} <span>{openSub === subKey ? "−" : "+"}</span>
                  </button>
                  {openSub === subKey && items.map((item, i) => (
                    <div key={i}>
                      {renderItem(item, subKey)}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SECÇÃO BEBIDAS */}
        <div className="border border-stone-200 rounded-lg overflow-hidden">
          <button onClick={() => toggleMain("bebidas")} className="w-full text-left p-4 bg-stone-50 font-serif text-2xl text-stone-900 flex justify-between items-center cursor-pointer">
            {t("menu_section_drinks")} <span>{openMain === "bebidas" ? "−" : "+"}</span>
          </button>
          {openMain === "bebidas" && (
            <div className="p-4 space-y-6">
              
              {/* 1. VINHOS */}
              <div>
                <h3 className="font-semibold text-stone-700 py-2 uppercase tracking-wide border-b border-stone-200 mb-2">
                  {t("menu_cat_vines")}
                </h3>
                
                {/* Tintos */}
                <div className="pl-3 mt-3">
                  <h4 className="font-medium text-stone-600 text-sm uppercase tracking-wider mb-1">{t("menu_cat_reds")}</h4>
                  {Object.entries(menuData.bebidas.vinhos.tintos).map(([regiao, items]) => 
                    items.length > 0 && (
                      <div key={regiao} className="mb-2">
                        <span className="text-xs font-semibold text-stone-500 uppercase tracking-wide block">
                          {getWineRegionTitle(regiao)}
                        </span>
                        {items.map((item, i) => renderItem(item))}
                      </div>
                    )
                  )}
                </div>

                {/* Brancos */}
                <div className="pl-3 mt-4">
                  <h4 className="font-medium text-stone-600 text-sm uppercase tracking-wider mb-1">{t("menu_cat_whites")}</h4>
                  {Object.entries(menuData.bebidas.vinhos.brancos).map(([regiao, items]) => 
                    items.length > 0 && (
                      <div key={regiao} className="mb-2">
                        <span className="text-xs font-semibold text-stone-500 uppercase tracking-wide block">
                          {getWineRegionTitle(regiao)}
                        </span>
                        {items.map((item, i) => renderItem(item))}
                      </div>
                    )
                  )}
                </div>

                {/* Verdes e Alvarinhos */}
                {menuData.bebidas.vinhos.verdes_alvarinhos.length > 0 && (
                  <div className="pl-3 mt-4">
                    <h4 className="font-medium text-stone-600 text-sm uppercase tracking-wider mb-1">{t("menu_cat_greens_alvarinhos")}</h4>
                    {menuData.bebidas.vinhos.verdes_alvarinhos.map((item, i) => renderItem(item))}
                  </div>
                )}

                {/* Rosés */}
                {menuData.bebidas.vinhos.rosés.length > 0 && (
                  <div className="pl-3 mt-4">
                    <h4 className="font-medium text-stone-600 text-sm uppercase tracking-wider mb-1">{t("menu_cat_roses")}</h4>
                    {menuData.bebidas.vinhos.rosés.map((item, i) => renderItem(item))}
                  </div>
                )}

                {/* Espumantes */}
                {menuData.bebidas.vinhos.espumantes.length > 0 && (
                  <div className="pl-3 mt-4">
                    <h4 className="font-medium text-stone-600 text-sm uppercase tracking-wider mb-1">{t("menu_cat_sparkling")}</h4>
                    {menuData.bebidas.vinhos.espumantes.map((item, i) => renderItem(item))}
                  </div>
                )}
              </div>

              {/* 2. Cervejaria */}
              {menuData.bebidas.cervejaria && menuData.bebidas.cervejaria.length > 0 && (
                <div>
                  <h3 className="font-semibold text-stone-700 py-2 uppercase tracking-wide border-b border-stone-200 mb-2">
                    {t("menu_cat_brewery")}
                  </h3>
                  {menuData.bebidas.cervejaria.map((item, i) => renderDrinkItem(item))}
                </div>
              )}

              {/* 3. Restantes bebidas */}
              {Object.entries(menuData.bebidas).map(([catKey, catItems]) => {
                if (catKey === "vinhos" || catKey === "cervejaria") return null;
                
                const items = catItems as any[];
                if (items.length === 0) return null;

                const translationKey = `menu_cat_${catKey}`;

                return (
                  <div key={catKey}>
                    <h3 className="font-semibold text-stone-700 py-2 uppercase tracking-wide border-b border-stone-200 mb-2">
                      {t(translationKey)}
                    </h3>
                    {items.map((item, i) => renderDrinkItem(item))}
                  </div>
                );
              })}

            </div>
          )}
        </div>
      </div>

      {/* MODAL PARA MOSTRAR A FOTO DO PRATO */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-2 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <h3 className="font-serif text-2xl text-stone-900 mb-4 pr-8">{selectedImage.nome}</h3>
            
            <div className="w-full h-72 bg-stone-100 rounded-xl overflow-hidden flex items-center justify-center border border-stone-200">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.nome}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                  if (target.nextElementSibling) {
                    (target.nextElementSibling as HTMLElement).style.display = 'block';
                  }
                }}
              />
              <div className="hidden text-stone-400 text-sm text-center p-4">
                Fotografia indisponível no momento.
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}