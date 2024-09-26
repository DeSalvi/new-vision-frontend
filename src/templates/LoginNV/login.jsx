import './Loginnv.css'
import Footer from "../../components/Footer/Footer"
import LogoNv from '../../assets/images/LogoNv.png'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Loginnv = () => {
    return (
        <div>
            <div class="header" id="header">
                <div class="logo_header">
                    <Link to={"/main"}><img src={LogoNv} class="logo_header" /></Link>
                </div>
            </div>
                <div className='boxform'>
                    <form className='logform' action="index.html" id="cad_func" method="POST" onsubmit="return verificar()">
                            <legend>Login Colaborador</legend>
                            <br />
                            <label for="re_func">RE:</label>
                            <br />
                            <input type="text" id="re_func" size="15" maxlength="5" required="required" />
                            <br /> <br />
                            <label for="senha_func">Senha:</label>
                            <br />
                            <input type="text" id="senha_func" size="16" maxlength="15" required="required" />
                            <br /> <br />
                            <label for="conferesenha">Confirmar senha:</label>
                            <br />
                            <input type="text" id="conferesenha" size="16" maxlength="15" required="required" />
                            <br /> <br />
                            <input className='logbtn' type="submit" value="ENVIAR" />
                            <Link to={"/main"}><input className='backbtn' type="button" value="NÃO COLAB"/></Link>
                    </form>
                </div>
            <Footer />
        </div>
    )
}
export default Loginnv