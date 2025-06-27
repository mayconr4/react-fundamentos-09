import { StyledDicaDoDia } from "./styles";

export default function DicaDoDia() {
  return (
    <StyledDicaDoDia>
      <h3>Dica do Dia</h3>
      <p>
        Você pode combinar diferentes formas de estilização em um projeto React.
        Neste exemplo, estamos usando <b>styled-components</b>, uma famosa
        biblioteca para CSS In JS.
      </p>
      <p className="site-oficial">
        Site oficial:{" "}
        <a href="https://styled-components.com/" target="_blank">
          Styled Components
        </a>
      </p>
    </StyledDicaDoDia>
  );
}
