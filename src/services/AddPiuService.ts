import PiusRepository from "../repositories/ListaRepository";
import Pius from "../models/ListaDePius";

interface AddPiusRequest{

    nomeDeUsuario: string;
    arrobaDoUsuario: string;
    textPiu: string;
    
}

class AddPiusService{
    private piusRepository: PiusRepository;

    constructor(piusRepository: PiusRepository){
        this.piusRepository = piusRepository;
    }

    public execute( {nomeDeUsuario, arrobaDoUsuario, textPiu} : AddPiusRequest): Pius[] {
        const tweet = this.piusRepository.add({nomeDeUsuario, arrobaDoUsuario, textPiu});
        

        return tweet;
    }
}

export default AddPiusService;