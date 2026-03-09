import { useState } from "react";

export default function Pedidos() {

  const [producto, setProducto] = useState("Hawaiano");
  const [cantidad, setCantidad] = useState(1);
  const [carrito, setCarrito] = useState([]);
  const [pedidoEnviado, setPedidoEnviado] = useState(false);

  const precios = {
    Hawaiano: 75,
    Choriqueso: 80,
    Salchicha: 65,
    "Puntas de filete": 115,
    Especial: 95
  };

  const agregarProducto = () => {

    const precio = precios[producto];

    const nuevo = {
      nombre: producto,
      cantidad: Number(cantidad),
      subtotal: precio * Number(cantidad)
    };

    setCarrito([...carrito, nuevo]);
    setCantidad(1);
  };

  const total = carrito.reduce((acc, item) => acc + item.subtotal, 0);

  const enviarPedido = () => {
    if (carrito.length === 0) return;
    setPedidoEnviado(true);
  };

  return (

    <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-orange-100 to-orange-50 p-6">

      {/* MENSAJE DE CONFIRMACIÓN */}

      {pedidoEnviado && (

        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-white p-10 rounded-3xl text-center shadow-2xl space-y-4">

            <h2 className="text-4xl font-bold text-orange-500">
              🎉 ¡Tus leños van en camino!
            </h2>

            <p className="text-gray-600">
              Gracias por tu pedido
            </p>

            <button
              onClick={() => setPedidoEnviado(false)}
              className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600"
            >
              Cerrar
            </button>

          </div>

        </div>

      )}

      {/* TARJETA */}

      <div className="bg-white w-170 rounded-3xl shadow-2xl p-12 space-y-8 border border-gray-100">

        <div className="text-center space-y-2">

          <h1 className="text-4xl font-bold text-orange-500">
            MI PEDIDO
          </h1>

          <p className="text-gray-500">
            Completa tus datos para enviarte tus leños
          </p>

        </div>

        {/* DATOS */}

        <div className="grid grid-cols-2 gap-6">

          <input
            placeholder="¿Quién recibe?"
            className="border p-3 rounded-xl"
          />

          <input
            placeholder="Número de teléfono"
            className="border p-3 rounded-xl"
          />

        </div>

        <input
          placeholder="Ubicación / Dirección"
          className="w-full border p-3 rounded-xl"
        />

        <textarea
          placeholder="Notas (opcional)"
          className="w-full border p-3 rounded-xl"
        />

        {/* PASO 2 */}

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 bg-orange-500 text-white flex items-center justify-center rounded-full font-bold">
            2
          </div>

          <h2 className="font-semibold text-lg">
            Selecciona tus leños
          </h2>

        </div>

        {/* SELECTOR */}

        <div className="grid grid-cols-3 gap-4">

          <select
            value={producto}
            onChange={(e) => setProducto(e.target.value)}
            className="border p-3 rounded-xl"
          >

            <option value="Hawaiano">Hawaiano - $75</option>
            <option value="Choriqueso">Choriqueso - $80</option>
            <option value="Salchicha">Salchicha - $65</option>
            <option value="Puntas de filete">Puntas de filete - $115</option>
            <option value="Especial">Especial - $95</option>

          </select>

          <input
            type="number"
            min="1"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            className="border p-3 rounded-xl text-center"
          />

          <button
            onClick={agregarProducto}
            className="bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600"
          >
            Agregar
          </button>

        </div>

        {/* CARRITO */}

        <div className="bg-gray-50 rounded-2xl p-5 space-y-3 border">

          {carrito.length === 0 && (
            <p className="text-gray-400 text-center">
              Tus leños aparecerán aquí
            </p>
          )}

          {carrito.map((item, index) => (

            <div
              key={index}
              className="flex justify-between"
            >

              <span>
                {item.nombre} x{item.cantidad}
              </span>

              <span>
                ${item.subtotal}
              </span>

            </div>

          ))}

          {carrito.length > 0 && (

            <div className="border-t pt-3 flex justify-between font-bold text-lg">

              <span>Total</span>

              <span className="text-orange-500">
                ${total}
              </span>

            </div>

          )}

        </div>

        {/* BOTON */}

        <button
          onClick={enviarPedido}
          className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600"
        >
          Enviar pedido
        </button>

      </div>

    </div>

  );
}