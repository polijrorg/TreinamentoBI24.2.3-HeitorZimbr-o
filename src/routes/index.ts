import { application, Router } from 'express';
import testsRouter from './tests.routes';
import usersRouter from './user.routes';
import piusRouter from './pius.routes';

const routes = Router();

routes.use('/tests', testsRouter);
routes.use('/user', usersRouter);
routes.use('/piu', piusRouter);

export default routes;
