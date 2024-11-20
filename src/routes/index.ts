import { application, Router } from 'express';
import testsRouter from './tests.routes';
import usersRouter from './user.routes';

const routes = Router();

routes.use('/tests', testsRouter);

export default routes;
