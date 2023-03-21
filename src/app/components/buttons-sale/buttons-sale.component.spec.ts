import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsSaleComponent } from './buttons-sale.component';

describe('ButtonsSaleComponent', () => {
  let component: ButtonsSaleComponent;
  let fixture: ComponentFixture<ButtonsSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
