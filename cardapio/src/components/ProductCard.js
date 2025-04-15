import React from "react";
import latte from "../imagens/arte-do-latte-num-copo-de-papel-cafe-para-levar-bebida-bebida-com-cafeina_632498-48642-removebg-preview.png";
import cha from "../imagens/cha-aromatico-com-especiarias-em-xicara-de-vidro-canela-star-anise_84443-43229-removebg-preview.png";
import espresso from "../imagens/colecao-de-bebidas-de-cafe-gelado_632498-19381-removebg-preview (1).png"; // Importe a imagem do espresso

function ListaDeProdutos() {
  const produtos = [
    {
      nome: "Latte Cremoso",
      preco: 12.5,
      imagem: latte, // Importe a imagem diretamente
      descricaoImagem: "Foto de um Latte Cremoso",
    },
    {
      nome: "Cappuccino Clássico",
      preco: 10.0,
      imagem: cha, // Importe a imagem diretamente
      descricaoImagem: "Foto de um Cappuccino Clássico",
    },
    {
      nome: "Espresso Intenso",
      preco: 8.0,
      imagem: espresso, // Use a imagem importada
      descricaoImagem: "Foto de um Espresso Intenso",
    },
    // ... outros produtos
  ];

  return (
    <div className="lista-de-produtos">
      {produtos.map((produto, index) => (
        <ProdutoCard
          key={index} // Importante para o React identificar cada item
          nome={produto.nome}
          preco={produto.preco}
          imagem={produto.imagem}
          descricaoImagem={produto.descricaoImagem} // Adicione uma prop para a descrição da imagem
        />
      ))}
    </div>
  );
}

function ProdutoCard(props) {
  return (
    <div className="produto-card">
      {/* A primeira imagem 'latte' parece ser estática. Considere removê-la ou torná-la dinâmica também */}
      {/* <img src={latte} alt="Descrição da imagem" /> */}
      <img src={props.imagem} alt={props.descricaoImagem || props.nome} />
      {/* Use a descrição da imagem ou o nome como fallback */}
      <h3>{props.nome}</h3>
      <p>Preço: R$ {props.preco.toFixed(2)}</p>
      {/* Formate o preço para duas casas decimais */}
      <button>Ver Detalhes</button>
    </div>
  );
}

export default ListaDeProdutos;
