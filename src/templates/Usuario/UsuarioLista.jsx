import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import logo from '../../assets/images/home.png'
import { useEffect, useState } from "react"
import UsuarioService from "../../services/UsuarioService"
import Sidebar from "../../components/Menu/Sidebar"

const Colab_nv = () => {
    const currentUser = UsuarioService.getCurrentUser();
    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]);
    const [habilitar, setHabilitar] = useState(true);

    useEffect(() => {
        UsuarioService.findAll().then(
            (response) => {
                const usuarios = response.data;
                setUsuarios(usuarios);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

    const lerUsuario = (id) => {
        navigate(`/usuarioeditar/` + id)
    }
    
    useEffect(() => {
        if(currentUser.nivelAcesso == "ADMIN"){
            setHabilitar(false)
        }
    }, []);

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/colab'}
                    title={'Colaboradores'}
                    logo={logo}
                />
                <section className="p-2 m-2 shadow-lg">
                    <div className="table-wrapper">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">RE</th>
                                    <th scope="col">Nivel Acesso</th>
                                    <th scope="col">Admissão</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Abrir</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios?.map((usuario) => (
                                    <tr key={usuario.id}>
                                        <td scope="row">{usuario.nome}</td>
                                        <td>{usuario.re}</td>
                                        <td>{usuario.nivelAcesso}</td>
                                        <td>{usuario.dataCadastro}</td>
                                        <td>{usuario.statusUsuario}</td>
                                        <td>
                                            <button type="button" onClick={() => lerUsuario(usuario.id)}
                                                className="btn btn-sm btn-warning"  disabled={habilitar}>
                                                Abrir
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

export default Colab_nv