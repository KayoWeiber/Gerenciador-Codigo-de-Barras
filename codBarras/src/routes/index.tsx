import { Route, Routes } from "react-router-dom";
import Layout from "../components/pages/layout.tsx";
import CadastrarCOD from "../components/pages/cadastrarCOD";
import PesquisarCOD from "../components/pages/pesquisarCOD";
import Home from "../components/containers/home/index.tsx";

export default function AppRoutes() {
    return (
      <Routes>
        
        
        {/* Rotas com Layout fixo */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cadastrarCOD" element={<CadastrarCOD />}/>
          <Route path="/pesquisarCOD" element={<PesquisarCOD/>} />
        </Route>
      </Routes>
    );
  }