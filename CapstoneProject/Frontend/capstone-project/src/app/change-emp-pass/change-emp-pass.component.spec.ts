import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeEmpPassComponent } from './change-emp-pass.component';

describe('ChangeEmpPassComponent', () => {
  let component: ChangeEmpPassComponent;
  let fixture: ComponentFixture<ChangeEmpPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeEmpPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeEmpPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
