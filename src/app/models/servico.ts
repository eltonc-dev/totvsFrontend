export class Servico {
    
    public id : number
    public ativo : boolean
    public descricao : string
    public grupo : string
    public aliquota : number
    public dtInicioVigencia: Date
    public dtFimVigencia: Date

    constructor(){
        this.id = this.geraId()
        //ativo por padrão
        this.ativo = true
    }

    private geraId() {
        let random = Math.floor(1000 + Math.random() * 9000);
        let timestamp = Date.now()
        return timestamp + random
    }


}
