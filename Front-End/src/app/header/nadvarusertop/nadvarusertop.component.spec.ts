import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadvarusertopComponent } from './nadvarusertop.component';

describe('NadvarusertopComponent', () => {
  let component: NadvarusertopComponent;
  let fixture: ComponentFixture<NadvarusertopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NadvarusertopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NadvarusertopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
