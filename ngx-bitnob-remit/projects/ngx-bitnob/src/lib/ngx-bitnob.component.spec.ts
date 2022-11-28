import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBitnobComponent } from './ngx-bitnob.component';

describe('NgxBitnobComponent', () => {
  let component: NgxBitnobComponent;
  let fixture: ComponentFixture<NgxBitnobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBitnobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxBitnobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
