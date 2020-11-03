import React from 'react';
import FeaturedCard from './card.feature';
import Button from '../../controls/button';

const namespace = 'app-cards';

const Cards = ({ cards, selectedCards, removeSelectedCards }: ICards) => {
  if (!cards || cards.length < 1) {
    return (
      <div className={`${namespace}__empty-state`}>
        Looks like you just ran out of cards :(. Refresh page or click next page to fetch more.
      </div>
    );
  }

  const handleOnRemoveCards = () => {
    if (removeSelectedCards && selectedCards.length > 0) {
      removeSelectedCards();
    }
  };

  return (
    <>
      <div>
        {selectedCards.length > 0 ? (
          <Button className={`${namespace}__remove-btn`} onClick={handleOnRemoveCards}>
            Remove selected cards
          </Button>
        ) : null}
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
