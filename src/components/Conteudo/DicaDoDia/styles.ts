import styled from "styled-components";

// Simulando uma mudança de tema
let tema: boolean = false;

export const StyledDicaDoDia = styled.section`
  // Avaliando se o tema simulado é true (aplica verde) ou false (aplica azul)
  background-color: ${tema ? " #bce8bc" : "lightblue"};
  border-left: 5px solid darkgreen;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 4px;

  h3 {
    margin-top: 0;
    color: darkgreen;
  }

  p {
    color: green;
    font-size: 1.1rem;
  }

  .site-oficial {
    background-color: white;
    text-align: center;
    padding: 0.4rem;

    a {
      text-decoration: none;
      color: darkgreen;
      font-weight: bold;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }
`;
