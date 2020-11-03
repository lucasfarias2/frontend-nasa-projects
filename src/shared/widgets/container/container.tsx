import React from 'react';
import classNames from 'classnames';

const namespace = 'ui-container';

const Container = React.forwardRef(
  ({ className, children, onMouseEnter, onMouseLeave, onClick }: IComponent, ref: any) => (
    <div
      className={classNames(namespace, className)}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={ref}
    >
      {children}
    </div>
  )
);

export default Container;
