import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../Produtos/NovoProduto.css'
import voltar from '../../imagens/arrow-left-circle.svg'

function NovoProduto() {

    const navigate = useNavigate()

    const [produto, setProduto] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [marca, setMarca] = useState('')
    const [unidade, setUnidade] = useState('')

    const [erro, setErro] = useState('')
    const [sucesso, setSucesso] = useState('')


    const criaProduto = (event) => {
        event.preventDefault();

        if (produto.trim === '' || quantidade.trim === '' || marca.trim === '' || unidade === '') {
            setErro('Todos os campos são obrigatórios!')
            setSucesso('')
            return
        }

        // Cria um novo objeto
        const novoItem = {
            produto,
            quantidade,
            marca,
            unidade,
        }

        // Seleciona os itens já existentes no Local Storage
        const itemExistente = localStorage.getItem('meusProdutos')

        // Escreve um item existente como JSON ou inicia um array vazio 
        const itemParse = itemExistente ? JSON.parse(itemExistente) : []

        // Adiciona o novo item em um array
        itemParse.push(novoItem)

        // Armazena o array no local storage
        localStorage.setItem('meusProdutos', JSON.stringify(itemParse))

        // Limpa os dados do formulário
        setProduto('')
        setQuantidade('')
        setMarca('')
        setUnidade('')

        // Mensagem de produto adicionado
        setErro('')
        setSucesso('Produto adicionado')

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
                        <input type="text" className="form-control" placeholder="Marca" aria-label="Marca" value={marca} onChange={(e) => setMarca(e.target.value)} />
                    </div>
                </div>

                <div className="col">
                    <div className="col">
                        <input type="number" className="form-control" placeholder="Quantidade" aria-label="Quantidade" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
                    </div>
                    <div className="col">
                        <select className="form-select" aria-label="Default select example" value={unidade} onChange={(e) => setUnidade(e.target.value)}>
                            <option>Unidade</option>
                            <option value="UN">UN</option>
                            <option value="MT">MT</option>
                            <option value="KG">KG</option>
                        </select>
                    </div>
                </div>

            </form >
            <div className="container d-flex justify-content-center">
                {erro && <p className="error">{erro}</p>}
                {sucesso && <p className="success">{sucesso}</p>}
            </div>
            <div className="container d-flex justify-content-between container-botao">
                <button type="button" className="btn btn-success" onClick={criaProduto}>Adicionar</button >
                <button type="button" className="btn btn-danger" onClick={() => navigate('/produtos')}>Cancelar</button>
            </div >

        </>
    )
}

export default NovoProduto