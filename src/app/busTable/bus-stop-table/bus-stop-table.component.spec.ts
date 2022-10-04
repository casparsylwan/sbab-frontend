import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusStopTableComponent } from './bus-stop-table.component';

describe('BusStopTableComponent', () => {
  let component: BusStopTableComponent;
  let fixture: ComponentFixture<BusStopTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusStopTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusStopTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
