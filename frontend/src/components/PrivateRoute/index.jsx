import { useContext, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/Context';
import UserModal from '../UserForm';

const PrivateRoute = () => {
  const { token, role } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {

    setShowModal(false)
    if (showModal) {
      if (token) {
        navigate('/suggestion')
      } else {
        navigate('/')
      }
    }
  }

  if (window.location.pathname === '/users' && role !== 'admin') {
    return <Navigate to={'/'}/>;
  }

  return token ? <Outlet /> : <UserModal
    show={showModal}
    handleClose={handleClose}
  />
};

export default PrivateRoute;
