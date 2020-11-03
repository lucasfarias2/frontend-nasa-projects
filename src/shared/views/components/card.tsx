import React from 'react';
import classnames from 'classnames';
import SelectBox from '../../controls/select-box';
import Container from '../../widgets/container/container';
import CardService from '../../../server/services/card';

const namespace = 'app-cards__card';

const Card = (props: ICard) => {
  if (!props) {
    return null;
  }

  const [cardModel, setCardModel] = React.useState(null);
  const [showSelectBox, setShowSelectBox] = React.useState(false);
  const [isCardSelected, setIsCardSelected] = React.useState(false);

  const fetchCardDetails = async (id: number) => {
    const cardResponse = await CardService.fetchCard(props.id);
    setCardModel(cardResponse);
  };

  React.useEffect(() => {
    if (!cardModel) {
      fetchCardDetails(props.id);
    }
  });

  const handleOnMouseEnter = () => {
    setShowSelectBox(true);
  };

  const handleOnMouseLeave = () => {
    setShowSelectBox(false);
  };

  const handleOnSelect = () => {
    setIsCardSelected(!isCardSelected);
    if (props.selectCard && !isCardSelected) {
      props.selectCard(props.id);
    }

    if (props.unselectCard && isCardSelected) {
      props.unselectCard(props.id);
    }
  };

  return (
    <Container
      className={classnames(namespace, { [`${namespace}--selected`]: isCardSelected })}
      onClick={handleOnSelect}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <h1>{props.id}</h1>
      {showSelectBox || isCardSelected ? <SelectBox selected={isCardSelected} onClick={handleOnSelect} /> : null}
      {cardModel ? (
        <>
          {cardModel.title ? <h1>{cardModel.title}</h1> : null}
          {cardModel.status ? <p>Status: {cardModel.status}</p> : null}
          {cardModel.startDate ? <p>Start date: {cardModel.startDate}</p> : null}
          {cardModel.endDate ? <p>End date: {cardModel.endDate}</p> : null}
          {cardModel.description ? <p>{cardModel.description}</p> : null}
        </>
      ) : null}
      <p>Last updated: {props.lastUpdated}</p>
    </Container>
  );
};

export default Card;
