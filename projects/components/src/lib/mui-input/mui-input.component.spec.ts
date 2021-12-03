import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiInputComponent } from './mui-input.component';

describe('MuiInputComponent', () => {
  let component: MuiInputComponent;
  let fixture: ComponentFixture<MuiInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuiInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuiInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
