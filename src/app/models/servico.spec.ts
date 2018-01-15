import { TestBed } from '@angular/core/testing';
import { Servico } from '../models/servico';

describe('models/service', () => {
    it('Valida criação de Id para objeto service', () => {
        let service = new Servico()
        expect(service.id).toBeDefined()
    })
});