import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';
import { CellProps } from 'react-table';
import Modal from 'react-modal';

import { User } from 'store/users/reducers';
import { deleteUser } from 'store/users/slice';
import { useAppDispatch, useModal } from 'hooks';
import DeleteModalContent from '../DeleteModalContent';
import { modalStyles } from 'styles/modalStyles';

type ActionsCellProps = CellProps<User>;

export const ActionsCell = ({ row: { original: user } }: ActionsCellProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isModalOpen, openModal, closeModal } = useModal();

  const handleDeleteClick = () => {
    openModal();
  };

  const handleEditClick = () => {
    navigate(`/user/${user.id}`);
  };

  const handleDeleteUser = () => {
    dispatch(deleteUser(user.id));
    closeModal();
  };

  return (
    <>
      <Tooltip title="Edit">
        <EditIcon onClick={handleEditClick} />
      </Tooltip>

      <Tooltip title="Delete">
        <DeleteIcon onClick={handleDeleteClick} />
      </Tooltip>

      <Modal isOpen={isModalOpen} style={modalStyles}>
        <DeleteModalContent closeModal={closeModal} onConfirm={handleDeleteUser} />
      </Modal>
    </>
  );
};

export default ActionsCell;
