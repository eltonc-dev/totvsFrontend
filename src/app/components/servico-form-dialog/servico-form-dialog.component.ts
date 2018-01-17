import { Component, OnInit, Input,ViewContainerRef, EventEmitter, Output } from '@angular/core';
import { Servico } from '../../models/servico';
import { ControlaDialogService } from '../../services/controla-dialog.service';

@Component({
  selector: 'app-servico-form-dialog',
  templateUrl: './servico-form-dialog.component.html',
  styleUrls: ['./servico-form-dialog.component.css']
})
export class ServicoFormDialogComponent implements OnInit {

  @Input() servico : Servico
  @Input() titulo : string = 'Novo serviço'
  
  @Output() fechar : EventEmitter<Servico> =  new EventEmitter()
  @Output() salvar : EventEmitter<Servico> =  new EventEmitter()

  constructor( private _rootViewContainer : ViewContainerRef) {
    //this._controladorDialog.setRootViewContainerRef(this._rootViewContainer)
   }

  ngOnInit() {
  }

  close(){
    this.fechar.emit( this.servico )
  }

}
