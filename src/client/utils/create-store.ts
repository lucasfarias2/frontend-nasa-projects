import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default (props: object, reducers: (state: IState, action: IAction) => {}) =>
  createStore(reducers, { ...props }, composeWithDevTools(applyMiddleware(logger, thunk)));
