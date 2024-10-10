import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import '../../components/CSS/Home.css'
import logo from '../../assets/images/home.png'
import { useEffect, useState } from "react"
import UsuarioService from "../../services/UsuarioService"
import Sidebar from "../../components/Menu/Sidebar"

const Colab = () => {

    const currentUser = UsuarioService.getCurrentUser();

    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]);

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
        navigate(`/mensagemler/` + id)
    }
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/home'}
                    title={'Colaboradores'}
                    logo={logo}
                />
                <section className="d-flex justify-content-around align-items-center m-2 py-5 shadow-lg">
                    {
                        currentUser.nivelAcesso == "ADMIN" ?
                            <Link to={'/cadcolab'} className="btnnew">
                                Novo
                            </Link> : <></>
                    }

                    <Link to={'/colabnv'} className="btnlist">
                        Lista
                    </Link>
                </section>
            </div>
        </div>
    )
}

export default Colab