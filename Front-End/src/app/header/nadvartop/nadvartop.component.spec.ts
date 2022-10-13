import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadvartopComponent } from './nadvartop.component';

describe('NadvartopComponent', () => {
  let component: NadvartopComponent;
  let fixture: ComponentFixture<NadvartopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NadvartopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NadvartopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
