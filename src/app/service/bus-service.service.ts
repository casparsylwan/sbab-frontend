import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BussLinje } from '../models/bussLinje';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusServiceService {

  constructor(private http:HttpClient) { }

  getAllBusLines():Observable<BussLinje[]>
  {
    return this.http.get<BussLinje[]>('api/v1/bus/all')
  }
}
