import React from 'react';
import classnames from 'classnames';

const namespace = 'ui-button';

const Button = ({ className, children, onClick }: IComponent) => {
  return (
    <button className={classnames(namespace, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
