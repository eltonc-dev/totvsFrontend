import { TestBed, inject } from '@angular/core/testing';

import { GerenciadorGruposService } from './gerenciador-grupos.service';

describe('GerenciadorGruposService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GerenciadorGruposService]
    });
  });

  it('Foi criado', inject([GerenciadorGruposService], (service: GerenciadorGruposService) => {
    expect(service).toBeTruthy();
  }));
});
