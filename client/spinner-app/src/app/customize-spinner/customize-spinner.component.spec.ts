import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeSpinnerComponent } from './customize-spinner.component';

describe('CustomizeSpinnerComponent', () => {
  let component: CustomizeSpinnerComponent;
  let fixture: ComponentFixture<CustomizeSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizeSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
