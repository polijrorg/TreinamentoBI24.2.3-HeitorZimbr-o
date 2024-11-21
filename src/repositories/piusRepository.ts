import Pius from "../models/pius"

interface ICreatePiusDTO{

    id: string;
    texto: string;
    numeroDeLikes: number;
    numeroDeComentarios: number;
    
}

class piusRepository{

    private Piu: Pius[];

    constructor(){
        this.Piu = [];
    }

    public create(data:ICreatePiusDTO): Pius {
        const piu = new Pius(data);

        this.Piu.push(piu);

        return piu;
    }

    public getAll(): Pius [] {
        return this.Piu;
    }

    public findIndexById(id: string): number {
        const index = this.Piu.findIndex((Piu: Pius ) => Piu.id == id);

        return index;

    }
    public delete(index: number){
        this.Piu.splice(index, 1);

    }
    public getById( id: string): Pius | undefined {
        return this.Piu.find((Piu : Pius) => Piu.id == id );
    }
}

export default piusRepository; 