import {
  ComponentFactoryResolver,
  Injectable,
  Inject,
  ReflectiveInjector,
  ViewContainerRef,
  
} from '@angular/core'

import { ServicoFormDialogComponent } from '../components/servico-form-dialog/servico-form-dialog.component';
import { Servico } from '../models/servico';
import { ComponentRef } from '@angular/core/src/linker/component_factory';
import { ResponsavelServicos } from '../interfaces/responsavel-servicos';
@Injectable()
export class ControlaDialogService {

  factoryResolver : ComponentFactoryResolver
  rootViewContainer : ViewContainerRef
  component : ComponentRef<ServicoFormDialogComponent>
  responsavelSalvarServicos : ResponsavelServicos
  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver
  }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }

  setResponsavelSalvar( responsavelServico : ResponsavelServicos ) {
    this.responsavelSalvarServicos = responsavelServico
  }

  adicionarDialogNovo() {
    this.adicionar()
  }

  adicionarDialogEditar( servico : Servico ){
    this.adicionar()
    
    //caso o dialog seja de edição
    if( servico ) {
      this.component.instance.servico = servico
    }
  }

  remover() {
    this.component.destroy()
  }

  private adicionar() {
    const factory = this.factoryResolver
                        .resolveComponentFactory(ServicoFormDialogComponent)
     this.component = factory
      .create(this.rootViewContainer.parentInjector)

      this.component.instance.fechar.subscribe(val => {
        this.remover()
      });

      this.component.instance.salvar.subscribe(val => {
        this.salvar(val)
      });

    this.rootViewContainer.insert(this.component.hostView)
  }

  private salvar( servico : Servico ) {
    if( !this.responsavelSalvarServicos ) {
      throw new Error('É necessário informar um responsável por salvar servicos')
    }
    this.responsavelSalvarServicos.salvar( servico )
    this.remover()
  }
  

}
