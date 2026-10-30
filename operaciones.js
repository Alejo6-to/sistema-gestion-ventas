

export function registrarVentas(ventas, nuevaVentas){

    ventas.push(...nuevaVentas)

}


export function calcularTotal(ventas) {
    let total = 0;

    ventas.forEach(venta => {
        total += venta.cantidad * venta.precioUnitario;
    });

    return total;
}