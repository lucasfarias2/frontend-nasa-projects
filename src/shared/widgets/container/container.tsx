import React from 'react';
import classNames from 'classnames';

const namespace = 'ui-container';

const Container = ({ className, children, onMouseEnter, onMouseLeave, onClick }: IComponent) => (
  <div
    className={classNames(namespace, className)}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {children}
  </div>
);

export default Container;
