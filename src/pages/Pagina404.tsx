export default function Pagina404() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 text-center px-4">
      <h2 className="text-4xl font-bold mb-4 text-red-600">Ah, que pena!</h2>
      <h3 className="text-7xl font-extrabold mb-2">Erro 404</h3>
      <p className="text-lg text-gray-600 mb-6">
        A página que você procura não foi encontrada.
      </p>
      <a
        href="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Voltar à Página Inicial
      </a>
    </section>
  );
}
