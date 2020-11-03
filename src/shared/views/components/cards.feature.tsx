import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Cards from './cards';
import { removeSelectedCards } from '../../../client/actions/creators';

const mapStateToProps = (state: IState) => {
  return { cards: state.cards, selectedCards: state.selectedCards };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    removeSelectedCards: () => {
      removeSelectedCards(dispatch);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
