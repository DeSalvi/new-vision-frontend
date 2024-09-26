import { Routes, Route } from "react-router-dom"
import App from "../templates/App/App"
import Home from "../templates/Home/Home"

import LoginForgotPass from "../templates/Login/LoginForgotPass"
import Login from "../templates/Login/Login"

import Mensagem from "../templates/Mensagem/Mensagem"
import MensagemLer from "../templates/Mensagem/MensagemLer"

import Usuario from "../templates/Usuario/Usuario"
import UsuarioEditar from "../templates/Usuario/UsuarioEditar"
import UsuarioNovo from "../templates/Usuario/UsuarioNovo"
import UsuariosLista from "../templates/Usuario/UsuariosLista"
import LoginNewPass from "../templates/Login/LoginNewPass"
import UsuarioPerfil from "../templates/Usuario/UsuarioPerfil"
import FaleConosco from "../templates/Mensagem/FaleConosco"
import UsuarioAlterarSenha from "../templates/Usuario/UsuarioAlterarSenha"
import Main from "../templates/Main/Main"
import Loginnv from "../templates/LoginNV/login"
import Cad_colab from "../templates/Cad Colab/Cad_colab"
import Cad_prod from "../templates/Cad Prod/Cad_prod"
import Colab_nv from "../templates/Colabs NV/Colab_nv"
import Mensagem_nv from "../templates/Mensagem_nv/Mensagem_nv"
import Prod_nv from "../templates/Prod NV/Prod_nv"
import Colab from "../templates/Colab/Colab"
import Msghome from "../templates/Mensagem_nv/Msghome"
import Prodhome from "../templates/Prod NV/Prodhome"


 

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpass" element={<LoginForgotPass />} />
        <Route path="/newpass/:id" element={<LoginNewPass/>} />

        <Route path="/mensagem" element={<Mensagem />} />
        <Route path="/mensagemler/:id" element={<MensagemLer />} />
        <Route path="/faleconosco" element={<FaleConosco />} />

        <Route path="/usuario" element={<Usuario />} />
        <Route path="/usuarioslista" element={<UsuariosLista />} />
        <Route path="/usuarionovo" element={<UsuarioNovo />} />
        <Route path="/usuarioeditar/:id" element={<UsuarioEditar />} />
        <Route path="/usuarioperfil/:id" element={<UsuarioPerfil />} />
        <Route path="/usuarioalterarsenha/:id" element={<UsuarioAlterarSenha />} />
        <Route path="/main" element={<Main />} />
        <Route path="/loginnv" element={<Loginnv />} />

        <Route path="/cadcolab" element={<Cad_colab />} />
        <Route path="/cadprod" element={<Cad_prod />} />

        <Route path="/colabnv" element={<Colab_nv />} />
        <Route path="/colab" element={<Colab />} />
        
        <Route path="/mensagemnv" element={<Mensagem_nv />} />
        <Route path="/prodnv" element={<Prod_nv />} />
        <Route path="/msg" element={<Msghome />} />
        <Route path="/prodhome" element={<Prodhome />} />

        
        

      </Routes>
    </div>
  )
}
export default AppRoutes