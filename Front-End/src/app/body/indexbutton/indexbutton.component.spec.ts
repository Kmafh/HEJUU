import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexbuttonComponent } from './indexbutton.component';

describe('IndexbuttonComponent', () => {
  let component: IndexbuttonComponent;
  let fixture: ComponentFixture<IndexbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
