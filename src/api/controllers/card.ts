import { NextFunction } from 'express';
import ProjectService from '../services/project';

const cardController = async (req: IRequest, res: IResponse, next: NextFunction) => {
  try {
    res.json(await ProjectService.fetchProjectDetails(req.params.id));
  } catch (e) {
    // tslint:disable-next-line: no-console
    console.error(e);
  }
};

export default cardController;
