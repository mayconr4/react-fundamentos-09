import estilos from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={estilos.menu}>
      <a href="">Home</a>
      <a href="">Sobre</a>
      <a href="">Contato</a>
    </nav>
  );
}
