import React from 'react';
import classNames from 'classnames';

const namespace = 'ui__card';

const Card = ({ className, children, onMouseEnter, onMouseLeave }: IComponent) => (
  <div className={classNames(namespace, className)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    {children}
  </div>
);

export default Card;
