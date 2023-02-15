import { Link, useNavigate } from "react-router-dom";
import { deleteToken, isAdmin } from "../../Auth";
import { StyledNav } from "./nav-style";

function Nav() {

    const navigate = useNavigate();

    const logout = () => {
        deleteToken();
        navigate('/');
    }

    return (
        <StyledNav className="navbar navbar-expand-sm">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <Link className="nav-link" to="/">Página Inicial</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">Sobre</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Produtos e Serviços</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact" >Contato</Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    {
                        isAdmin() ?
                        <>
                            <li className="nav-item">
                                <Link className="nav-link " to="/admin/contactView" >Lista de Contatos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/admin/clientList" >Lista de Clientes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/user/login' onClick={logout}>Logout</Link>
                            </li>
                        </>
                        :
                            <li className="nav-item">
                                <Link className="nav-link" to="/user/login">Login</Link>
                            </li>     
                    }
                </ul>
            </div>
        </StyledNav>
    )
}

export default Nav;