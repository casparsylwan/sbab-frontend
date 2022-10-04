export class BussLinje {

    LineNumber:string;

    stopPointsNames:string[] = [];

    numberOfStops:number = 0;

    constructor(LineNumber: string, stopPointsNames:string[], numberOfStops:number ){
        this.LineNumber = LineNumber;
        this.stopPointsNames = stopPointsNames;
        this.numberOfStops = numberOfStops;
    }
}