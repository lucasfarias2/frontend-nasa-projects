import { Dispatch } from 'redux';
import { SELECT_CARD } from './types';

export const selectCard = async (dispatch: Dispatch, card: ICard) => {
  return dispatch({
    type: SELECT_CARD,
    payload: { card },
  });
};
