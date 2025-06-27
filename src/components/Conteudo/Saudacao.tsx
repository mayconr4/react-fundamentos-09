type SaudacaoProps = {
  nome?: string;
  classe: string;
};

export default function Saudacao({
  nome = "Visitante",
  classe,
}: SaudacaoProps) {
  // callback chamada pelo evento
  const exemploEvento = () => {
    alert("Evento com chamada de ccallback externa");
  };

  return (
    <p className={`my-2 rounded text-center ${classe}`}>
      Bem-vindo(a) <b onClick={exemploEvento}>{nome}</b>
    </p>
  );
}
