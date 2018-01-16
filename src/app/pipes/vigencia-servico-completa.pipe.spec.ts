import { VigenciaServicoCompletaPipe } from './vigencia-servico-completa.pipe';
import { Servico } from '../models/servico';
import * as moment from 'moment';

describe('VigenciaServicoCompletaPipe', () => {
  it('Cria o pipe', () => {
    const pipe = new VigenciaServicoCompletaPipe();
    expect(pipe).toBeTruthy();
  });

  it('Testa o pipe', () => {
    let servico = new Servico()
    servico.dtFimVigencia = moment().add( 2 , 'days' ).toDate()
    servico.dtInicioVigencia = moment().add( 1 , 'days' ).toDate()

    let stringInicio = moment(servico.dtInicioVigencia).format('DD/MM/YYYY')
    let stringFim = moment(servico.dtFimVigencia).format('DD/MM/YYYY')

    const pipe = new VigenciaServicoCompletaPipe();

    let stringFormatada = pipe.transform( servico )
    expect(stringFormatada).toBe( stringInicio + ' - ' + stringFim );
  });

});
