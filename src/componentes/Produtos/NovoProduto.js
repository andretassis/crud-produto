import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../Produtos/NovoProduto.css'
import voltar from '../../imagens/arrow-left-circle.svg'

function NovoProduto() {

    const navigate = useNavigate()

    const [produto, setProduto] = useState('')
    const [quantidade, setQuantidade] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        const novoItem = {
            produto,
            quantidade,
        }

        const itemExistente = localStorage.getItem('meusItens')

        const itemParse = itemExistente ? JSON.parse(itemExistente) : []

        itemParse.push(novoItem)

        localStorage.setItem('meusItens', JSON.stringify(itemParse))

        setProduto('')
        setQuantidade('')
    }
    return (
        <>
            <div className="container d-flex justify-content-end">
                <img className="imagem-voltar" src={voltar} alt="Voltar" onClick={() => navigate('/produtos')} />
            </div>
            <form className="formulario d-flex justify-content-center">
                <div className="col formulario-estrutura">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Produto" aria-label="Produto" value={produto} onChange={(e) => setProduto(e.target.value)} />
                    </div>

                </div>

                <div className="col">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Quantidade" aria-label="Quantidade" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
                    </div>

                </div>
            </form >

            <div className="container d-flex justify-content-between container-botao">
                <button type="button" className="btn btn-success" onClick={handleSubmit}>Adicionar</button >
                <button type="button" className="btn btn-danger" onClick={() => navigate('/produtos')}>Cancelar</button>
            </div >

        </>
    )
}

export default NovoProduto