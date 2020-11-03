import React from 'react';
import Container from '../../widgets/container/container';

const namespace = 'app-paginator';

const Paginator = ({ pages }: IPaginator) => {
  return (
    <Container className={namespace}>
      <div className={`${namespace}__page-btn`}>{`<`}</div>
      {Array.from(Array(pages), (e, i) => {
        return (
          <div key={i} className={`${namespace}__page-btn`}>
            {i + 1}
          </div>
        );
      })}
      <div className={`${namespace}__page-btn`}>{`>`}</div>
    </Container>
  );
};

interface IPaginator extends IComponent {
  pages: number;
}

export default Paginator;
