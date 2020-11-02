import React from 'react';
import Card from '../../widgets/card/card';
import CardService from '../../../server/services/card';

const namespace = 'app-cards__card';

const FeaturedCard = (card: ICard) => {
  if (!card) {
    return null;
  }

  const [cardModel, setCardModel] = React.useState(null);
  const [showSelectBox, setShowSelectBox] = React.useState(false);

  const fetchCardDetails = async (id: number) => {
    const cardResponse = await CardService.fetchCard(card.id);
    setCardModel(cardResponse);
  };

  React.useEffect(() => {
    if (!cardModel) {
      fetchCardDetails(card.id);
    }
  });

  const handleOnMouseEnter = () => {
    setShowSelectBox(true);
  };

  const handleOnMouseLeave = () => {
    setShowSelectBox(false);
  };

  return (
    <Card className={namespace} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
      {showSelectBox ? <div>Select box</div> : null}
      {cardModel ? (
        <>
          {cardModel.title ? <h1>{cardModel.title}</h1> : null}
          {cardModel.startDate ? <p>Start date: {cardModel.startDate}</p> : null}
          {cardModel.endDate ? <p>End date: {cardModel.endDate}</p> : null}
          {cardModel.description ? <p>{cardModel.description}</p> : null}
        </>
      ) : null}
      <p>Last updated: {card.lastUpdated}</p>
    </Card>
  );
};

export default FeaturedCard;
