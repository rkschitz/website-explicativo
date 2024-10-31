import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/Context";
import { getAllUsers, deleteSuggestion, getContext } from "../../api/suggestion";
import UserModal from "../../components/UserForm/index";
import './styles.css';

export default function Suggestion() {
    const { role, id } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isUpdate, setIsUpdate] = useState(false);
    const [isCreating, setIsCreating] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (role === 'admin') {
                await fetchSuggestions();
            } else {
                const response = await getContext();
                setUsers([response]);
                console.log(response)
            }
        };
        
        fetchData();
    }, [role, isUpdate]);

    const fetchSuggestions = async () => {
        try {
            const response = await getAllUsers();
            setUsers(response.data);
        } catch (error) {
            console.error("Erro ao buscar sugestões:", error);
        }
    };

    const handleDeleteSuggestion = async (userId) => {
        try {
            await deleteSuggestion(userId)
            setUsers((prevUsers) => prevUsers.filter(user => user.id !== userId));
        } catch (error) {
            console.error("Erro ao excluir usuário:", error);
        }
    };

    const handleCreateUser = () => {
        setSelectedUser(null); // Resetar o usuário selecionado
        setIsCreating(true); // Indicar que estamos criando um novo usuário
        setShowModal(true); // Mostrar o modal
    };

    return (
        <div className="profile">
            <h1>Profile</h1>
            {role === 'admin' ? (
                <>
                    <h2>Lista de sugestões</h2>
                    <button onClick={handleCreateUser}>Adicionar Usuário</button>
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>
                                <span>{user.nome} ({user.email}) ({user.role})</span>
                                <button onClick={() => { 
                                    setSelectedUser(user); 
                                    setIsCreating(false); // Indicar que estamos alterando um usuário
                                    setShowModal(true); 
                                }}>
                                    Alterar
                                </button>
                                <button onClick={() => handleDeleteSuggestion(user.id)}>Excluir</button>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <div>
                    <h2>Seus Dados</h2>
                    {console.log(users)}
                     {users.map(user => (
                        <div key={user.id}>
                            <span>{user.nome} ({user.email}) ({user.role})</span>
                            <button onClick={() => { 
                                setSelectedUser(user); 
                                setIsCreating(false);
                                setShowModal(true); 
                            }}>
                                Alterar
                            </button>
                        </div>
                    ))}
                    <button onClick={() => handleDeleteSuggestion(id)}>Excluir Conta</button>
                </div>
            )}
            <UserModal 
                show={showModal} 
                handleClose={() => setShowModal(false)} 
                setIsUpdate={setIsUpdate} 
                user={selectedUser}
                isCreating={isCreating} // Passar o estado de criação para o modal
            />
        </div>
    );
}
