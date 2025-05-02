import { CgAddR, CgSearch } from "react-icons/cg";

export default function Home() {
    return (
        <div className="flex flex-col items-center gap-8">
            <h1 className="text-2xl font-bold mb-8">Gerenciador de Códigos de Barras</h1>
            
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-2xl">
                {/* Card 1 */}
                <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center hover:shadow-lg transition-shadow cursor-pointer flex-1">
                    <CgAddR className="h-8 w-8 text-gray-500 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">Cadastrar código de barras</h2>
                    <p className="text-gray-600 text-center">Adicione um novo código de barras ao sistema.</p>
                </div>
                {/* Card 2 */}
                <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center hover:shadow-lg transition-shadow cursor-pointer flex-1">
                    <CgSearch className="h-8 w-8 text-gray-500 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">Pesquisar</h2>
                    <p className="text-gray-600 text-center">Encontre códigos de barras já cadastrados.</p>
                </div>
            </div>
        </div>
    );
}
