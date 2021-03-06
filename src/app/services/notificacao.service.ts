import { Injectable } from '@angular/core';
import toastr from 'toastr';

@Injectable()
export class NotificacaoService {

  constructor() { }

  toastSucesso(mensagem) {
    this.toast( mensagem , 'success' )
  }
  
  toastErro(mensagem) {
    this.toast( mensagem , 'error' )
  }

  private toast( mensagem: string , tipo: string ){
    toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-center",
      "preventDuplicates": true,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
    toastr[tipo](mensagem)
  }

}
