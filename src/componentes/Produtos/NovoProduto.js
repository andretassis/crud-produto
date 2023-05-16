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

        // Cria um novo objeto
        const novoItem = {
            produto,
            quantidade,
        }

        // Seleciona os itens já existentes no Local Storage
        const itemExistente = localStorage.getItem('meusItens')

        // Escreve um item existente como JSON ou inicia um array vazio 
        const itemParse = itemExistente ? JSON.parse(itemExistente) : []

        // Adiciona o novo item em um array
        itemParse.push(novoItem)

        // Armazena o array no local storage
        localStorage.setItem('meusItens', JSON.stringify(itemParse))

        // Limpa os dados do formulário
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
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Marca" aria-label="Marca" />
                    </div>

                </div>

                <div className="col">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Quantidade" aria-label="Quantidade" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
                    </div>
                    <div className="col">
                        <select className="form-select" aria-label="Default select example">
                            <option>Unidade</option>
                            <option value="1">UN</option>
                            <option value="2">MT</option>
                            <option value="3">KG</option>
                        </select>
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