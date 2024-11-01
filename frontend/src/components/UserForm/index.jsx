import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createUser, loginUser } from '../../api/user';
import { AuthContext } from '../../auth/Context';


function UserModal({ show, handleClose }) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [role, setRole] = useState('viewer');
    const { login } = useContext(AuthContext);

    const resetForm = () => {
        setUserId('');
        setNome('');
        setEmail('');
        setSenha('');
        setRole('viewer');
    };

    const handleSubmit = async () => {
        if (isCreate == true) {
            const newUser = {
                nome,
                email,
                senha,
                role,
            };
            try {
                const response = await createUser(newUser);
                if (response) {
                    const loginResponse = await loginUser(response.email, response.senha)
                    if (loginResponse.data.token) {
                        if (response.data.token) {
                            login(response.data.token);
                            return handleClose();
                        }
                    }
                }
            } catch (e) {
                console.log(e)
            }
        } else {
            try {
                const response = await loginUser(email, senha);
                if (response.data.token) {
                    login(response.data.token);
                    return handleClose();
                }
            } catch (e) {
                console.log(e)
            }
        }
    };

    const [isCreate, setIsCreate] = useState(false)

    const toggleState = () => {
        setIsCreate(!isCreate);
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isCreate ? 'Cadastre-se' : 'Login'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        {isCreate === true &&
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
                        }
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
                                <label className="form-label">Role</label>
                                <select
                                    className="form-control"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    required
                                >
                                    <option value="viewer">Viewer</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>)}
                        <div className="mb-3">
                            <a onClick={toggleState}>{isCreate ? "Login" : "Cadastre-se"}</a>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UserModal;
