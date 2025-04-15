import React from "react";
import bolo from "../Imagens/bolo-de-chocolate-e-framboesa.png";
import biscoitos from "../Imagens/biscoitos.png";
import samosas from "../Imagens/samosas-douradas-fritas.png";
import torta from "../Imagens/torta-umble.png";
import sanduiche from "../Imagens/sanduiche-italiana.png";
import "../Styles/Acompanhamentos.scss";

function Acompanhamentos() {
  return (
    <div className="acompanhamentos" id="Acompanhamentos">
      <h2>Acompanhamentos</h2>
      <div className="container-colunas">
        {" "}
        {/* Novo contêiner para as duas colunas */}
        <ul className="coluna-1">
          <li>
            <div className="produto-card">
              <div className="imagem-produto">
                <img src={bolo} alt="bolo" />
              </div>
              <div className="detalhes-produto">
                <div className="titulo-preco">
                  <hr />
                  <span className="titulo">
                    Bolo de Chocolate com Framboesa
                  </span>
                </div>
                <div className="ingredientes">
                  <span>
                    farinha de trigo, açúcar, chocolate em pó, ovos, leite,
                    manteiga, sal, café instantâneo, framboesa e creme de leite.
                  </span>
                </div>
                <div className="preco">R$ 4,50</div>
              </div>
            </div>
          </li>
          <li>
            <div className="produto-card">
              <div className="imagem-produto">
                <img src={biscoitos} alt="biscoitos" />
              </div>
              <div className="detalhes-produto">
                <div className="titulo-preco">
                  <hr />
                  <span className="titulo">Cookies com gotas de chocolate</span>
                </div>
                <div className="ingredientes">
                  <span>
                    farinha de trigo, manteiga, açúcar, ovos, gotas de
                    chocolate, açúcar de confeiteiro
                  </span>
                </div>
                <div className="preco">R$ 4,50</div>
              </div>
            </div>
          </li>
          <li>
            <div className="produto-card">
              <div className="imagem-produto">
                <img src={samosas} alt="samosas" />
              </div>
              <div className="detalhes-produto">
                <div className="titulo-preco">
                  <hr />
                  <span className="titulo">Samosas indianas</span>
                </div>
                <div className="ingredientes">
                  <span>
                    Farinha de trigo, Ghee, Água, Sal, Ajwain, Batata, Ervilha,
                    Cebola, Alho, Gengibre
                  </span>
                </div>
                <div className="preco">R$ 4,50</div>
              </div>
            </div>
          </li>
        </ul>
        <ul className="coluna-2">
          <li>
            <div className="produto-card">
              <div className="imagem-produto">
                <img src={torta} alt="torta" />
              </div>
              <div className="detalhes-produto">
                <div className="titulo-preco">
                  <hr />
                  <span className="titulo">Torta Umble</span>
                </div>
                <div className="ingredientes">
                  <span>
                    miúdos de cervo, frutas secas, especiarias, vinho, ervas,
                    farinha
                  </span>
                </div>
                <div className="preco">R$ 4,50</div>
              </div>
            </div>
          </li>
          <li>
            <div className="produto-card">
              <div className="imagem-produto">
                <img src={sanduiche} alt="sanduiche" />
              </div>
              <div className="detalhes-produto">
                <div className="titulo-preco">
                  <hr />
                  <span className="titulo">Sanduíche Italiana</span>
                </div>
                <div className="ingredientes">
                  <span>
                    pão, mortadela, mozzarela, tomate, alface, rúcula, azeite,
                    orégano, pimenta do reino, sal, limão, queijo parmesão,
                  </span>
                </div>
                <div className="preco">R$ 4,50</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Acompanhamentos;
export { Acompanhamentos };
