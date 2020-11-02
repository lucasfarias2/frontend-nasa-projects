import { NextFunction } from 'express';
import ProjectService from '../services/project';

const cardsController = async (_req: IRequest, res: IResponse, next: NextFunction) => {
  try {
    res.json(await ProjectService.fetchProjects());
  } catch (e) {
    // tslint:disable-next-line: no-console
    console.error(e);
  }
  next();
};

export default cardsController;
