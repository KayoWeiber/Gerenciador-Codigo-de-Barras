import { useState } from "react";
import ApiScanner from "../apiScanner";
import { HiOutlineCamera } from "react-icons/hi";
import { adicionarProduto} from '../BD'
import { useNavigate } from "react-router-dom";

export default function CadastrarCOD() {
  const Navigate = useNavigate();
  const [codigo, setCodigo] = useState("");
  const [descricao, setDescricao] = useState("");

  const [showScanner, setShowScanner] = useState(false);

  const handleDetected = (value: string) => {
    setCodigo(value);
    setShowScanner(false); //fecha o scanner após detectar
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-2xl font-bold mb-2">Cadastrar Código de Barras</h1>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <div className="relative">
          <input
            type="text"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            placeholder="Código de Barras"
            className="border border-gray-500 rounded-lg p-2 w-full pr-10"
          />
          <HiOutlineCamera
            className="absolute right-6 w-6 h-6 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={() => setShowScanner(true)}
          />
        </div>

        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descrição"
          className="border border-gray-300 rounded-lg p-2"
        />

        <button
          type="submit"
          className="bg-red-600 text-white rounded-lg p-2 hover:bg-red-900 transition-colors" onClick={(e) => {
            e.preventDefault(); 
            const produto = {
              codigo: codigo,
              descricao: descricao, 
            };
            adicionarProduto(produto); 
            setCodigo("");
            setDescricao(""); 
            alert("Produto cadastrado com sucesso!"); 
            Navigate("/");
             
          }}
        >
          Cadastrar
        </button>
      </form>

      {/*Scanner aparece quando showScanner é true */}
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
