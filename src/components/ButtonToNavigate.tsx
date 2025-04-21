// ButtonToNavigate.tsx
import React from 'react';

interface ButtonToNavigateProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const ButtonToNavigate: React.FC<ButtonToNavigateProps> = ({ setCurrentPage }) => {
  const handleGoToFormData = () => {
    setCurrentPage('formdata');  // This should work if `setCurrentPage` is passed properly
  };

  return (
    <button
      onClick={handleGoToFormData}
      className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg transition flex items-center justify-center"
    >
      Go to Website Dashboard
    </button>
  );
};

export default ButtonToNavigate;