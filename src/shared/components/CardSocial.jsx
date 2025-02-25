export default function CardSocial() {
  return (
    <section className="py-5 bg-light">
      <div className="container px-5">
        <div className="row gx-5">
          <div className="col-xl-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1316.0109968645447!2d-98.84649679017704!3d19.304473222333122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1f390b4af319%3A0xeaedb8b7cd07a795!2sSyp%20refrigeraci%C3%B3n%20y%20ac!5e0!3m2!1ses!2smx!4v1630790185654!5m2!1ses!2smx"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
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
                      <a href="mailto:syprefrigeracionac@gmail.com?subject=Contacto">
                        syprefrigeracionac@gmail.com
                      </a>
                    </p>
                    <div className="h6 fw-bolder">Nuestras Redes</div>
                    <a
                      className="fs-5 px-2 link-dark"
                      href="https://api.whatsapp.com/send?phone=5510485040"
                    >
                      <i className="bi-whatsapp"></i>
                    </a>
                    <a
                      className="fs-5 px-2 link-dark"
                      href="https://www.facebook.com/profile.php?id=100062976354252"
                    >
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
  );
}
