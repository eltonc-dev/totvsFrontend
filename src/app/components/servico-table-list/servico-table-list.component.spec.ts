import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoTableListComponent } from './servico-table-list.component';

describe('ServicoTableListComponent', () => {
  let component: ServicoTableListComponent;
  let fixture: ComponentFixture<ServicoTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
