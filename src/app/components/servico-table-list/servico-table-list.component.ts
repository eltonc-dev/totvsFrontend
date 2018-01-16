import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
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

  colunas : Array<String>
  listaServicos : MatTableDataSource<Servico> ;

  constructor( private _gerenciadorServicos : GerenciadorServicosService) { 
    this.colunas = ['Ativo','Descrição','Grupo','Alíquota','Data de Vigência','Açoes']
    this.listaServicos = new MatTableDataSource(this._gerenciadorServicos.listar());
  }
  


  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(){}

  ngAfterViewInit() {
    this.listaServicos.sort = this.sort;
  }

  mudaStatus(servico : Servico, value : boolean) {
    servico.ativo = value
    this.onChangeStatusServico.emit(servico)
  }

}



