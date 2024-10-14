import CL_Medicamento from "./CL_Medicamento.js";
import CL_iMedicamento from "./CL_iMedicamento.js";
import CL_Farmacia from "./CL_Farmacia.js";
import CL_iFarmacia from "./CL_iFarmacia.js";

let ifarmacia = new CL_iFarmacia(),
    farmacia = new CL_Farmacia(),
    salida = document.getElementById("salida");

    let opc = 1;
    while(opc == 1){
        let imedicamento = new CL_iMedicamento(),
              c = imedicamento.leerCodigo(),
              p = imedicamento.leerPrecio(),
              cv = imedicamento.leerCantVendida(),

              medicamento = new CL_Medicamento(c,p,cv);
        
        farmacia.procesarMedicamento(medicamento);

        salida.innerHTML += imedicamento.reporteMedicamento(medicamento.codigo,medicamento.precio,medicamento.cantVendida,
            medicamento.montoVendido()) +"<br>";

            opc = imedicamento.solicitarOpcion();
    }
    salida = document.getElementById("salida");
    salida.innerHTML += ifarmacia.reporteFarmacia(farmacia.menosVendido(),farmacia.totalVendido());