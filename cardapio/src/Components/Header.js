import "../Styles/Header.scss";
import logo_cafe from "../Imagens/logo_cafe.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo_cafe} alt="logo" />

      <nav className="nav">
        <ul>
          <li>
            <a href="#inicio">Início</a>
          </li>
          <li>
            <a href="#Cafés quentes">Cafés quentes</a>
          </li>
          <li>
            <a href="#Cafés frios">Cafés frios</a>
          </li>
          <li>
            <a href="#Chás quentes">Chás quentes</a>
          </li>
          <li>
            <a href="#Chás frios">Chás frios</a>
          </li>
          <li>
            <a href="#Acompanhamentos">Acompanhamentos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
