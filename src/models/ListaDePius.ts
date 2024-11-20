

interface Request{
    nomeDeUsuario: string;
    arrobaDoUsuario: string;
    textPiu: string;
}

class Pius{

    nomeDeUsuario: string;
    arrobaDoUsuario:string;
    textPiu: string;
 
    
    constructor(data: Request){
        this.nomeDeUsuario = data.nomeDeUsuario;
        this.arrobaDoUsuario = data.arrobaDoUsuario;
        this.textPiu = data.textPiu;
    }
}

export default Pius;