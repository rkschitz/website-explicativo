import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createUser, loginUser, updateUser } from '../../api/user';
import { AuthContext } from '../../auth/Context';
import { toast } from 'react-toastify';

function UserModal({ show, handleClose, user, adminIsCreate }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [typeUser, setTypeUser] = useState('viewer');
    const [isLogin, setIsLogin] = useState(true);
    const { login, role, token } = useContext(AuthContext);

    const handleSubmit = async () => {
        if (role === 'admin') {
            if (adminIsCreate) {
                const newUser = { nome, email, senha, typeUser };
                try {
                    const response = await createUser(newUser);
                    if (response) {
                        handleClose();
                    }
                } catch (error) {
                   toast("Erro ao registrar:", error);
                }
            } else {
                const newUser = { nome, email, senha, typeUser };
                try {
                    const response = await updateUser(user.id, newUser);
                    if (response.status === 200) {
                        handleClose();
                    }
                } catch (error) {
                    toast(error.response.data.error);

                }
            }
        } else {
            if (!token) {
                if (isLogin) {
                    try {
                        const response = await loginUser(email, senha);
                        if (response.data.token) {
                            login(response.data.token);
                            handleClose();
                        }
                    } catch (error) {
                        toast(error.response.data.error);
                    }
                } else {
                    const newUser = { nome, email, senha, typeUser };
                    try {
                        const response = await createUser(newUser);
                        if (response) {
                            const responseLogin = await loginUser(email, senha);
                            if (responseLogin.data.token) {
                                login(responseLogin.data.token);
                                handleClose();
                            }
                            handleClose();
                        }
                    } catch (error) {
                        toast(error.response.data.error);
                    }
                }
            } else {
                try {
                    const newUser = { nome, email, senha, typeUser };
                    const response = await updateUser(user.id, newUser);
                    if (response.status === 200) {
                        handleClose();
                    }
                } catch (error) {
                    toast(error.response.data.error);
                }
            }
        }
    };

    const toggleState = () => {
        setIsLogin(!isLogin);
        resetForm();
    };

    const resetForm = () => {
        setNome('');
        setEmail('');
        setSenha('');
        setTypeUser('viewer');
    };

    useEffect(() => {
        if (user) {
            setNome(user.nome);
            setEmail(user.email);
            setSenha(user.senha);
            setTypeUser(user.typeUser);
        }
    }, [user]);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{role === 'admin' ? 'Cadastrar usuário' : isLogin ? 'Login' : 'Registro'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    {(!isLogin || role === 'admin') && (
                        <div className="mb-3">
                            <label className="form-label">Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Senha</label>
                        <input
                            type="password"
                            className="form-control"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </div>
                    {role === 'admin' && (
                        <div className="mb-3">
                            <label className="form-label">Tipo de Usuário</label>
                            <select
                                className="form-control"
                                value={typeUser}
                                onChange={(e) => setTypeUser(e.target.value)}
                                required
                            >
                                <option value="viewer">Viewer</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                    )}
                    {(role != 'admin' && !token) &&
                        (<div className="mb-3">
                            <button type="button" onClick={toggleState}>
                                {isLogin ? 'Criar uma conta' : 'Já tem uma conta? Fazer Login'}
                            </button>
                        </div>)
                    }
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    {role === 'admin' ? 'Registrar' : token ? 'Alterar' : isLogin ? 'Entrar' : 'Registrar'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UserModal;
