import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../../api/user"; // Adicione deleteUser aqui
import UserModal from "../../components/UserForm";

export default function ManagerUsers() {
    const [users, setUsers] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await getUsers();
            setUsers(response);
            console.log(users)
        };
            fetchUsers();
            
    }, []);

    const openModalForCreate = () => {
        setCurrentUser(null); // Para criar um novo usuário
        setModalIsOpen(true);
    };

    const openModalForEdit = (user) => {
        setCurrentUser(user); // Para editar um usuário existente
        setModalIsOpen(true);
    };

    const handleDelete = async (userId) => {
        await deleteUser(userId); // Implemente a lógica de exclusão na API
        setUsers(users.filter(user => user.id !== userId));
    };

    const handleModalClose = () => {
        setModalIsOpen(false);
        setCurrentUser(null);
    };

    return (
        <div className="container-users">
            <button onClick={openModalForCreate}>Adicionar Usuário</button>
            {users.map((user) => (
                <div className="index" key={user.id}>
                    <h1>{user.nome}</h1>
                    <h1>{user.email}</h1>
                    <button onClick={() => openModalForEdit(user)}>Alterar</button>
                    <button onClick={() => handleDelete(user.id)}>Excluir</button>
                </div>
            ))}
            <UserModal 
                show={modalIsOpen} 
                handleClose={handleModalClose} 
                user={currentUser}
            />
        </div>
    );
}
