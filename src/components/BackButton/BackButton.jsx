import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './BackButton.module.css';

function BackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button type="submit" className={css.button} onClick={goBack}>
      <span className={css.buttonLabel}>Go Back</span>
    </button>
  );
}

export default BackButton;
