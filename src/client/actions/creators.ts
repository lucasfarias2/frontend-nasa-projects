import { Dispatch } from 'redux';
import { UNSELECT_CARD, SELECT_CARD, REMOVE_SELECTED_CARDS } from './types';

export const selectCard = async (dispatch: Dispatch, cardId: number) => {
  return dispatch({
    type: SELECT_CARD,
    payload: { card: { id: cardId } },
  });
};

export const unselectCard = async (dispatch: Dispatch, cardId: number) => {
  return dispatch({
    type: UNSELECT_CARD,
    payload: { card: { id: cardId } },
  });
};

export const removeSelectedCards = async (dispatch: Dispatch) => {
  return dispatch({
    type: REMOVE_SELECTED_CARDS,
  });
};
