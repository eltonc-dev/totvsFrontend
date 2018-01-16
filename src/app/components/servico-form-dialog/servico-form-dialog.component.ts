import { Component, OnInit, Input } from '@angular/core';
import { Servico } from '../../models/servico';

@Component({
  selector: 'app-servico-form-dialog',
  templateUrl: './servico-form-dialog.component.html',
  styleUrls: ['./servico-form-dialog.component.css']
})
export class ServicoFormDialogComponent implements OnInit {

  @Input() servico : Servico
  
  constructor() { }

  ngOnInit() {
  }

}
