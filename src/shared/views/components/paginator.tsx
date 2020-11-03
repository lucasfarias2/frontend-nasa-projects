import React from 'react';
import classnames from 'classnames';
import Container from '../../widgets/container/container';

const namespace = 'app-paginator';

const Paginator = ({ currentPage, pages }: IPaginator) => {
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;
  return (
    <Container className={namespace}>
      {currentPage > 1 ? (
        <a href={`http://localhost:8080?page=${prevPage}`} className={`${namespace}__page-btn`}>{`<`}</a>
      ) : null}
      {Array.from(Array(pages), (e, i) => {
        const page = i + 1;
        return (
          <a
            key={i}
            href={`http://localhost:8080?page=${page}`}
            className={classnames(`${namespace}__page-btn`, {
              [`${namespace}__page-btn--active`]: currentPage === page,
            })}
          >
            {page}
          </a>
        );
      })}
      {currentPage < pages ? (
        <a href={`http://localhost:8080?page=${nextPage}`} className={`${namespace}__page-btn`}>{`>`}</a>
      ) : null}
    </Container>
  );
};

interface IPaginator extends IComponent {
  pages: number;
  currentPage: number;
}

export default Paginator;
