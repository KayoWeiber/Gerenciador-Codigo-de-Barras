import { Route, Routes } from "react-router-dom";
import Layout from "../components/pages/layout.tsx";
import CadastrarCOD from "../components/pages/cadastrarCOD";
import PesquisarCOD from "../components/pages/pesquisarCOD";

export default function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Layout/>} />
        
        {/* Rotas com Layout fixo */}
        <Route element={<Layout />}>
          <Route path="/cadastrarCOD" element={<CadastrarCOD />}/>
          <Route path="/pesquisarCOD" element={<PesquisarCOD/>} />
        </Route>
      </Routes>
    );
  }