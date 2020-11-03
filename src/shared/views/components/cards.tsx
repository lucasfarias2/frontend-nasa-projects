import React from 'react';
import FeaturedCard from './card.feature';
import Button from '../../controls/button';

const namespace = 'app-cards';

const Cards = ({ cards, selectedCards, removeSelectedCards }: ICards) => {
  if (!cards || cards.length < 1) {
    return <div>Empty State</div>;
  }

  const handleOnRemoveCards = () => {
    if (removeSelectedCards && selectedCards.length > 0) {
      removeSelectedCards();
    }
  };

  return (
    <>
      <div>
        {selectedCards.length > 0 ? <Button onClick={handleOnRemoveCards}>Remove selected cards</Button> : null}
      </div>
      <section className={namespace}>
        {cards.map((card: ICard) => {
          return <FeaturedCard key={card.id} {...card} />;
        })}
      </section>
    </>
  );
};

interface ICards {
  cards: ICard[];
  selectedCards?: number[];
  removeSelectedCards: () => void;
}

export default Cards;
