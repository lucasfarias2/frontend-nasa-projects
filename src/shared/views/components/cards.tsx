import React from 'react';
import FeaturedCard from './card';

const namespace = 'app-cards';

const Cards = ({ cards }: ICards) => {
  if (!cards) {
    return null;
  }

  return (
    <section className={namespace}>
      {cards.map((card: ICard) => {
        return <FeaturedCard key={card.id} {...card} />;
      })}
    </section>
  );
};

interface ICards {
  cards: ICard[];
}

export default Cards;
