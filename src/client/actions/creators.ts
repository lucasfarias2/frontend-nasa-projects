import { Dispatch } from 'redux';
import { SELECT_CARD } from './types';

export const selectCard = async (dispatch: Dispatch, card: TCard) => {
  return dispatch({
    type: SELECT_CARD,
    payload: { card },
  });
};
