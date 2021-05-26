import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewremempComponent } from './viewrememp.component';

describe('ViewremempComponent', () => {
  let component: ViewremempComponent;
  let fixture: ComponentFixture<ViewremempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewremempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewremempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
