import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoCrudComponent } from './servico-crud.component';

describe('ServicoCrudComponent', () => {
  let component: ServicoCrudComponent;
  let fixture: ComponentFixture<ServicoCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
