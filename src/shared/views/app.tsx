import React from 'react';
import serialize from 'serialize-javascript';
import { Provider } from 'react-redux';
import Script from '../modules/script';
import Style from '../modules/style';
import createStore from '../../client/utils/create-store';
import reducers from '../../client/reducers/app';
import FeaturedCards from './components/cards.feature';
import Paginator from './components/paginator';

const App = ({ initialState }: IComponent) => {
  return (
    <Provider store={createStore(initialState, reducers)}>
      <Script>{`window.__PRELOADED_STATE__ = ${serialize({ initialState }, { isJSON: true })}`}</Script>
      <Style src={`app`} />
      <Script src={`app`} />
      <h1>NASA Projects</h1>
      <FeaturedCards cards={initialState.cards} selectedCards={initialState.selectedCards} />
      <Paginator pages={5} />
    </Provider>
  );
};

export default App;
