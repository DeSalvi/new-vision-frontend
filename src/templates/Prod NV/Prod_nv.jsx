import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import { useEffect, useState } from "react"
import ProdutoService from "../../services/ProdutoService"

const Prod_nv = () => {
    const navigate = useNavigate();
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        ProdutoService.findAll().then(
            (response) => {
                const produtos = response.data;
                setProdutos(produtos);
                console.log(produtos);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

    const lerUsuario = (id) => {
        navigate(`/produtoler/` + id)
    }
    return (
        <div className="d-flex">
        <Sidebar />
        <div className="p-3 w-100">
            <Header
                goto={'/main'}
                title={'Produtos'}
                logo={logo}
            />
                <section className="p-2 m-2 shadow-lg">
                    <div className="table-wrapper">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Data emissão</th>
                                    <th scope="col">Emissor</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Telefone</th>
                                    <th scope="col">Texto</th>
                                    <th scope="col">Conteudo</th>
                                    <th scope="col">Ver conteudo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {produtos?.map((produto) => (
                                    <tr key={produto.id}>
                                        <td scope="row">{produto.nome}</td>
                                        <td>{produto.descricao}</td>
                                        <td>{produto.codigoBarras}</td>
                                        <td>{produto.preco}</td>
                                        <td>{produto.categoria.nomeCat}</td>
                                        <td>{produto.statusProd}</td>
                                        <td>
                                            <button type="button" onClick={() => lerProduto(produto.id)}
                                                className="btn btn-sm btn-warning">
                                                <i></i>Abrir
                                            </button>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Prod_nv
