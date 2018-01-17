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
@Injectable()
export class ControlaDialogService {

  factoryResolver : ComponentFactoryResolver
  rootViewContainer : ViewContainerRef
  component : ComponentRef<ServicoFormDialogComponent>

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver
  }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }

  setResponsavelSalvar() {
    
  }

  adicionarDialogNovo() {
    this.adicionar()
  }

  adicionarDialogEditar( servico : Servico ){
    this.adicionar()
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

  private salvar( service : Servico ) {
    this.remover()
  }
  

}
