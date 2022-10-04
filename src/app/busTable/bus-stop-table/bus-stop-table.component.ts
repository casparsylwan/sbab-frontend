import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BussLinje } from 'src/app/models/bussLinje';

@Component({
  selector: 'app-bus-stop-table',
  templateUrl: './bus-stop-table.component.html',
  styleUrls: ['./bus-stop-table.component.scss']
})
export class BusStopTableComponent implements OnInit {
  @Input()
  busLine: BussLinje | undefined;
  @Output()
  busLineEmitter = new EventEmitter();

  constructor() { }


  ngOnInit(): void {
  }

  back(){
    this.busLineEmitter.emit();
  }
}
