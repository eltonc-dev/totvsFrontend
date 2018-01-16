import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GerenciadorServicosService } from './services/gerenciador-servicos.service';
import { ServicoCrudComponent } from './components/servico-crud/servico-crud.component';
import { MatTableModule, MatSortModule } from '@angular/material';
import { ServicoTableListComponent } from './components/servico-table-list/servico-table-list.component';
import { VigenciaServicoCompletaPipe } from './pipes/vigencia-servico-completa.pipe';
import { CdkTableModule } from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { } from '@angular/material';
import { NotificacaoService } from './services/notificacao.service';
import { ServicoTableList2Component } from './components/servico-table-list2/servico-table-list2.component';

@NgModule({
  declarations: [
    ServicoCrudComponent,
    ServicoTableListComponent,
    VigenciaServicoCompletaPipe,
    ServicoTableList2Component
  ],
  imports: [
    BrowserModule ,
    CdkTableModule ,
    MatTableModule ,
    MatSortModule ,
    BrowserAnimationsModule

  ],
  providers: [ GerenciadorServicosService, NotificacaoService, VigenciaServicoCompletaPipe ],
  bootstrap: [ServicoCrudComponent]
})
export class AppModule { }
