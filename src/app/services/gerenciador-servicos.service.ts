import { Injectable } from '@angular/core';
import { Servico } from '../models/servico';
import * as moment from 'moment';
import { MensagemErro } from '../models/mensagem-erro';

@Injectable()
export class GerenciadorServicosService {

  private listaServicos : Array<Servico> = new Array

  constructor() { 
    //todo: remover os dados mockados após criar implementação de adicionar.
    /*let servico = new Servico()
    servico.descricao = 'algo escrito'
    servico.ativo = true
    servico.aliquota = 19
    servico.grupo = 'Restaurantes'
    servico.dtFimVigencia = moment().add( 2 , 'days' ).toDate()
    servico.dtInicioVigencia = moment().add( 1 , 'days' ).toDate()
    this.adicionar(servico)
    servico = new Servico()
    servico.descricao = 'algo escrito 3' 
    servico.ativo = false
    servico.aliquota = 4
    servico.grupo = 'Bares'
    servico.dtFimVigencia = moment().add( 6 , 'days' ).toDate()
    servico.dtInicioVigencia = moment().add( 4 , 'days' ).toDate()
    this.adicionar(servico)*/
  }

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
   * editar um serviço
   * @param id id do Serviço que deseja
   */
  editar( id : number , servicoEditado : Servico ) {
    let servico = this.listaServicos.filter( ( element ) => id === element.id )
    if( servico.length <= 0 ) return new MensagemErro('Serviço não encontrado com o Id informado.')
    servico[0].descricao = servicoEditado.descricao
    servico[0].grupo = servicoEditado.grupo
    servico[0].aliquota = servicoEditado.aliquota
    servico[0].dtInicioVigencia = servicoEditado.dtInicioVigencia
    servico[0].dtFimVigencia = servicoEditado.dtFimVigencia
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
