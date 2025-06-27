import estilos from "./Artigo.module.css";
import type { Curso } from "../../../types/Curso";
import { useState } from "react";

type ArtigoProps = {
  dados: Curso;
};

export default function Artigo({ dados }: ArtigoProps) {
  // Podemos receber a prop dados para depois desestruturar:
  const [cor, setCor] = useState(" #f9f9f9");

  const alterarCor = () => {
    setCor((valorCor) => {
      return valorCor === " #f9f9f9" ? "royalblue" : " #f9f9f9";
    });
  };
  const { titulo, preco, categoria } = dados;
  return (
    <article
      className={estilos.artigo}
      onClick={alterarCor}
      style={{ backgroundColor: cor }}
    >
      <h3> {titulo} </h3>
      <p>
        <b>Categoria:</b> {categoria}
      </p>
      <p>
        <b>Preço:</b> {preco}
      </p>
    </article>
  );
}
