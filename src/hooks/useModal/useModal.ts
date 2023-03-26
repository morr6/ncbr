import { useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleModalOpen = () => {
    setIsModalOpen((prev) => !prev);
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    toggleModalOpen,
  };
};

export default useModal;
