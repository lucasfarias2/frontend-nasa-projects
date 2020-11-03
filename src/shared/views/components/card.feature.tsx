import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Card from './card';
import { selectCard, unselectCard } from '../../../client/actions/creators';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    selectCard: (cardId: number) => {
      selectCard(dispatch, cardId);
    },
    unselectCard: (cardId: number) => {
      unselectCard(dispatch, cardId);
    },
  };
};

export default connect(null, mapDispatchToProps)(Card);
