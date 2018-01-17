import { TestBed, inject } from '@angular/core/testing';

import { ControlaDialogService } from './controla-dialog.service';

describe('ControlaDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ControlaDialogService]
    });
  });

  it('should be created', inject([ControlaDialogService], (service: ControlaDialogService) => {
    expect(service).toBeTruthy();
  }));
});
