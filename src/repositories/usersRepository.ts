import Users from "../models/users";
import { isThisISOWeek } from "date-fns";


interface ICreateUserDTO{
    id: string;
    name: string;
    email: string;
    cpf: string;
}

interface IUpdateUserDTO{
    id: string;
    data:{
    name: string;
    email: string;
    }
}


class usersRepository{
    private users : Users[];

    constructor(){
        this.users = [];
    }

    public findUserbyCPF( cpf: string): Users | undefined {
        return this.users.find((user: Users) => user.cpf == cpf );

    }

    public findUserbyEmail(email: string ): Users | undefined {
        return this.users.find((user: Users ) => user.email == email);
    }

    public create(data: ICreateUserDTO): Users {
        const user = new Users(data);  

        this.users.push(user);
        
        return user;

    }

    public getAll(): Users []{
        return this.users;
    }

    public getById(id: string): Users | undefined {
        return this.users.find((users: Users) => users.id == id );
    }

    public update(data: IUpdateUserDTO): Users {
        const index = this.users.findIndex((user: Users ) => user.id == data.id );

        return (this.users[index] = { ...this.users[index], ...data.data, updated_at: new Date});
        
    }

    public findIndexById(id: string): number {
        const index = this.users.findIndex((user: Users ) => user.id == id);

        return index;

    }

    public delete(index: number){
        this.users.splice(index, 1);
    }
}

    

export default usersRepository;