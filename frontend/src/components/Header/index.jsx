import { Link } from 'react-router-dom';
import './styles.css'
import logo from "../../assets/images/logo.png";
import LogoutButton from '../Logout';
import { useContext, useState } from 'react';
import { AuthContext } from '../../auth/Context';
import UserModal from '../UserForm/index';

export default function Header() {

    const { token, role } = useContext(AuthContext);

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    }

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
                        <Link to="/suggestion"><li>Sugestões</li></Link>
                        {role === 'admin' && <Link to="/users"><li>Gerenciar Usuários</li></Link>}
                        {token && <Link to="/profile"><li>Perfil</li></Link>}
                        {token ? <LogoutButton /> : <li><a onClick={() => setShowModal(true)}>Login</a></li>}
                    </ul>
                </nav>
            </header>
            <UserModal
                show={showModal}
                handleClose={handleClose}
            />
        </div>
    )
}
