export default class CL_Medicamento{
    constructor(codigo,precio,cantVendida){
        this.codigo = codigo;
        this.precio = precio;
        this.cantVendida = cantVendida;
    }
    set codigo(c){
        this._codigo = c;
    }
    get codigo(){
        return this._codigo;
    }
    set precio(p){
        this._precio = +p;
    }
    get precio(){
        return this._precio;
    }
    set cantVendida(cv){
        this._cantVendida = +cv;
    }
    get cantVendida(){
        return this._cantVendida;
    }
    montoVendido(){
        return (this.precio * this.cantVendida);
    }
}