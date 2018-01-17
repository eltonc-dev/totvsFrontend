import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, style, state, transition, animate, keyframes } from '@angular/animations';
import { Servico } from '../../models/servico';

@Component({
  selector: 'app-botao-controle-crud',
  templateUrl: './botao-controle-crud.component.html',
  styleUrls: ['./botao-controle-crud.component.css'],
  animations: [
      trigger('visibilidadeBotao',[
          state('fechado',style({
            display: 'none',
          })),
          state('aberto',style({
            display: 'block',
          })),
          transition('fechado <=> aberto', animate('100ms'))
      ]) ,
  ]
})
export class BotaoControleCrudComponent implements OnInit {

  estadoBotao: string = 'fechado'

  @Input() servico : Servico

  @Output() ativaEdicao : EventEmitter<Servico> = new EventEmitter()
  @Output() ativaDelecao : EventEmitter<Servico> = new EventEmitter()

  constructor() { }

  ngOnInit() {
    if(!this.servico) {
      console.error('É necessário informar um serviço para o botaoControleCrud')
    }
  }

  controlaEstadoBotao() {
    this.estadoBotao = (this.estadoBotao === 'fechado' ? 'aberto':'fechado')
  }

  editarClicado() {
    this.controlaEstadoBotao()
    this.ativaEdicao.emit(this.servico)
  }

  deletarClicado() {
    this.controlaEstadoBotao()
    this.ativaDelecao.emit(this.servico)
  }

}
