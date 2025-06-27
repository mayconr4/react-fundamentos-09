import estilos from "./Artigo.module.css";
import type { Curso } from "../../../types/Curso";

type ArtigoProps = {
  dados: Curso;
};

export default function Artigo({ dados }: ArtigoProps) {
  // Podemos receber a prop dados para depois desestruturar:
  const { titulo, preco, categoria } = dados;
  return (
    <article className={estilos.artigo}>
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
