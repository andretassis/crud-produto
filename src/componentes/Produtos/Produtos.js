import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../Produtos/Produtos.css'
import trash from '../../imagens/trash3.svg'
import pencil from '../../imagens/pencil.svg'

function Produtos() {

    const navigate = useNavigate()

    const [meusProdutos, setMeusProdutos] = useState([])

    useEffect(() => {
        const meusProdutos = JSON.parse(localStorage.getItem('meusProdutos'))
        if (meusProdutos) {
            setMeusProdutos(meusProdutos)
        }
    }, [])

    const apagarProduto = () => {
        console.log(meusProdutos.filter)
    }

    return (
        <>
            <div className="container d-flex justify-content-center">
                <button type="button" className="btn btn-outline-primary" onClick={() => navigate('/novo-produto')}>Novo produto</button>
            </div>
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Produto</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col">Unidade</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {meusProdutos.map((item, index) => (
                            <tr key={index}>
                                <td>{item.produto}</td>
                                <td>{item.marca}</td>
                                <td>{item.quantidade}</td>
                                <td>{item.unidade}</td>
                                <td><img src={trash} alt="Deletar" className="deletar-editar" onClick={apagarProduto} /></td>
                                <td><img src={pencil} alt="Deletar" className="deletar-editar" onClick={() => navigate('/edit-produto')} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Produtos