import { Pipe, PipeTransform } from '@angular/core';
import { Servico } from '../models/servico';
import * as moment from 'moment';

@Pipe({
  name: 'vigenciaServicoCompleta'
})
export class VigenciaServicoCompletaPipe implements PipeTransform {

  transform(servico: Servico , args?: any): any {
    let dataInicio = moment(servico.dtInicioVigencia).format('DD/MM/YYYY')
    let dataFinal = moment(servico.dtFimVigencia).format('DD/MM/YYYY')
    return dataInicio + ' - ' + dataFinal ;
  }

}
