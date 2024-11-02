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
                        <Link to="/hmtl"><li>HTML</li></Link>
                        <Link to="/css"><li>CSS</li></Link>
                        <Link to="/javascript"><li>JAVASCRIPT NO FRONTEND</li></Link>
                        <Link to="/react"><li>REACT</li></Link>
                        <Link to="/node"><li>NODE.JS</li></Link>
                        <Link to="/devops"><li>DEVOPS</li></Link>
                        {token && <LogoutButton />}
                        {role === 'admin' && <Link to="/users"><li>Gerenciar Usuários</li></Link>}
                    </ul>
                </nav>
            </header>
        </div>
    )
}
