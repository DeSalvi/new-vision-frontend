import './Cad_prod.css'
import Footer from "../../components/Footer/Footer"
import LogoNv from '../../assets/images/LogoNv.png'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Cad_prod = () => {
    return (
        <div>
            <div class="header" id="header">
                <div class="logo_header">
                    <Link to={"/main"}><img src={LogoNv} class="logo_header" /></Link>
                </div>
            </div>
                <div className='boxform'>
                    <form className='logform' action="index.html" id="cad_func" method="POST" onsubmit="return verificar()">
                    <legend>Cadastro de Produtos</legend>
                <br />
                <label for="nome_prod">Nome</label>
                <br/>
                <input type="text" id="nome_prod" size="25" maxlength="50" required="required"/>
                <br /> <br />
                <label for="desc_prod">Descrição</label>
                <br/>
                <textarea name="Descricao" id="desc_prod" rows="8" cols="50" />
                <br /> <br />
                <label for="preco">Preço</label>
                <br/>
                R$ <input type="number" id="preco" size="10" maxlength="7" required="required"/>
                <br /> <br />
                <label for="img_prod">Imagem</label>
                <br/> <br/>
                <input type="file" id="img_prod" required="required"/>
                <br/> <br/>
                <label for="conferesenha">Situação</label>
                <br/>
                <input type="radio" id="msgtype" name="situacao" value="EST" checked="checked"/> Em estoque <br />
                <input type="radio" id="msgtype" name="situacao" value="BRE"/> Em breve <br />
                <input type="radio" id="msgtype" name="situacao" value="ESG"/> Esgotado
                <br /> <br />
                <input className='btncad' type="submit" value="ENVIAR"/>
                <Link to={'/prodhome'}><input className='btnvoltar' type="button" value="Voltar"/></Link>
                    </form>
                </div>
            <Footer />
        </div>
    )
}
export default Cad_prod