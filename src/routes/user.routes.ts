import { Router, Request, Response } from 'express';
import { uuid } from 'uuidv4';

const usersRouter = Router();

usersRouter.post('/', (request: Request, response: Response) =>{
    try {
        const { name, email, cpf} = request.body;

        if(!name || !email || !cpf ){
            return response.status(400).json({error: 'Por favor, envie todas as informações'});
        }

        const createUser = new CreateUserservice(usersRepository);

        const user = createUser.execute({
            id = uuid(), 
            name,
            email,
            cpf,

        });

        return response.json(user);

    } catch(e: any){
        return response.status(400).json({error: e.message});

    }

});

export default usersRouter;