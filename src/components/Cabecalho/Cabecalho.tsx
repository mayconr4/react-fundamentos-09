import logo from "../../assets/logo-react.png";
import Menu from "./Menu/Menu";

/* Importando o módulo CSS para o componente Cabecalho */
import estilos from "./Cabecalho.module.css";
import { useState } from "react";

export default function Cabecalho() {
  /*Aqui nos definimos a chamadada de uma função especial do React: useState. Esta e outras funções iniciadas com 
  o prefixo 'use' são conhecidas como Reacts Hooks.
 
 No caso do useState, usando desestruturação
 ,criamos uma constante que representa o valor do state () titulo  eu uma função reposável por atualizar o state (setTitulo)*/
  const [titulo, setTitulo] = useState("Olá React!");

  const alternarTitulo = () => {
    setTitulo((texto) => {
      return texto === "Olá React!" ? "Experimentando state!" : "Olá React!";
    });
  };

  return (
    <header className={estilos.topoSite}>
      <h1 onClick={alternarTitulo} className={estilos.titulo}>
        <img className={estilos.logo} src={logo} alt="" /> {titulo} 😎
      </h1>
      <hr />
      <Menu />
    </header>
  );
}
