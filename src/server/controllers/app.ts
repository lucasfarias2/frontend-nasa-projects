import { NextFunction } from 'express';
import App from '../../shared/views/app';
import cardService from '../services/card';

const fetch = async (_req: IRequest, res: IResponse, next: NextFunction) => {
  try {
    const cards = await cardService.fetchCards();
    res.locals.initialState = {};
    res.locals.initialState.cards = cards;
    res.locals.initialState.selectedCards = [];
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
