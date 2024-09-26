import './Cad_colab.css'
import Footer from "../../components/Footer/Footer"
import LogoNv from '../../assets/images/LogoNv.png'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Cad_colab = () => {
    return (
        <div>
            <div class="header" id="header">
                <div class="logo_header">
                    <Link to={"/main"}><img src={LogoNv} class="logo_header" /></Link>
                </div>
            </div>
                <div className='boxform'>
                    <form className='logform' action="index.html" id="cad_func" method="POST" onsubmit="return verificar()">
                        <legend>Cadastro de Colaborador</legend>
                        <br />
                        <label for="Nome">Nome</label>
                        <br />
                        <input type="text" id="Nome" size="15" maxlength="44" required="required"/>                      
                        <br/> <br/>
                        <label for="senha_func">Senha:</label>
                        <br/>
                        <input type="text" id="senha_func" size="16" maxlength="15" required="required"/>
                        <br /> <br />
                        <label for="RE">RE</label>
                        <br/>
                        <input type="text" id="RE" size="16" maxlength="6" minLength="6" required="required"/>
                        <br /> <br />
                        <select id="lstper">
                        <option value="ADM"> ADMIN </option>
                        <option selected="selected" value="TECNICO"> TECNICO </option>
                        <option value="OPERADOR"> OPERADOR </option>
                        </select>
                        <br /><br />
                        <input className='btncad' type="submit" value="ENVIAR"/>
                        <Link to={'/colab'}><input className='btnvoltar' type="button" value="Voltar"/></Link> 
                    </form>
                </div>
            <Footer />
        </div>
    )
}
export default Cad_colab