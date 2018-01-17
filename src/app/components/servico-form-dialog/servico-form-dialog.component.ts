import { Component, OnInit, Input,ViewContainerRef, EventEmitter, Output } from '@angular/core';
import { Servico } from '../../models/servico';
import { ControlaDialogService } from '../../services/controla-dialog.service';
import { GerenciadorGruposService } from '../../services/gerenciador-grupos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-servico-form-dialog',
  templateUrl: './servico-form-dialog.component.html',
  styleUrls: ['./servico-form-dialog.component.css']
})
export class ServicoFormDialogComponent implements OnInit {

  @Input() servico : Servico = new Servico()
  
  @Output() fechar : EventEmitter<Servico> =  new EventEmitter()
  @Output() salvar : EventEmitter<Servico> =  new EventEmitter()

  listaGrupos : Array<String>
  formServico : FormGroup

  constructor( private _rootViewContainer : ViewContainerRef , private _gerenciadorGrupos : GerenciadorGruposService , private _formBuilder : FormBuilder ) {
  }

  dataMask = [ /\d/, /\d/, '/', /\d/, /\d/, '/',/\d/, /\d/,/\d/, /\d/,]
  
  ngOnInit() {
    this.listaGrupos = this._gerenciadorGrupos.listar()
    const dataRegex = /^(((((0[1-9])|(1\d)|(2[0-8]))\/((0[1-9])|(1[0-2])))|((31\/((0[13578])|(1[02])))|((29|30)\/((0[1,3-9])|(1[0-2])))))\/((20[0-9][0-9])|(19[0-9][0-9])))|((29\/02\/(19|20)(([02468][048])|([13579][26]))))$/
    const numeroRegex = /^[0-9]*$/
    this.formServico = this._formBuilder.group( {
      descricao : this._formBuilder.control(this.servico.descricao || '', [Validators.required]),
      grupo : this._formBuilder.control(this.servico.grupo || '',[Validators.required]),
      aliquota : this._formBuilder.control(this.servico.aliquota || '', [Validators.required] ),
      inicioVigencia : this._formBuilder.control(moment(this.servico.dtInicioVigencia).format('DD/MM/YYYY') || '', [Validators.required,Validators.minLength(10), Validators.maxLength(10),Validators.pattern(dataRegex) ]),
      finalVigencia : this._formBuilder.control(moment(this.servico.dtFimVigencia).format('DD/MM/YYYY') || '', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(dataRegex)]),
      ativo : this._formBuilder.control(this.servico.ativo) 
    } )
  }


  close () {
    this.fechar.emit( this.servico )
  }

  onSubmit(form){
    this.servico.descricao = form.value.descricao
    this.servico.grupo = form.value.grupo
    this.servico.aliquota = form.value.aliquota
    this.servico.dtInicioVigencia = moment(form.value.inicioVigencia,'DD/MM/YYYY').toDate()
    this.servico.dtFimVigencia = moment(form.value.finalVigencia,'DD/MM/YYYY').toDate()
    this.servico.ativo = form.value.ativo
    this.salvar.emit( this.servico )

  }
}
