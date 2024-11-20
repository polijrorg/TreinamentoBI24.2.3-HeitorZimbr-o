import Pius from "../models/ListaDePius"

interface AddPiusRequest{

    nomeDeUsuario: string;
    arrobaDoUsuario: string;
    textPiu: string;
    
}

class PiusRepository{

    private Piu: Pius[];

    constructor(){
        this.Piu = [];
    }

    public add({nomeDeUsuario, arrobaDoUsuario, textPiu} : AddPiusRequest ){
        const tweet = new Pius({nomeDeUsuario, arrobaDoUsuario, textPiu});
        this.Piu.push(tweet);
        return this.Piu;
    }

    

}

export default PiusRepository; 