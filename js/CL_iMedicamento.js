export default class CL_iMedicamento{
    leerCodigo(){
        return prompt("ingrese el codigo del medicamento");
    }
    leerPrecio(){
        return prompt("ingrese el precio del medicamento");
    }
    leerCantVendida(){
        return prompt("ingrese la cantidad vendida del medicamento");
    }
    solicitarOpcion(){
        return prompt("¿Deseas continuar con el procedimiento?.  Presiona 1 para continuar, Presiona 2 para finalizar");
    }
    reporteMedicamento(c,p,cv,montoVendido){
        return `
        <br> Codigo del medicamente: ${c}
        <br> Precio del medicamento: ${p}
        <br> Cantidad vendida: ${cv}
        <br> Monto vendido: ${montoVendido}$
        `
    }
}