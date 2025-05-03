import { useState } from "react";
import ApiScanner from "../apiScanner";
import { HiOutlineCamera } from "react-icons/hi";
import { buscarProduto, Produto } from "../BD";

export default function PesquisarCOD() {
  const [codigo, setCodigo] = useState("");
  const [showScanner, setShowScanner] = useState(false);
  const [produtoEncontrado, setProdutoEncontrado] = useState<Produto | null>(null);
  const [buscou, setBuscou] = useState(false); // Para saber se já buscou

  const handleDetected = (value: string) => {
    setCodigo(value);
    setShowScanner(false);
    setProdutoEncontrado(null);
    setBuscou(false);
  };

  const handlePesquisar = (e: React.FormEvent) => {
    e.preventDefault();
    const resultado = buscarProduto(codigo);
    setProdutoEncontrado(resultado ?? null);
    setBuscou(true);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-2xl font-bold mb-2">Pesquisar Código de Barras</h1>
      <form className="flex flex-col gap-4 w-full max-w-md" onSubmit={handlePesquisar}>
        <div className="relative">
          <input
            type="text"
            value={codigo}
            onChange={(e) => {
              setCodigo(e.target.value);
              setProdutoEncontrado(null);
              setBuscou(false);
            }}
            placeholder="Código de Barras"
            className="border border-gray-500 rounded-lg p-2 w-full pr-10"
          />
          <HiOutlineCamera
            className="absolute right-6 w-6 h-6 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={() => setShowScanner(true)}
          />
        </div>
        <button
          type="submit"
          className="bg-red-600 text-white rounded-lg p-2 hover:bg-red-900 transition-colors"
        >
          Pesquisar
        </button>
      </form>

      {/* Exibe resultado da busca */}
      {produtoEncontrado ? (
        <div className="mt-4 p-4 border rounded bg-gray-100 w-full max-w-md">
          <div><strong>Código:</strong> {produtoEncontrado.codigo}</div>
          <div><strong>Descrição:</strong> {produtoEncontrado.descricao}</div>
        </div>
      ) : buscou && !produtoEncontrado ? (
        <div className="mt-4 text-red-600">Produto não encontrado.</div>
      ) : null}

      {/* Scanner aparece quando showScanner é true */}
      {showScanner && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-700 text-xl"
              onClick={() => setShowScanner(false)}
              aria-label="Fechar"
            >
              ×
            </button>
            <ApiScanner onDetected={handleDetected} />
          </div>
        </div>
      )}
    </div>
  );
}
