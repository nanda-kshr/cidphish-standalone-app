import React from 'react';

interface DeleteButtonProps {
    websiteName: string;
    token: string;
    onDelete: (websiteName: string, token: string) => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
    websiteName,
    token,
    onDelete,
}) => {
  const handleClick = () => {
    onDelete(websiteName, token);
  };

  return (
    <button onClick={handleClick} className="delete-btn">
      Delete
    </button>
  );
};

export default DeleteButton;