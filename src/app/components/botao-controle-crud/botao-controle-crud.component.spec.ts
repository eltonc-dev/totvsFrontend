import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoControleCrudComponent } from './botao-controle-crud.component';

describe('BotaoControleCrudComponent', () => {
  let component: BotaoControleCrudComponent;
  let fixture: ComponentFixture<BotaoControleCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoControleCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoControleCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
