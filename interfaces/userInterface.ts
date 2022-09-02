

namespace UserInterface{

    export interface IuserCreate{
        email : string
        firstName : string
        lastName : string
        password : string
        role: number
    }

    export interface IuserConnect{
        email : string
        password : string
    }
    
    export interface IuserUpdate{
        name? :string;
        email? : string;
        age? : number;

    }
    
}




export default UserInterface;
