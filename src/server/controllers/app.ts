import { NextFunction } from 'express';
import App from '../../shared/views/app';

const fetch = async (_req: IRequest, res: IResponse, next: NextFunction) => {
  try {
    // res.locals.initialState = await itemService.fetchItems();
    res.locals.initialState = {};
    res.locals.initialState.selectedItems = [];
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
