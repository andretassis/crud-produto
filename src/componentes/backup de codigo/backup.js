return (
    <>
        <div className="container d-flex justify-content-end">
            <img className="imagem-voltar" src={voltar} alt="Voltar" onClick={() => navigate('/produtos')} />
        </div>
        <form className="formulario d-flex justify-content-center" onSubmit={handleSubmit}>
            <div className="col formulario-estrutura">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Produto" aria-label="Produto" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Referência" aria-label="Referência" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Marca" aria-label="Marca" />
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

            <div className="col">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Quantidade" aria-label="Quantidade" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Estoque mínimo" aria-label="Estoque mínimo" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Estoque máximo" aria-label="Estoque máximo" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="NCM" aria-label="NCM" />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="col">
                        <input type="checkbox" className="form-check-input" id="produtoComST" name="produtoComST" />
                        <label className="form-check-label" htmlFor="produtoComST"> Produto com ST</label>
                    </div>
                </div>
            </div>
        </form >

        <div className="container d-flex justify-content-between container-botao">
            <button type="button" className="btn btn-success" onClick={handleSubmit}>Adicionar</button >
            <button type="button" className="btn btn-danger" onClick={() => navigate('/produtos')}>Cancelar</button>
        </div >

    </>
)