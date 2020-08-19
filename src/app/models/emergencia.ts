import { Time } from '@angular/common'

export class Emergencia{

    constructor(
        public id: number,
        public titulo: string,
        public detalles: string,
        public fecha: Date,
        public hora: Time,
        public idusuario: number,
        public idtipo: number,
        public idcarro: number,
        public kilometraje: number,
        public long: string,
        public lat: string
    ){}
}