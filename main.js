import { ventas } from "./datos.js";
import { registrarVentas, calcularTotal } from "./operaciones.js";



let nuevaVentas = [
    { producto: "celular-Iphone-18", cantidad: 1, precioUnitario: 5000000 },
    { producto: "computador", cantidad: 2, precioUnitario: 2000000 }
];



registrarVentas(ventas, nuevaVentas);
console.log(ventas);