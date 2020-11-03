import { NextFunction } from 'express';
import App from '../../shared/views/app';
import cardService from '../services/card';

const fetch = async (req: IRequest, res: IResponse, next: NextFunction) => {
  try {
    const page = req.query.page ? parseInt(req.query.page.toString(), 10) : 1;
    const cards = await cardService.fetchCards(page);
    res.locals.initialState = {};
    res.locals.initialState.cards = cards;
    res.locals.initialState.selectedCards = [];
    res.locals.initialState.currentPage = page;
  } catch (e) {
    // tslint:disable-next-line: no-console
    console.error(e);
  }
  next();
};

const render = (req: IRequest, res: IResponse, next: NextFunction) => {
  res.renderView(App, { initialState: res.locals.initialState });
};

export default { fetch, render };
