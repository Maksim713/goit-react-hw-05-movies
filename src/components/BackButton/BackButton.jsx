import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import css from './BackButton.module.css';

function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <button type="submit" className={css.button} onClick={goBack}>
      <span className={css.buttonLabel}>Go Back</span>
    </button>
  );
}

export default BackButton;
