interface User_register{
    body:{
        last_name:string,
        first_name:string,
        email:string,
        phone_number:number,
        password:string
    }
}
interface User_login{
    body:{
        email:string,
        password:string
    }
}

export type{
    User_register,
    User_login
}