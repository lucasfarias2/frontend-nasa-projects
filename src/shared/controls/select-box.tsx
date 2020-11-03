import React from 'react';
import classnames from 'classnames';

const namespace = 'ui-select-box';

const SelectBox = ({ onClick, selected = false }: ISelectBox) => {
  return (
    <div className={namespace} onClick={onClick}>
      {selected ? <div className={`${namespace}__check`} /> : null}
    </div>
  );
};

interface ISelectBox extends IComponent {
  selected?: boolean;
}

export default SelectBox;
