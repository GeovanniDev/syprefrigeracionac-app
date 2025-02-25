import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { GetBaseById } from "../helpers";

export default function Bases() {
  const { id } = useParams();
  const { title, gallery = [] } = useMemo(() => GetBaseById(id), [id]);
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
      <section >
        <div className="container px-5 animate__animated animate__fadeInLeftBig my-5">
          <div className="row align-items-center gx-5">
              {gallery.map((image, index) =>
                index === 0 ? (
                  <div className="col-12" key={image.id}>
                    <iframe
                      width="100%"
                      height="600"
                      src={image.imageUrl}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="col-lg-6  " key={image.id}>
                    <img
                      className="img-fluid rounded-3 mb-5"
                      src={image.imageUrl}
                      alt="..."
                      style={{ width: "600px", height: "400px" }}
                    />
                  </div>
                )
              )}
          </div>
        </div>
      </section>
    </>
  );
}
