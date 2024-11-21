import { Router, Request, Response } from 'express';
import { uuid } from 'uuidv4';
import CreateUserService from '../services/CreateUserService';
import usersRepository from '../repositories/usersRepository';
import GetUserService from '../services/GetUserSerive';
import UpdateUserService from '../services/UpdateUserService';
import DeleteUserService from '../services/DeleteUserService';

const usersRouter = Router();
export const userRepository = new usersRepository();

usersRouter.post('/', (request: Request, response: Response) =>{
    try {
        const { name, email, cpf} = request.body;

        if(!name || !email || !cpf ){
            return response.status(400).json({error: 'Por favor, envie todas as informações'});
        }

        const createUser = new CreateUserService(userRepository);

        const user = createUser.execute({
            id : uuid(), 
            name,
            email,
            cpf,

        });

        return response.json(user);

    } catch(e: any){
        return response.status(400).json({error: e.message});

    }

});

usersRouter.get('/getall', (request: Request , response: Response) =>  {
    const users = userRepository.getAll();

    return response.json(users);

})

usersRouter.get('/:id', (request: Request , response: Response) =>  {
    const { id } = request.params;

    const GetUser = new GetUserService(userRepository);

    const user = GetUser.execute({
        id
    });

    return response.json(user);


})

usersRouter.put('/:id', (request: Request, response: Response) => {
    const { id } = request.params;
    const { name, email } = request.body;

    if(!name || !email ){
        return response.status(400).json({ error: 'Por favor, envie todas as informações'});
    }

    const UpdateUser = new UpdateUserService(userRepository);

    const updated_user = UpdateUser.execute({
        id, 
        data:{
        name, 
        email,
        }
    });

    return response.json(updated_user);


})

usersRouter.delete('/:id', (request: Request, response: Response) => {
    const { id } = request.params;

    const DeleteUser = new DeleteUserService(userRepository);

    const deleted_user = DeleteUser.execute({
        id
    });

    return response.json(deleted_user);
})

export default usersRouter;