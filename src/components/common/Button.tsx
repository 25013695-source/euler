import React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'glass';
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  icon, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  return (
    <button 
      className={`premium-button ${variant} ${className}`} 
      {...props}
    >
      {icon && <span className="button-icon-wrapper">{icon}</span>}
      <span className="button-label">{label}</span>
      <div className="button-glow"></div>
    </button>
  );
};

export default Button;
