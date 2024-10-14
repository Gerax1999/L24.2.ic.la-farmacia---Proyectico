export default class CL_Farmacia{
    constructor(){
        this.acumMontosVendidos = 0,0;
        this.menosDestacado = 500;
        this.codigoMenor= ' ';
    }
    procesarMedicamento(medicamento){
        this.acumMontosVendidos += medicamento.montoVendido();

        if( medicamento.cantVendida < this.menosDestacado){
            this.menosDestacado = medicamento.cantVendida;
            this.codigoMenor = medicamento.codigo;
        }
    }
    totalVendido(){
        return this.acumMontosVendidos;
    }
    menosVendido(){
        return this.codigoMenor;
    }

}