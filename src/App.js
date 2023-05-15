import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './componentes/NavBar'
import Produtos from './componentes/Produtos'
import Fornecedores from './componentes/Fornecedores'
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
          <Route path="/Fornecedores" element={<Fornecedores />} />
        </Routes>
      </Router>


    </>
  );
}

export default App;
