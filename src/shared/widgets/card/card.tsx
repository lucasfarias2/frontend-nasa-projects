import React from 'react';
import classNames from 'classnames';

const namespace = 'ui__card';

const Card = ({ className, children }: IComponent) => (
  <div className={classNames(namespace, className)}>{children}</div>
);

export default Card;
