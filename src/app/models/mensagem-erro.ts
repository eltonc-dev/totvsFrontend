/**
 * Controla todas as mensagens de erro da aplicação, afim de padronizar as respostas
 */
export class MensagemErro {
    //todo : adicionar controle de códigos de erro 
    public codigo : number
    public mensagem : string

    constructor( mensagem : string , codigo?: number  ) {
        this.mensagem = mensagem
        this.codigo = codigo
    }
}
