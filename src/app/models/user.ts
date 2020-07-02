export class User{

    constructor(
        public sub: number,
        public email: string,
        public nombre: string,
        public last_name: string,
        public telefono: string,
        public rango: string,
        public rol: string,
        public registro: string,
        public dpi: string,
        public idestacion: number,
        public password: string
    ){}
}