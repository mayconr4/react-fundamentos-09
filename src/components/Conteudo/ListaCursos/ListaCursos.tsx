import cursos from "../../../data/cursos";
import Artigo from "../Artigo/Artigo";
import estilos from "./ListaCurso.module.css";

type ListaCursosProps = {
  categoria: null | string;
};

export default function ListaCursos({ categoria }: ListaCursosProps) {
  const cursosPorCategoria = categoria
    ? cursos.filter((curso) => curso.categoria === categoria)
    : cursos;
  return (
    <>
      <p>
        Quantidade: <b>{cursosPorCategoria.length}</b>
      </p>
      <div className={estilos.artigo}>
        {cursosPorCategoria.map((curso) => (
          <Artigo dados={curso} key={curso.id} />
        ))}
      </div>
    </>
  );
}
