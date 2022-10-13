import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentermenuComponent } from './centermenu.component';

describe('CentermenuComponent', () => {
  let component: CentermenuComponent;
  let fixture: ComponentFixture<CentermenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentermenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
