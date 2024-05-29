const facturas = [
    {
        "razon_social": "Empresa A",
        "cuit": "30-12345678-1",
        "fecha_factura": "2024-01-15",
        "tipo_factura": "A",
        "numero_factura": "0001-00001234",
        "tipo_iva": "21%",
        "monto_total": 50000,
        "concepto": "Compra de insumos"
    },
    {
        "razon_social": "Empresa B",
        "cuit": "30-87654321-2",
        "fecha_factura": "2024-02-20",
        "tipo_factura": "B",
        "numero_factura": "0002-00005678",
        "tipo_iva": "10.5%",
        "monto_total": 15000,
        "concepto": "Servicios de consultoría"
    },
    {
        "razon_social": "Empresa C",
        "cuit": "30-11223344-3",
        "fecha_factura": "2024-03-10",
        "tipo_factura": "C",
        "numero_factura": "0003-00009876",
        "tipo_iva": "21%",
        "monto_total": 20000,
        "concepto": "Mantenimiento de equipos"
    },
    {
        "razon_social": "Empresa D",
        "cuit": "30-44332211-4",
        "fecha_factura": "2024-04-05",
        "tipo_factura": "A",
        "numero_factura": "0004-00004567",
        "tipo_iva": "10.5%",
        "monto_total": 7500,
        "concepto": "Venta de productos"
    },
    {
        "razon_social": "Empresa E",
        "cuit": "30-99887766-5",
        "fecha_factura": "2024-05-18",
        "tipo_factura": "B",
        "numero_factura": "0005-00003210",
        "tipo_iva": "21%",
        "monto_total": 30000,
        "concepto": "Desarrollo de software"
    },
    {
        "razon_social": "Empresa A",
        "cuit": "30-12345678-1",
        "fecha_factura": "2024-06-25",
        "tipo_factura": "C",
        "numero_factura": "0006-00008765",
        "tipo_iva": "10.5%",
        "monto_total": 12500,
        "concepto": "Distribución de mercadería"
    },
    {
        "razon_social": "Empresa B",
        "cuit": "30-87654321-2",
        "fecha_factura": "2024-07-13",
        "tipo_factura": "A",
        "numero_factura": "0007-00007654",
        "tipo_iva": "21%",
        "monto_total": 45000,
        "concepto": "Transporte de cargas"
    },
    {
        "razon_social": "Empresa C",
        "cuit": "30-11223344-3",
        "fecha_factura": "2024-08-30",
        "tipo_factura": "B",
        "numero_factura": "0008-00006543",
        "tipo_iva": "10.5%",
        "monto_total": 60000,
        "concepto": "Obras de construcción"
    }
]

const proveedores = [
    {
        "razon_social": "Empresa A",
        "cuit": "30-12345678-1",
        "telefono": "+54 11 1234-5678",
        "mail": "contacto@empresaA.com.ar",
        "direccion": "Avenida Siempre Viva 123, Buenos Aires",
        "comentario": "Empresa A se especializa en la venta de insumos y equipos de oficina."
    },
    {
        "razon_social": "Empresa B",
        "cuit": "30-87654321-2",
        "telefono": "+54 11 8765-4321",
        "mail": "info@empresaB.com.ar",
        "direccion": "Calle Falsa 456, Buenos Aires",
        "comentario": "Empresa B ofrece servicios de consultoría y asesoramiento empresarial."
    },
    {
        "razon_social": "Empresa C",
        "cuit": "30-11223344-3",
        "telefono": "+54 11 1122-3344",
        "mail": "ventas@empresaC.com.ar",
        "direccion": "Boulevard de los Sueños 789, Córdoba",
        "comentario": "Empresa C se dedica a la distribución y mantenimiento de equipos industriales."
    },
    {
        "razon_social": "Empresa D",
        "cuit": "30-44332211-4",
        "telefono": "+54 11 4433-2211",
        "mail": "soporte@empresaD.com.ar",
        "direccion": "Ruta 22, Kilómetro 5, Mendoza",
        "comentario": "Empresa D provee soluciones de tecnología y software a medida."
    },
    {
        "razon_social": "Empresa E",
        "cuit": "30-99887766-5",
        "telefono": "+54 11 9988-7766",
        "mail": "contacto@empresaE.com.ar",
        "direccion": "Calle de la Innovación 321, Rosario",
        "comentario": "Empresa E es líder en la comercialización de productos electrónicos y de consumo."
    }
]

const $tr = document.getElementById("content");

console.log(proveedores)

proveedores.forEach(proveedor => {
    $tr.innerHTML += `<td>${proveedor.razon_social} ${proveedor.telefono}</td>`;
    
});
