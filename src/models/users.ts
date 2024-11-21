
class Users {
    id: string;
    name: string;
    cpf: string;
    email: string;

    created_at: Date;

    updated_at: Date;

    constructor( {
        id,
        name,
        cpf,
        email,
    }: Omit<Users, 'created_at' | 'updated_at'>){
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.created_at = new Date;
        this.updated_at = new Date;

    }
}

export default Users;
