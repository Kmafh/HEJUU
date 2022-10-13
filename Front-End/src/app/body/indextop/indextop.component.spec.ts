import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndextopComponent } from './indextop.component';

describe('IndextopComponent', () => {
  let component: IndextopComponent;
  let fixture: ComponentFixture<IndextopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndextopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndextopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
