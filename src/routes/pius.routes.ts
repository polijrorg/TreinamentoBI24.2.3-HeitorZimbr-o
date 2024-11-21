import { Router, Request, Response, response } from 'express';
import { uuid } from 'uuidv4';
import piusRepository from '../repositories/piusRepository';
import CreatePiusService from '../services/CreatePiusService';
import DeletePiuService from '../services/DeletePiuService';

const piusRouter = Router();
export const piuRepository = new piusRepository();

piusRouter.post('/', (request: Request, response: Response) =>{
    
    try{
        const { texto, numeroDeLikes = 0, numeroDeComentarios = 0} = request.body;

        if(!texto || texto.length < 1 || texto.length > 140){
            return response.status(400).json({error:'Por favor, respeite as regras de criação de Pius'});
        }

        const createPiu = new CreatePiusService(piuRepository);

        const piu = createPiu.execute({
            id: uuid(),
            texto,
            numeroDeLikes,
            numeroDeComentarios
        });

        return response.json(piu);
    }
    catch(e:any){
        return response.status(400).json({error: e.message});
    }
})

piusRouter.get('/getall', (request: Request , response: Response) => {

    const pius = piuRepository.getAll();

    return response.json(pius);

})

piusRouter.delete('/:id', (request: Request, response: Response) => {
    const { id } = request.params;

    const DeletePiu = new DeletePiuService(piuRepository);

    const deleted_Piu = DeletePiu.execute({
        id
    });

    return response.json(deleted_Piu);

})

export default piusRouter;