export default function Acerca() {

  return (

    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Imagen */}

        <div className="relative">

          <img
            src="/pan4.jpg"
            className="rounded-2xl shadow-lg w-full"
          />

          <div className="absolute bottom-6 right-6 bg-orange-500 text-white px-6 py-4 rounded-xl text-center shadow-lg">

            <p className="text-3xl font-bold">
              100%
            </p>

            <p className="text-sm">
              ARTESANAL
            </p>

          </div>

        </div>


        {/* Texto */}

        <div className="space-y-6">

          <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
            NUESTRA HISTORIA
          </span>

          <h2 className="text-4xl font-bold leading-tight">

            Pasión por el sabor, <br />

            <span className="text-orange-500">
              tradición en cada mordida.
            </span>

          </h2>

          <p className="text-gray-600 leading-relaxed">

            En nuestra microempresa, no solo hacemos leños y baguettes;
            creamos experiencias. Lo que comenzó en una cocina familiar
            en Guanajuato como el deseo de compartir el auténtico pan
            dorado a la plancha, hoy se convierte en tu mejor opción
            de cena a domicilio.

          </p>


          {/* Características */}

          <div className="grid grid-cols-2 gap-6 pt-4">

            <div className="flex gap-3">

              <div className="bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-lg">
                ✓
              </div>

              <div>

                <h4 className="font-semibold">
                  Ingredientes Locales
                </h4>

                <p className="text-gray-500 text-sm">
                  Apoyamos a productores de la región para garantizar frescura.
                </p>

              </div>

            </div>


            <div className="flex gap-3">

              <div className="bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-lg">
                ⏱
              </div>

              <div>

                <h4 className="font-semibold">
                  Entrega Rápida
                </h4>

                <p className="text-gray-500 text-sm">
                  Tus leños llegan calientes y crujientes a la puerta de tu casa.
                </p>

              </div>

            </div>

          </div>


          {/* Clientes */}

          <p className="text-gray-500 pt-4">
            +100 clientes ya probaron el sabor de Guanajuato esta semana.
          </p>

        </div>

      </div>

    </section>

  )

}