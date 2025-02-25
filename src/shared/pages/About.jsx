export default function About() {
  return (
    <>
      <section className="py-5">
        <div className="container px-5 animate__animated animate__fadeInLeftBig">
          <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
            <div className="text-center mb-5">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i className="bi bi-envelope"></i>
              </div>
              <h1 className="fw-bolder">Póngase en contacto</h1>
              <p className="lead fw-normal text-muted mb-0">
                Nos encantaría saber de usted
              </p>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <form id="contactForm">
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Enter your name..."
                      data-sb-validations="required"
                    />
                    <label>Nombre</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="name:required"
                    >
                      A name is required.
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      data-sb-validations="required,email"
                    />
                    <label>Correo Electronico</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:required"
                    >
                      An email is required.
                    </div>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:email"
                    >
                      Email is not valid.
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      data-sb-validations="required"
                    />
                    <label>Numero de contacto</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="phone:required"
                    >
                      A phone number is required.
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      id="message"
                      type="text"
                      placeholder="Enter your message here..."
                      style={{ height: "10rem" }}
                      data-sb-validations="required"
                    ></textarea>
                    <label>Mensaje</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="message:required"
                    >
                      A message is required.
                    </div>
                  </div>
                  <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                      <div className="fw-bolder">
                        Form submission successful!
                      </div>
                      To activate this form, sign up at
                      <br />
                      <a href="https://startbootstrap.com/solution/contact-forms">
                        https://startbootstrap.com/solution/contact-forms
                      </a>
                    </div>
                  </div>
                  <div className="d-none" id="submitErrorMessage">
                    <div className="text-center text-danger mb-3">
                      Error sending message!
                    </div>
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-lg disabled"
                      id="submitButton"
                      type="submit"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-light">
        <div className="container px-5">
          <div className="row gx-5">
            <div className="col-xl-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1316.0109968645447!2d-98.84649679017704!3d19.304473222333122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1f390b4af319%3A0xeaedb8b7cd07a795!2sSyp%20refrigeraci%C3%B3n%20y%20ac!5e0!3m2!1ses!2smx!4v1630790185654!5m2!1ses!2smx"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-xl-4">
              <div className="card border-0 h-100">
                <div className="card-body p-4">
                  <div className="d-flex h-100 align-items-center justify-content-center">
                    <div className="text-center">
                      <div className="h6 fw-bolder">Información</div>
                      <p className="text-muted mb-4">
                      Para cualquier consulta, envíenos un correo electrónico
                        <br />
                        <a href="mailto:syprefrigeracionac@gmail.com?subject=Contacto">syprefrigeracionac@gmail.com</a>
                      </p>
                      <div className="h6 fw-bolder">Nuestras Redes</div>
                      <a className="fs-5 px-2 link-dark" href="https://api.whatsapp.com/send?phone=5510485040">
                        <i className="bi-whatsapp"></i>
                      </a>
                      <a className="fs-5 px-2 link-dark" href="https://www.facebook.com/profile.php?id=100062976354252">
                        <i className="bi-facebook"></i>
                      </a>
                      {/* <a className="fs-5 px-2 link-dark" href="#!">
                        <i className="bi-linkedin"></i>
                      </a>
                      <a className="fs-5 px-2 link-dark" href="#!">
                        <i className="bi-youtube"></i>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
