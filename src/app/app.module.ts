import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GerenciadorServicosService } from './services/gerenciador-servicos.service';
import { ServicoCrudComponent } from './components/servico-crud/servico-crud.component';
import { MatTableModule, MatSortModule } from '@angular/material';
import { ServicoTableListComponent } from './components/servico-table-list/servico-table-list.component';
import { VigenciaServicoCompletaPipe } from './pipes/vigencia-servico-completa.pipe';
import { CdkTableModule } from '@angular/cdk/table';
import { BrowserAnimationsModule , NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NotificacaoService } from './services/notificacao.service';
import { ServicoFormDialogComponent } from './components/servico-form-dialog/servico-form-dialog.component';
import { BotaoControleCrudComponent } from './components/botao-controle-crud/botao-controle-crud.component';
import { ControlaDialogService } from './services/controla-dialog.service';
import { GerenciadorGruposService } from './services/gerenciador-grupos.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
@NgModule({
  declarations: [
    ServicoCrudComponent,
    ServicoTableListComponent,
    VigenciaServicoCompletaPipe,
    ServicoFormDialogComponent,
    BotaoControleCrudComponent,
  ],
  imports: [
    BrowserModule ,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CdkTableModule ,
    MatTableModule ,
    MatSortModule ,
    ReactiveFormsModule,
    TextMaskModule,
    
  ],
  providers: [ GerenciadorGruposService , GerenciadorServicosService, NotificacaoService, VigenciaServicoCompletaPipe , ControlaDialogService],
  bootstrap: [ServicoCrudComponent],
  entryComponents: [ServicoFormDialogComponent]
})
export class AppModule { }
