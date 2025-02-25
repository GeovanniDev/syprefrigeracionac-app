// import emailjs from '@emailjs/browser';

import { useForm } from "react-hook-form";
import { CardSocial } from "../components";
import { toast } from "react-toastify";
import { SendContactFormByMail } from "../helpers";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    mode: "onBlur",
  });

  const handleFormSubmit = async (data) => {
    await SendContactFormByMail(data)
      .then((response) => {
        if (response && response.state === "ok") {
          toast.success("¡Gracias por contactarnos! Hemos recibido su mensaje y nuestro equipo se comunicará con usted lo antes posible.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            theme: "dark",
          });
        }
        reset();
      });
  };

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
                <form
                  id="contactForm"
                  onSubmit={handleSubmit(handleFormSubmit)}
                >
                  <div className="form-floating mb-3">
                    <input
                      {...register("name", {
                        required: "El nombre es obligatorio",
                      })}
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      type="text"
                      placeholder="Nombre"
                    />
                    <label>Nombre</label>
                    {errors.name && (
                      <div className="invalid-feedback">
                        {errors.name.message}
                      </div>
                    )}
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      {...register("email", {
                        required: "El correo es obligatorio",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Correo inválido",
                        },
                      })}
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      type="text"
                      placeholder="Correo electrónico"
                    />
                    <label>Email</label>
                    {errors.email && (
                      <div className="invalid-feedback">
                        {errors.email.message}
                      </div>
                    )}
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      {...register("phone", {
                        required: "El teléfono es obligatorio",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Solo se permiten números",
                        },
                        minLength: {
                          value: 10,
                          message: "Debe tener al menos 10 dígitos",
                        },
                      })}
                      className={`form-control ${
                        errors.phone ? "is-invalid" : ""
                      }`}
                      type="text"
                      placeholder="Teléfono"
                    />
                    <label>Telefono</label>
                    {errors.phone && (
                      <div className="invalid-feedback">
                        {errors.phone.message}
                      </div>
                    )}
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      {...register("message", {
                        required: "El mensaje no puede estar vacío",
                      })}
                      className={`form-control ${
                        errors.message ? "is-invalid" : ""
                      }`}
                      type="text"
                      style={{ height: "10rem" }}
                      placeholder="Mensaje"
                    />
                    <label>Mensaje</label>
                    {errors.message && (
                      <div className="invalid-feedback">
                        {errors.message.message}
                      </div>
                    )}
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-lg"
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
      <CardSocial />
    </>
  );
}
