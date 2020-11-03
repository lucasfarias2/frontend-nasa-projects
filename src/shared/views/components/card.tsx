import React from 'react';
import classnames from 'classnames';
import SelectBox from '../../controls/select-box';
import Container from '../../widgets/container/container';
import CardService from '../../../server/services/card';
import useIntersectionObserver from '../../modules/use-io';

const namespace = 'app-cards__card';

const Card = (props: ICard) => {
  if (!props) {
    return null;
  }

  const refView = React.useRef();

  const [cardModel, setCardModel] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const [showSelectBox, setShowSelectBox] = React.useState(false);
  const [isCardSelected, setIsCardSelected] = React.useState(false);
  const [hasFetched, setHasFetched] = React.useState(false);
  const [isIntersecting] = useIntersectionObserver(refView, { threshold: 1 });

  const fetchCardDetails = async (id: number) => {
    setIsLoading(true);
    const cardResponse = await CardService.fetchCard(props.id);
    setIsLoading(false);
    setCardModel(cardResponse);
  };

  React.useEffect(() => {
    if (isIntersecting && !hasFetched && !cardModel) {
      setHasFetched(true);
      fetchCardDetails(props.id);
    }
  }, [isIntersecting, hasFetched]);

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

  const handleShowMore = () => {
    setIsCollapsed(!isCollapsed);
  };

  const trimDescription = (str: string) => str.split('').slice(0, 120).concat('...').join('');

  return (
    <Container
      className={classnames(
        namespace,
        { [`${namespace}--selected`]: isCardSelected },
        { [`${namespace}--collapsed`]: isCollapsed },
        { [`${namespace}--loading`]: isLoading }
      )}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      ref={refView}
    >
      {showSelectBox || isCardSelected ? <SelectBox selected={isCardSelected} onClick={handleOnSelect} /> : null}
      {cardModel ? (
        <>
          {cardModel.title ? <h1>{cardModel.title}</h1> : null}
          {cardModel.status ? <p>Status: {cardModel.status}</p> : null}
          {cardModel.startDate ? <p>Start date: {cardModel.startDate}</p> : null}
          {cardModel.endDate ? <p>End date: {cardModel.endDate}</p> : null}
        </>
      ) : null}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <p>ID: {props.id}</p>
          <p>Last updated: {props.lastUpdated}</p>
        </>
      )}
      {cardModel && cardModel.description
        ? React.createElement('span', {
            dangerouslySetInnerHTML: {
              __html: isCollapsed ? trimDescription(cardModel.description) : cardModel.description,
            },
          })
        : null}
      <div className={`${namespace}__collapse-btn`} onClick={handleShowMore}>
        {isCollapsed ? <span>Show more</span> : <span>Show less</span>}
      </div>
    </Container>
  );
};

export default Card;
