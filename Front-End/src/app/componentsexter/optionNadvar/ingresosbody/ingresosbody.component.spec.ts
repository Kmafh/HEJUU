import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosbodyComponent } from './ingresosbody.component';

describe('IngresosbodyComponent', () => {
  let component: IngresosbodyComponent;
  let fixture: ComponentFixture<IngresosbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresosbodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresosbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
