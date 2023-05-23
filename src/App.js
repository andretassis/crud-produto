import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Produtos from './componentes/Produtos/Produtos'
import NovoProduto from './componentes/Produtos/NovoProduto'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path='/novo-produto' element={<NovoProduto />} />
          <Route path='/edit-produto/:id' element={<NovoProduto />} />
        </Routes>
      </Router>


    </>
  );
}

export default App;
