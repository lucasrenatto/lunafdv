export class EventosResult{
    public isSuccess:boolean;
    public message:string;
    public result:EventosModel[];
}


export class EventosModel{
public id:number;
public cidadeEvento:string;
public dataHoraEvento:Date;
public eventoFinalizado:boolean;
public temaEvento:string;
public UfEvento:string;
}