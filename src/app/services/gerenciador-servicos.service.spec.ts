import { TestBed, inject } from '@angular/core/testing';

import { GerenciadorServicosService } from './gerenciador-servicos.service';
import { Servico } from '../models/servico';
import { MensagemErro } from '../models/mensagem-erro';
import * as moment from 'moment';

describe('GerenciadorServicosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GerenciadorServicosService]
    });
  });

  it('Serviço gerenciador de serviços criado', inject([GerenciadorServicosService], (service: GerenciadorServicosService) => {
    expect(service).toBeTruthy();
  }));

  it('método listar retorna lista de serviços', inject([GerenciadorServicosService], (service: GerenciadorServicosService) => {
    let respostaAdicionar = service.listar()
    expect(respostaAdicionar).toEqual(jasmine.any(Array))
  }));

  it('método adicionar deve retornar Mensagem de erro quando servico incompleto', inject([GerenciadorServicosService], (service: GerenciadorServicosService) => {
    let servicoObj = new Servico()
    let respostaAdicionar = service.adicionar(servicoObj)
    expect(respostaAdicionar).toEqual(jasmine.any(MensagemErro))
    expect( ( <MensagemErro>respostaAdicionar ).mensagem ).toEqual('Preencha as informaçoes do serviço corretamente.')
  }));
  
  it('método adicionar deve retornar Mensagem de erro quando datas de vigência incorretas', inject([GerenciadorServicosService], (service: GerenciadorServicosService) => {
    let servicoObj = new Servico()
    servicoObj.descricao = 'Serviço de teste'
    servicoObj.ativo = true
    servicoObj.aliquota = 3
    servicoObj.grupo = 'Bares'
    servicoObj.dtFimVigencia = moment().add(5,'days').toDate()
    servicoObj.dtInicioVigencia = moment().add(6,'days').toDate()
    let respostaAdicionar = service.adicionar(servicoObj)
    expect(respostaAdicionar).toEqual(jasmine.any(MensagemErro))
    expect( ( <MensagemErro>respostaAdicionar ).mensagem ).toEqual('O inicio da vigência deve ser anterior ao do termino.')
  })); 

  it('método adicionar deve retornar ok', inject([GerenciadorServicosService], (service: GerenciadorServicosService) => {
    let quantidadeServicos = service.listar().length
    let servicoObj = new Servico()
    servicoObj.descricao = 'Serviço de teste 1'
    servicoObj.ativo = true
    servicoObj.aliquota = 3
    servicoObj.grupo = 'Bares'
    servicoObj.dtFimVigencia = moment().add( 6 , 'days' ).toDate()
    servicoObj.dtInicioVigencia = moment().add( 1 , 'days' ).toDate()
    let respostaAdicionar = service.adicionar( servicoObj )
    let quantidadeServicosPosInserção = service.listar().length
    expect(respostaAdicionar).toEqual( true )
    expect(quantidadeServicosPosInserção).toEqual( quantidadeServicos + 1 ) //verifica inserseção do novo registro

  })); 

  it('método buscarPorId deve retornar mensagem erro', inject([GerenciadorServicosService], (service: GerenciadorServicosService) => {
    let resultadoBusca = service.buscarPorId(123)
    expect(resultadoBusca).toEqual( jasmine.any(MensagemErro) )
    expect( ( <MensagemErro>resultadoBusca ).mensagem ).toEqual('Serviço não encontrado com o Id informado.')
  }));

  it('método buscarPorId deve retornar mensagem serviço buscado', inject([GerenciadorServicosService], (service: GerenciadorServicosService) => {
    let novoServico = new Servico()
    novoServico.descricao = 'Serviço teste 2'
    novoServico.ativo = true
    novoServico.aliquota = 19
    novoServico.grupo = 'Restaurante'
    novoServico.dtFimVigencia = moment().add( 2 , 'days' ).toDate()
    novoServico.dtInicioVigencia = moment().add( 1 , 'days' ).toDate()
    service.adicionar(novoServico)

    let resultadoBusca = service.buscarPorId( novoServico.id )

    expect(resultadoBusca).toEqual( jasmine.any(Servico) )
    expect( ( <Servico>resultadoBusca ).descricao ).toEqual( novoServico.descricao )
    expect( ( <Servico>resultadoBusca ).ativo ).toEqual( novoServico.ativo )
    expect( ( <Servico>resultadoBusca ).aliquota ).toEqual( novoServico.aliquota )
    expect( ( <Servico>resultadoBusca ).grupo ).toEqual( novoServico.grupo )
    expect( ( <Servico>resultadoBusca ).dtFimVigencia ).toEqual( novoServico.dtFimVigencia )
    expect( ( <Servico>resultadoBusca ).dtInicioVigencia ).toEqual( novoServico.dtInicioVigencia )
  }));

  it('método editar deve retornar objeto editado', inject([GerenciadorServicosService], (service: GerenciadorServicosService) => {
    let novoServico = new Servico()
    novoServico.descricao = 'Serviço teste sem editar'
    novoServico.ativo = true
    novoServico.aliquota = 19
    novoServico.grupo = 'Restaurante'
    novoServico.dtFimVigencia = moment().add( 2 , 'days' ).toDate()
    novoServico.dtInicioVigencia = moment().add( 1 , 'days' ).toDate()
    service.adicionar(novoServico)
    novoServico.descricao = "Servico Editado"
    let resultadoBusca = service.editar( novoServico.id , novoServico )

    expect(resultadoBusca).toEqual( jasmine.any(Servico) )
    expect( ( <Servico>resultadoBusca ).descricao ).toEqual( novoServico.descricao )
    expect( ( <Servico>resultadoBusca ).ativo ).toEqual( novoServico.ativo )
    expect( ( <Servico>resultadoBusca ).aliquota ).toEqual( novoServico.aliquota )
    expect( ( <Servico>resultadoBusca ).grupo ).toEqual( novoServico.grupo )
    expect( ( <Servico>resultadoBusca ).dtFimVigencia ).toEqual( novoServico.dtFimVigencia )
    expect( ( <Servico>resultadoBusca ).dtInicioVigencia ).toEqual( novoServico.dtInicioVigencia )
  }));

  it('método deletar deve retornar erro', inject([GerenciadorServicosService], (service: GerenciadorServicosService) => {
    let resultadoBusca = service.deletar(123)
    expect(resultadoBusca).toEqual( jasmine.any(MensagemErro) )
    expect( ( <MensagemErro>resultadoBusca ).mensagem ).toEqual('Serviço não encontrado com o Id informado.')
  }));

  it('método deletar deve retornar Sucesso', inject([GerenciadorServicosService], (service: GerenciadorServicosService) => {
    let novoServico = new Servico()
    novoServico.descricao = 'Serviço teste 3'
    novoServico.ativo = true
    novoServico.aliquota = 19
    novoServico.grupo = 'Restaurante'
    novoServico.dtFimVigencia = moment().add( 2 , 'days' ).toDate()
    novoServico.dtInicioVigencia = moment().add( 1 , 'days' ).toDate()
    service.adicionar(novoServico)
    let resultadoBusca = service.deletar(novoServico.id)
    expect(resultadoBusca).toEqual( jasmine.any(Servico) )
    expect( ( <Servico>resultadoBusca ).id ).toEqual(novoServico.id)
  }));
});
