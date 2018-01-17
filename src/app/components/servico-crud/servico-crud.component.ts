import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Servico } from '../../models/servico';
import { GerenciadorServicosService } from '../../services/gerenciador-servicos.service';
import { NotificacaoService } from '../../services/notificacao.service';
import { MensagemErro } from '../../models/mensagem-erro';
import { ControlaDialogService } from '../../services/controla-dialog.service';


@Component({
  selector: 'app-servico-crud',
  templateUrl: './servico-crud.component.html',
  styleUrls: ['./servico-crud.component.css']
})
export class ServicoCrudComponent implements OnInit {

  colunas : Array<string>
  listaServicos : Array<Servico>

  

  constructor(private _gerenciadorServicos : GerenciadorServicosService , private _toast : NotificacaoService , private _controladorDialog : ControlaDialogService , private _rootViewContainer : ViewContainerRef) { 
    this.colunas = ['Ativo','Descrição','Grupo','Alíquota','Data de Vigência','Açoes']
    this.listaServicos = this._gerenciadorServicos.listar();
    this._controladorDialog.setRootViewContainerRef(this._rootViewContainer)
  }

  ngOnInit(){}

  mudaStatusServico( servico : Servico ) {
    let resposta =  this._gerenciadorServicos.editar(servico.id , servico) 
    if ( resposta instanceof Servico ) {
      this._toast.toastSucesso( resposta.descricao + " foi " + (resposta.ativo?'Ativado':'Inativado') )
    } else {
      this._toast.toastErro( (<MensagemErro>resposta).mensagem )
    }
  }

  
  addDynamicComponent() {
    this._controladorDialog.adicionarDialogNovo()
  }

  editarServico( servico : Servico ) {

  }

  deletarServico( servico : Servico ) {
    this._gerenciadorServicos.deletar(servico.id)
    this.listaServicos = this._gerenciadorServicos.listar()
  }
}

