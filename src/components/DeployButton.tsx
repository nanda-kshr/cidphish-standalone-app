import React from 'react';

// Define Props interface for type safety
interface DeployButtonProps {
  username: string;
  repoName: string;
  token: string;
  selectedTemplate: string;
  onDeploy: (username: string, repoName: string, token: string, selectedTemplate: string) => void;
}

// Button Component
const DeployButton: React.FC<DeployButtonProps> = ({
  username,
  repoName,
  token,
  selectedTemplate,
  onDeploy,
}) => {
  const handleClick = () => {
    if (!username || !repoName || !token || !selectedTemplate) {
      alert('Please ensure all fields are filled in.');
      return;
    }
    onDeploy(username, repoName, token, selectedTemplate);
  };

  return (
    <button onClick={handleClick} className="deploy-btn">
      Deploy Website
    </button>
  );
};

export default DeployButton;