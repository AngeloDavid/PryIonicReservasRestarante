import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProducComponent } from './registro-produc.component';

describe('RegistroProducComponent', () => {
  let component: RegistroProducComponent;
  let fixture: ComponentFixture<RegistroProducComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroProducComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroProducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
