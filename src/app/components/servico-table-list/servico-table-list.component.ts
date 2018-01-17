import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { GerenciadorServicosService } from '../../services/gerenciador-servicos.service';
import { Servico } from '../../models/servico';
import { NotificacaoService } from '../../services/notificacao.service';


@Component({
  selector: 'app-servico-table-list',
  templateUrl: './servico-table-list.component.html',
  styleUrls: ['./servico-table-list.component.css']
})
export class ServicoTableListComponent implements OnInit {

  @Output() onChangeStatusServico : EventEmitter<Servico> = new EventEmitter()
  @Output() edicaoAtiva : EventEmitter<Servico> = new EventEmitter()
  @Output() delecaoAtiva : EventEmitter<Servico> = new EventEmitter()

  @Input() colunas : Array<String>
  @Input() servicos: Array<Servico>
  
  listaServicos : MatTableDataSource<Servico> ;

  constructor( private _gerenciadorServicos : GerenciadorServicosService) { }
  


  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(){}

  ngDoCheck() {
    this.listaServicos = new MatTableDataSource(this.servicos);
  }

  ngAfterViewInit() {
    this.listaServicos.sort = this.sort;
  }

  /**
   * Responsável por notificar uma solicitação de mudança de status   
   * @param servico servico que teve status modificado  
   * @param value valor do status
   */
  mudaStatus(servico : Servico, value : boolean) {
    servico.ativo = value
    this.onChangeStatusServico.emit(servico)
  }

  /**
   * Notifica a intenção de edição no serviço
   * @param servico serviço que será editado  
   */
  editar( servico : Servico ) {
    this.edicaoAtiva.emit( servico )
  }

  /**
   * Notifica a intenção de deleção no serviço
   * @param servico serviço que será editado 
   */
  deletar( servico : Servico ) {
    this.delecaoAtiva.emit( servico )
    
  }

}



