import piusRepository from "../repositories/piusRepository";

interface IRequest {
    id: string ;
    
}

class DeletePiuService {
    private piusRepository: piusRepository;

    constructor(piusRepository: piusRepository){
        this.piusRepository = piusRepository;
    }

    public execute( data: IRequest){
        const piuwithId = this.piusRepository.getById(data.id);

        if(!piuwithId){ throw Error('Esse Piu não existe');}

        const index = this.piusRepository.findIndexById(data.id);

        this.piusRepository.delete(index);

        return piuwithId;

    }
}

export default DeletePiuService;