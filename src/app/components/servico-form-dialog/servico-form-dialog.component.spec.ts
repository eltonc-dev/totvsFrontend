import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoFormDialogComponent } from './servico-form-dialog.component';

describe('ServicoFormDialogComponent', () => {
  let component: ServicoFormDialogComponent;
  let fixture: ComponentFixture<ServicoFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
