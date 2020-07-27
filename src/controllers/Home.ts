import {Request, Response} from 'express';

/**
 * Home page.
 * @route GET /
 */
export const index = (req: Request, res: Response) => {
  return 'Ess é o nosso jeito!;';
};
