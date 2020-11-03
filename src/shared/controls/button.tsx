import React from 'react';

const namespace = 'ui-button';

const Button = ({ children, onClick }: IComponent) => {
  return (
    <button className={namespace} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
