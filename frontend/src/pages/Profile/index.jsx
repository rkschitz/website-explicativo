import { useContext, useEffect, useState } from "react";
import { getUsers, deleteUser, getContext } from "../../api/user"; // Adicione deleteUser aqui
import UserModal from "../../components/UserForm";
import { AuthContext } from "../../auth/Context";

export default function ManagerUsers() {
    const [users, setUsers] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [adminIsCreate, setAdminIsCreate] = useState(false);

    const {logout} = useContext(AuthContext);


    const fetchUsers = async () => {
        const response = await getContext();
        setUsers([response]);
    };

    const openModalForEdit = (user) => {
        setCurrentUser(user);
        setModalIsOpen(true);
    };

    const handleDelete = async (userId) => {
        await deleteUser(userId);
        logout();
    };

    const handleModalClose = async () => {
        fetchUsers();
        setModalIsOpen(false);
        setCurrentUser(null);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="container-users">
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
                adminIsCreate={adminIsCreate}
            />
        </div>
    );
}
