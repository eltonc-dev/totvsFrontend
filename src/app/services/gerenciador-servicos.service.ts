import { Injectable } from '@angular/core';
import { Servico } from '../models/servico';
import * as moment from 'moment';
import { MensagemErro } from '../models/mensagem-erro';

@Injectable()
export class GerenciadorServicosService {

  private listaServicos : Array<Servico> = new Array

  constructor() { }

  /**
   * Retorna a lista de serviços
   */
  listar() {
    return this.listaServicos
  }

  /**
   * Adiciona um novo serviço a lista
   * @param servico
   */
  adicionar( servico : Servico ) {
    let validacaoServico = this.validaServico( servico )
    if( validacaoServico === true ) {
      this.listaServicos.push(servico)
    }
    return validacaoServico
  }

  /**
   * Busca um serviço por Id
   * @param id id do Serviço que deseja
   */
  buscarPorId( id : number ) {
    let servico = this.listaServicos.filter( ( element ) => id === element.id )
    if( servico.length <= 0 ) return new MensagemErro('Serviço não encontrado com o Id informado.')
    return servico[0]
  }

  /**
   * Deleta um serviço da listagem
   * @param id id do Serviço que será deletado
   */
  deletar( id : number ) {
    let resultadoBusca = this.buscarPorId( id )
    if( resultadoBusca instanceof Servico ) {
      let resultado = this.listaServicos.splice( this.listaServicos.indexOf( resultadoBusca ) , 1 )
      if( resultado && resultado.length > 0 )
        return resultado[0]
      else {
        return new MensagemErro('Erro ao deletar serviço.')
      }
    }
    return resultadoBusca
  }

  
  /**
   * Faz a validação do serviço, verificando os campos obrigatórios
   * @param servico Serviço que será avaliado
   */
  private validaServico( servico : Servico ) {
    if( !servico ) return new MensagemErro('Serviço não definido.')

    if( !servico.id || 
        !servico.descricao || 
        !servico.grupo || 
        !servico.aliquota || 
        !servico.dtInicioVigencia || 
        !servico.dtFimVigencia ) 
        return new MensagemErro('Preencha as informaçoes do serviço corretamente.')

    if( moment( servico.dtInicioVigencia ).isAfter( moment( servico.dtFimVigencia ) ) ) 
        return new MensagemErro('O inicio da vigência deve ser anterior ao do termino.')

    return true
  }

  

}
