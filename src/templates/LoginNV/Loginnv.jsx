import Footer from "../../components/Footer/Footer"
import './Loginnv.css'
import LogoNv from '../../assets/images/LogoNv.png'

const Loginnv = () => {
    return (
        <div>
            <div class="header" id="header">
                <div class="logo_header">
                    <a href="index.html"><img src={LogoNv} class="logo_header" /></a>
                </div>
            </div>
            <div class="box ">
                <form action="index.html" id="cad_func" method="POST" onsubmit="return verificar()">
                    <fieldset id="fds1" >
                        <legend>Login</legend>
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
                        <input type="submit" value="ENVIAR" />
                    </fieldset>
                </form>
            </div>
            <div class="cad">
                <a class="btncad" href="cadastro.html">00000</a>
                <br />
                <a class="btncadprod" href="cad_produto.html">11111</a>
            </div>
            <div />
            <Footer />
        </div>
    )
} 
export default Loginnv