import { BlogPreview, Features, Testimonials } from "../components";

export default function Home() {
  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="my-5 text-center text-xl-start">
                <h1 className="display-5 fw-bolder text-white mb-2">
                  Proyectos de refrigeración y aire acondicionado
                </h1>
                <p className="lead fw-normal text-white-50 mb-4">
                  Somos una empresa especializada en el desarrollo de
                  proyectos de refrigeración y aire acondicionado. Trabajamos
                  con una amplia variedad de marcas, adaptándonos a las
                  necesidades específicas de cada cliente para ofrecer
                  soluciones eficientes y de alta calidad
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <a
                    className="btn btn-primary btn-lg px-4 me-sm-3"
                    href="#features"
                  >
                    Saber más
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
              <img
                className="img-fluid rounded-3 my-5"
                src="https://syprefrigeracionac.com/wp-content/uploads/2024/03/cropped-cropped-37678335.png"
                alt="..."
              />
            </div>
          </div>
        </div>
      </header>
      <Features />
      <Testimonials />
      <BlogPreview />
    </>
  );
}
