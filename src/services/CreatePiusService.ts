import PiusRepository from "../repositories/piusRepository";
import Pius from "../models/pius";
import piusRepository from "../repositories/piusRepository";

interface ICreatePiusRequest{

    id: string;
    texto: string;
    numeroDeLikes: number;
    numeroDeComentarios: number;
}

class CreatePiusService{
    private piusRepository: piusRepository;

    constructor(piusRepository: piusRepository){
        this.piusRepository = piusRepository;
    }

    public execute(data: ICreatePiusRequest){
        
        const piu = this.piusRepository.create(data);

        return piu;

    }
        
    }

export default CreatePiusService;