import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { GetServicesById } from "../helpers";
import { CardDescription, CardImageService } from "../components";

export default function Service() {
  const { id } = useParams();
  const { title, description, gallery } = useMemo(
    () => GetServicesById(id),
    [id]
  );

  return (
    <>
      <header className="py-5">
        <div className="container px-5 animate__animated animate__fadeInLeftBig">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xxl-6">
              <div className="text-center my-5">
                <h1 className="fw-bolder mb-3">{title}</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <CardDescription description={description} />
      <section className="py-5 bg-light animate__animated animate__fadeInLeftBig">
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center">
            {gallery.map((image) => (
              <CardImageService key={image.id} imageUrl={image.imageUrl} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
