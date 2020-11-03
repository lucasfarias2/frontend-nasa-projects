import reducers from '../app';
import { SELECT_CARD, UNSELECT_CARD, REMOVE_SELECTED_CARDS } from '../../actions/types';

describe('reducers', () => {
  it('Case REMOVE_SELECTED_CARDS', () => {
    let state;
    state = reducers(
      {
        cards: [{ id: 1 }, { id: 2 }],
        selectedCards: [1],
        currentPage: 1,
      },
      { type: REMOVE_SELECTED_CARDS }
    );
    expect(state).toEqual({
      cards: [{ id: 2 }],
      selectedCards: [],
      currentPage: 1,
    });
  });

  it('Case SELECT_CARD', () => {
    let state;
    state = reducers(
      {
        cards: [{ id: 1 }, { id: 2 }],
        selectedCards: [],
        currentPage: 1,
      },
      { type: SELECT_CARD, payload: { card: { id: 1 } } }
    );
    expect(state).toEqual({
      cards: [{ id: 1 }, { id: 2 }],
      selectedCards: [1],
      currentPage: 1,
    });
  });

  it('Case UNSELECT_CARD', () => {
    let state;
    state = reducers(
      {
        cards: [{ id: 1 }, { id: 2 }],
        selectedCards: [1],
        currentPage: 1,
      },
      { type: UNSELECT_CARD, payload: { card: { id: 1 } } }
    );
    expect(state).toEqual({
      cards: [{ id: 1 }, { id: 2 }],
      selectedCards: [],
      currentPage: 1,
    });
  });
});
