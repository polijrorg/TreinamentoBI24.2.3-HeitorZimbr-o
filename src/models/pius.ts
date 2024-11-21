
class Pius{
    id: string;
    texto: string;
    numeroDeLikes: number;
    numeroDeComentarios: number;

    created_at: Date;

    updated_at: Date;
 
    constructor({
        id, 
        texto, 
        numeroDeLikes,
        numeroDeComentarios,
    }: Omit<Pius, 'created_at'| 'updated_at'>){
        this.id = id;
        this.texto = texto;
        this.numeroDeLikes = numeroDeLikes;
        this.numeroDeComentarios = numeroDeComentarios;
        this.created_at = new Date;
        this.updated_at = new Date;

    }

}


export default Pius;