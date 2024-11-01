import { Link } from 'react-router-dom';
import './styles.css'
import logo from "../../assets/images/logo.png";
import LogoutButton from '../Logout';
import { useContext } from 'react';
import { AuthContext } from '../../auth/Context';

export default function Header() {

    const { token, role } = useContext(AuthContext);

    return (

        <div className='header-container'>
            <header>
                <Link to="/"><img src={logo} alt="Logo" className="header-logo" />
                </Link>
                <nav className="menu">
                    <ul>
                        <Link to="/">
                            <li>HOME</li>
                        </Link>
                        <Link to="/favorites"><li>Favoritos</li></Link>
                        <Link to="/suggestion"><li>Sugestões</li></Link>
                        {token && <LogoutButton />}
                        {role === 'admin' && <Link to="/users"><li>Gerenciar Usuários</li></Link>}
                    </ul>
                </nav>
            </header>
        </div>
    )
}
