import '../Fornecedores/Fornecedores.css'

function Fornecedores() {
    return (
        <>
            <div className="container d-flex justify-content-center">
                <button type="button" class="btn btn-outline-primary">Novo fornecedor</button>
            </div>
            <div className="container">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Fornecedor</th>
                            <th scope="col">CNPJ</th>
                            <th scope="col">Telefone</th>
                            <th scope="col"></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Casa das Soldas e Abrasivos Vitória LTDA</td>
                            <td>36.374.817/0001-77</td>
                            <td>(27) 4009-0277</td>
                            <td>Editar</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>LF Vidal - Casa dos Abrasivos e Ferramentas</td>
                            <td>18.173.806/0001-05</td>
                            <td>(12) 3456-7890</td>
                            <td>Editar</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Nome da Empresa LTDA</td>
                            <td>01.234.567/0001-58</td>
                            <td>(12) 3456-7890</td>
                            <td>Editar</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Fornecedores