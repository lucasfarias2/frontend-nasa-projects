import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { removeSelectedCards } from '../creators';
import { REMOVE_SELECTED_CARDS } from '../types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  const store = mockStore({ cards: [{ id: 1 }, { id: 2 }], selectedCards: [{ id: 1 }, { id: 2 }] });

  it('should create an action remove cards', () => {
    const expectedActions = [
      {
        type: REMOVE_SELECTED_CARDS,
      },
    ];
    // @ts-ignore
    return store.dispatch(removeSelectedCards).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
