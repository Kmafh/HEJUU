import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructmenuComponent } from './structmenu.component';

describe('StructmenuComponent', () => {
  let component: StructmenuComponent;
  let fixture: ComponentFixture<StructmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
