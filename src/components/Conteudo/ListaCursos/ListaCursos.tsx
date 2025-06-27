import cursos from "../../../data/cursos";
import Artigo from "../Artigo/Artigo";
import estilos from "./ListaCurso.module.css";
export default function ListaCursos() {
  return (
    <div className={estilos.artigo}>
      {cursos.map((curso) => (
        <Artigo dados={curso} key={curso.id} />
      ))}
    </div>
  );
}
