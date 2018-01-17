import { Injectable } from '@angular/core';

@Injectable()
export class GerenciadorGruposService {

  constructor() { }

  /**
   * todo// por hora está mocado, mas deve buscar de algum lugar
   * Lista todos os Grupos
   */
  listar() {
    return  [
      'Bares',
      'Restaurantes',
      'Pubs'
    ];
  }



}
