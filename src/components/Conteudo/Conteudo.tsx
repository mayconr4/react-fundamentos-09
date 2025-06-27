import AvisoImportante from "./AvisoImportante/AvisoImportante";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import estilos from "./Conteudo.module.css";
import Saudacao from "./Saudacao";
import ListaCursos from "./ListaCursos/ListaCursos";
import cursos from "../../data/cursos";
import { useState } from "react";

export default function Conteudo() {
  // const categorias = cursos.map((curso) => curso.categoria);

  /*Definindo state para categoria ativa/selecionada, podendo ser nulll (valor padrão, inicial)ou string (quando uma categoria for selecionada) */
  const [categoriaAtiva, setCategoriaAtiva] = useState<null | string>(null);

  const categorias = [...new Set(cursos.map((curso) => curso.categoria))];

  console.log(categorias);

  return (
    <main className={estilos.conteudo}>
      <section
        className={`${estilos.principal} ${estilos.arredondada} ${estilos.sombra}`}
      >
        <h2 className="font-bold text-lg">Fundamentos de React!</h2>
        <Saudacao nome="Tiago" classe="bg-emerald-100" />

        <p>Este é um exemplo de aplicação React.</p>

        {categorias.map((categoria) => {
          return (
            <button
              onClick={() => setCategoriaAtiva(categoria)}
              className="  bg-blue-600  hover:bg-blue-700 rounded py-1  px-2   mr-1   my-2  "
            >
              {categoria}
            </button>
          );
        })}

        {categoriaAtiva && (
          <p>
            Categoria selecionada: <b>{categoriaAtiva}</b>
          </p>
        )}

        <ListaCursos />
      </section>

      <DicaDoDia />

      <AvisoImportante />
    </main>
  );
}
