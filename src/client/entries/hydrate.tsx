import React from 'react';
import ReactDOM from 'react-dom';

declare var window: TWindow;

const props = window.__PRELOADED_STATE__;

const hydrate = (View: React.FunctionComponent) => {
  const Component = React.createElement(View, props, null);

  ReactDOM.hydrate(Component, document.getElementById('root'));
};

export default hydrate;
