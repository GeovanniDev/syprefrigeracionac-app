export default function Features() {
  return (
    <>
      <section className="py-5" id="features">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h2 className="fw-bolder mb-0">
                La forma ideal de empezar tu proyecto de refrigeración.
              </h2>
            </div>
            <div className="col-lg-8">
              <div className="row gx-5 row-cols-1 row-cols-md-2">
                <div className="col mb-5 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-award-fill"></i>
                  </div>
                  <h2 className="h5">Calidad</h2>
                  <p className="mb-0">
                    Nos caracterizamos por ofrecer equipos y servicios de
                    refrigeración y aire acondicionado con altos estándares de
                    calidad, asegurando eficiencia, durabilidad y un óptimo
                    rendimiento en cada proyecto.
                  </p>
                </div>
                <div className="col mb-5 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-truck"></i>
                  </div>
                  <h2 className="h5">Distribución</h2>
                  <p className="mb-0">
                    Trabajamos con una amplia variedad de marcas y modelos,
                    garantizando una distribución eficiente que nos permite
                    adaptarnos a las necesidades y requerimientos específicos de
                    cada cliente.
                  </p>
                </div>
                <div className="col mb-5 mb-md-0 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-coin"></i>
                  </div>
                  <h2 className="h5">Rentabilidad</h2>
                  <p className="mb-0">
                    Ofrecemos precios altamente competitivos sin comprometer la
                    calidad, brindando soluciones accesibles y eficientes para
                    maximizar el retorno de inversión de nuestros clientes..
                  </p>
                </div>
                <div className="col h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-recycle"></i>
                  </div>
                  <h2 className="h5">Sustentabilidad</h2>
                  <p className="mb-0">
                    Comprometidos con el medio ambiente, hemos desarrollado una
                    nueva línea de thermos y sistemas de aire acondicionado
                    totalmente eléctricos, contribuyendo a la reducción del
                    impacto ambiental y promoviendo el uso de energías limpias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
