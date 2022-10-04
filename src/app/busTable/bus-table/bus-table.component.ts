import { Component, OnInit } from '@angular/core';
import { BussLinje } from 'src/app/models/bussLinje';
import { BusServiceService } from 'src/app/service/bus-service.service';

@Component({
  selector: 'app-bus-table',
  templateUrl: './bus-table.component.html',
  styleUrls: ['./bus-table.component.scss']
})
export class BusTableComponent implements OnInit {

  busLines:BussLinje[] = [];
  busLine:BussLinje | undefined;
  

  constructor(private busLineService: BusServiceService) { 
    busLineService.getAllBusLines()
        .subscribe((bus) => {
          console.log(bus);
          this.busLines = bus});
  }

  ngOnInit(): void {
  }

  getStopsNames(busLineNumber:string){
    this.busLine = this.busLines.find((bus) => bus.LineNumber === busLineNumber );
  }

  clearBusLine(){
    this.busLine = undefined;
  }
}
