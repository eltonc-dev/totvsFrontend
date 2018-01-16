import { Component, OnInit } from '@angular/core';
import { Servico } from '../../models/servico';
import { GerenciadorServicosService } from '../../services/gerenciador-servicos.service';
import { NotificacaoService } from '../../services/notificacao.service';
import { MensagemErro } from '../../models/mensagem-erro';



@Component({
  selector: 'app-servico-crud',
  templateUrl: './servico-crud.component.html',
  styleUrls: ['./servico-crud.component.css']
})
export class ServicoCrudComponent implements OnInit {

  constructor(private _gerenciadorServicos : GerenciadorServicosService , private _toast : NotificacaoService ) { }

  ngOnInit(){}

  mudaStatusServico( servico : Servico ) {
    let resposta =  this._gerenciadorServicos.editar(servico.id , servico) 
    if ( resposta instanceof Servico ) {
      this._toast.toastSucesso( resposta.descricao + " foi " + (resposta.ativo?'Ativado':'Inativado') )
    } else {
      this._toast.toastErro( (<MensagemErro>resposta).mensagem )
    }
  }
}

