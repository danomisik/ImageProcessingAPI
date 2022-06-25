import express from 'express';
import { Request, Response, NextFunction } from 'express';
import imageResize from '../utils/imageResize';

const routes = express.Router();

routes.get('/images', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //console.log(`filename: ${req.query.filename}`);
  //console.log(`weight: ${req.query.weight}`);
  //console.log(`height: ${req.query.height}`);
  try {
    const result = await imageResize(
      String(req.query.filename),
      Number(req.query.weight),
      Number(req.query.height)
    );
    if (result) {
      res.sendFile(`src/assets/thumb/${req.query.filename}.jpg`, { root: '.' });
    } else {
      next("Invalid input parameters");
    }
  } catch (error) {
    next(error);
  }
});

export default routes;