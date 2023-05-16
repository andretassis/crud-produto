import { useNavigate } from 'react-router-dom'
import { produto, marca, quantidade, unidade } from '../Produtos/NovoProduto'
import '../Produtos/Produtos.css'

function Produtos() {

    const navigate = useNavigate()

    return (
        <>
            <div className="container d-flex justify-content-center">
                <button type="button" className="btn btn-outline-primary" onClick={() => navigate('/novo-produto')}>Novo produto</button>
            </div>
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Produto</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col">Unidade</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Eletrodo 6013 2,5 mm</td>
                            <td>ESAB</td>
                            <td>150</td>
                            <td>KG</td>
                            <td>Editar</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Produtos