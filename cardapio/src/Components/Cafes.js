import React from "react";
import espresso from "../Imagens/espresso.png";
import macchiato from "../Imagens/macchiato.png";
import mocaccino from "../Imagens/mocaccino.png";
import latteMacchiato from "../Imagens/Latte-Macchiato.png";
import latte from "../Imagens/Café-Latte.png";
import icedCoffee from "../Imagens/Iced-Coffee.png";
import icedCreme from "../Imagens/iced-coffee-com-Creme.png";
import frappe from "../Imagens/Frappé-de-Café-com-Leite.png";
import icedAmericano from "../Imagens/Iced-Americano.png";
import capuccino from "../Imagens/Capuccino-Gelado.png";
import "../Styles/Cafes.scss";

function Cafes() {
  return (
    <div className="cafes" id="cafes">
      
      <div className="container-colunas">
        {" "}
        {/* Novo contêiner para as duas colunas */}
        <ul className="coluna-1">
        <h2>Cafés Quentes</h2>
          <li>
            <div className="produto-card">
              <div className="imagem-produto">
                <img src={espresso} alt="Café Espresso" />
              </div>
              <div className="detalhes-produto">
                <div className="titulo-preco">
                  <hr />
                  <span className="titulo">
                  Café Espresso
                  </span>
                </div>
                <div className="ingredientes">
                  <span>
                  Café torrado moído, com aroma aveludado, frutado e equilibrado.
                  </span>
                </div>
                <div className="preco">R$ 4,50</div>
              </div>
            </div>
          </li>
          <li>
            <div className="produto-card">
              <div className="imagem-produto">
                <img src={macchiato} alt="Macchiato" />
              </div>
              <div className="detalhes-produto">
                <div className="titulo-preco">
                  <hr />
                  <span className="titulo">Macchiato</span>
                </div>
                <div className="ingredientes">
                  <span>
                  Café espresso (base forte), leite vaporizado, espuma de leite e farofa crocante
                  </span>
                </div>
                <div className="preco">R$ 18,90</div>
              </div>
            </div>
          </li>
          <li>
            <div className="produto-card">
              <div className="imagem-produto">
                <img src={mocaccino} alt="Mocaccino" />
              </div>
              <div className="detalhes-produto">
                <div className="titulo-preco">
                  <hr />
                  <span className="titulo">Mocaccino</span>
                </div>
                <div className="ingredientes">
                  <span>
                  Café espresso, leite vaporizado, calda de chocolate, Chantilly e raspas de chocolate
                  </span>
                </div>
                <div className="preco">R$ 14,00</div>
              </div>
            </div>
          </li>
          <li>
            <div className="produto-card">
              <div className="imagem-produto">
                <img src={latteMacchiato} alt="Latte Macchiato" />
              </div>
              <div className="detalhes-produto">
                <div className="titulo-preco">
                  <hr />
                  <span className="titulo">
                  Latte Macchiato
                  </span>
                </div>
                <div className="ingredientes">
                  <span>
                  Leite quente vaporizado, café espresso , espuma de leite, Canela ou cacau em pó.
                  </span>
                </div>
                <div className="preco">R$ 16,80</div>
              </div>
            </div>
          </li>
          <li>
            <div className="produto-card">
              <div className="imagem-produto">
                <img src={latte} alt="Latte" />
              </div>
              <div className="detalhes-produto">
                <div className="titulo-preco">
                  <hr />
                  <span className="titulo">
                  Latte
                  </span>
                </div>
                <div className="ingredientes">
                  <span>
                  Uma dose de espresso, leite vaporizado e uma fina camada de espuma de leite
                  </span>
                </div>
                <div className="preco">R$ 18,00</div>
              </div>
            </div>
          </li>
        </ul>

        
        <ul className="coluna-2">
        <h2>Cafés Gelados</h2>
          <li>
            <div className="produto-card">
              <div className="imagem-produto">
                <img src={icedCoffee} alt="Iced Coffee" />
              </div>
              <div className="detalhes-produto">
                <div className="titulo-preco">
                  <hr />
                  <span className="titulo">Iced Coffee</span>
                </div>
                <div className="ingredientes">
                  <span>
                  Café forte espresso, leite, gelo, xarope e creme
                  </span>
                </div>
                <div className="preco">R$ 15,99</div>
              </div>
            </div>
          </li>
          <li>
            <div className="produto-card">
              <div className="imagem-produto">
                <img src={icedCreme} alt="Iced Creme" />
              </div>
              <div className="detalhes-produto">
                <div className="titulo-preco">
                  <hr />
                  <span className="titulo">Iced Creme</span>
                </div>
                <div className="ingredientes">
                  <span>
                  Café espresso bem forte, cubos de gelo, calda de caramelo ou doce de leite, creme batido com sabor tipo chantilly caramelizado e Topping (granulado e raspas de chocolate)
                  </span>
                </div>
                <div className="preco">R$ 20,80</div>
              </div>
            </div>
          </li>
          <li>
            <div className="produto-card">
              <div className="imagem-produto">
                <img src={frappe} alt="Frappe" />
              </div>
              <div className="detalhes-produto">
                <div className="titulo-preco">
                  <hr />
                  <span className="titulo">
                  Frappe
                  </span>
                </div>
                <div className="ingredientes">
                  <span>
                  Café solúvel gelado, leite gelado, gelo, xarope de caramelo e chantilly de café por cima
                  </span>
                </div>
                <div className="preco">R$ 30,00</div>
              </div>
            </div>
          </li>
          <li>
            <div className="produto-card">
              <div className="imagem-produto">
                <img src={icedAmericano} alt="Iced Americano" />
              </div>
              <div className="detalhes-produto">
                <div className="titulo-preco">
                  <hr />
                  <span className="titulo">
                  Iced Americano
                  </span>
                </div>
                <div className="ingredientes">
                  <span>
                  cold brew, gelo, leite, xarope e calda de chocolate
                  </span>
                </div>
                <div className="preco">R$ 16,90</div>
              </div>
            </div>
          </li>
          <li>
            <div className="produto-card">
              <div className="imagem-produto">
                <img src={capuccino} alt="Capuccino Gelado" />
              </div>
              <div className="detalhes-produto">
                <div className="titulo-preco">
                  <hr />
                  <span className="titulo">
                  Capuccino
                  </span>
                </div>
                <div className="ingredientes">
                  <span>
                  café solúvel, leite integral, essência de baunilha, gelo,  leite em pó, chocolate em pó, leite condensado e chantilly
                  </span>
                </div>
                <div className="preco">R$ 20,00</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cafes;
export { Cafes };
