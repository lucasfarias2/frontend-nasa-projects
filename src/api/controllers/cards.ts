import { NextFunction } from 'express';
import ProjectService from '../services/project';

const cardsController = async (req: IRequest, res: IResponse, next: NextFunction) => {
  try {
    const RESULTS_PER_PAGE = 6;
    const page = req.query.page ? parseInt(req.query.page.toString(), 10) : 1;
    const offset = page <= 1 ? 0 : (page - 1) * RESULTS_PER_PAGE;
    const limit = offset + RESULTS_PER_PAGE;
    res.json(await ProjectService.fetchProjects(offset, limit));
  } catch (e) {
    // tslint:disable-next-line: no-console
    console.error(e);
  }
};

export default cardsController;
