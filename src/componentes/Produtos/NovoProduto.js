import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../Produtos/NovoProduto.css'
import voltar from '../../imagens/arrow-left-circle.svg'

function NovoProduto() {

    let defaultObject = {
        produto: '',
        quantidade: '',
        marca: '',
        unidade: '',
    }

    const navigate = useNavigate()

    const [cadastroProduto, setCadastroProduto] = useState(defaultObject)
    const [erro, setErro] = useState('')
    const [sucesso, setSucesso] = useState('')

    const { id } = useParams()

    useEffect(() => {
        if (id != null) {
            let lista = JSON.parse(localStorage.getItem('meusProdutos'))

            if (lista.length > 0) {
                let item = lista[id]

                if (item != null) {
                    setCadastroProduto({
                        produto: item.produto,
                        quantidade: item.quantidade,
                        marca: item.marca,
                        unidade: item.unidade,
                    })
                }
            }
        }

    }, [])


    function handleInputChange(event) {
        const { name, value } = event.target;
        let valor = value;
        setCadastroProduto({ ...cadastroProduto, [name]: valor });
    }


    const criaProduto = (event) => {
        event.preventDefault();

        if (cadastroProduto.produto === '' || cadastroProduto.quantidade === '' || cadastroProduto.marca === '' || cadastroProduto.unidade === '') {
            setErro('Todos os campos são obrigatórios!')
            setSucesso('')
            return
        }

        // Seleciona os itens já existentes no Local Storage
        const itemExistente = localStorage.getItem('meusProdutos')

        // Escreve um item existente como JSON ou inicia um array vazio 
        const itemParse = itemExistente ? JSON.parse(itemExistente) : []

        // Adiciona o novo item em um array
        if (id == null) {
            itemParse.push(cadastroProduto)
        } else {
            itemParse[id] = cadastroProduto
        }

        // Armazena o array no local storage
        localStorage.setItem('meusProdutos', JSON.stringify(itemParse))

        // Limpa os dados do formulário
        setCadastroProduto(defaultObject)

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
                        <input type="text" className="form-control" placeholder="Produto" aria-label="Produto" value={cadastroProduto.produto} name="produto" onChange={handleInputChange} />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Marca" aria-label="Marca" value={cadastroProduto.marca} name="marca" onChange={handleInputChange} />
                    </div>
                </div>

                <div className="col">
                    <div className="col">
                        <input type="number" className="form-control" placeholder="Quantidade" aria-label="Quantidade" value={cadastroProduto.quantidade} name="quantidade" onChange={handleInputChange} />
                    </div>
                    <div className="col">
                        <select className="form-select" aria-label="Default select example" value={cadastroProduto.unidade} name="unidade" onChange={handleInputChange}>
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