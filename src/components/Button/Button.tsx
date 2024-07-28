import React from 'react';
import ReactDOM from 'react-dom/client';
import createElement from 'react-to-webcomponent';
import styles from './Button.module.scss';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const LmButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className={styles['lm-button']} onClick={onClick}>
      {label}
    </button>
  );
};

customElements.define('lm-button', createElement(LmButton, React, ReactDOM));

export default LmButton;