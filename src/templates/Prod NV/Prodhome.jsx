import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"

import logo from '../../assets/images/home.png'
import { useEffect, useState } from "react"
import UsuarioService from "../../services/UsuarioService"
import Sidebar from "../../components/Menu/Sidebar"

const Prodhome = () => {
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
                goto={'/main'}
                title={'Mensagem'}
                logo={logo}
            />
                <section className="d-flex justify-content-around align-items-center m-2 py-5 shadow-lg">
                    <Link to={'/cadprod'} className="btn btn-primary px-5 py-3">
                    Novo
                    </Link>
                    <Link to={'/prodnv'} className="btn btn-warning px-5 py-3">
                    Lista
                    </Link>
                </section>
            </div>
        </div>
    )
}

export default Prodhome