import { SELECT_CARD, UNSELECT_CARD, REMOVE_SELECTED_CARDS } from '../actions/types';

export default (state: IState, action: IAction) => {
  switch (action.type) {
    case SELECT_CARD:
      return { ...state, selectedCards: [...state.selectedCards, action.payload.card.id] };
    case UNSELECT_CARD:
      const newSelectedCards = state.selectedCards.filter((card: number) => card !== action.payload.card.id);
      return { ...state, selectedCards: newSelectedCards };
    case REMOVE_SELECTED_CARDS:
      return {
        ...state,
        cards: state.cards.filter((card: ICard) => {
          return !state.selectedCards.includes(card.id);
        }),
        selectedCards: [],
      };
    default:
      return state;
  }
};
