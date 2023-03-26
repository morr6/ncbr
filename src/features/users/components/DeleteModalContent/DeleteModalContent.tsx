import { StyledButton, Wrapper } from './DeleteModalContent.styled';

type DeleteModalContentProps = {
  closeModal: () => void;
  onConfirm: () => void;
};

export const DeleteModalContent = ({ closeModal, onConfirm }: DeleteModalContentProps) => (
  <Wrapper>
    <h2>Czy na pewno chcesz usunąć tego użytkownika?</h2>

    <div>
      <StyledButton variant="outlined" onClick={closeModal}>
        nie
      </StyledButton>
      <StyledButton variant="contained" onClick={onConfirm}>
        tak
      </StyledButton>
    </div>
  </Wrapper>
);

export default DeleteModalContent;
