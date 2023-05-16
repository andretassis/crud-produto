import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './componentes/NavBar'
import Produtos from './componentes/Produtos/Produtos'
import NovoProduto from './componentes/Produtos/NovoProduto'
import Fornecedores from './componentes/Fornecedores/Fornecedores'
import MainPage from './componentes/MainPage'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/fornecedores" element={<Fornecedores />} />
          <Route path='/novo-produto' element={<NovoProduto />} />
        </Routes>
      </Router>


    </>
  );
}

export default App;
