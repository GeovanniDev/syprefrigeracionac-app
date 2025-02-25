import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { GetEquipmentById } from "../helpers";
import { CardDescription, ImageCarousel } from "../components";

export default function Thermos() {
  const { id } = useParams();
  const {
    title,
    description,
    keyFeatures = [],
    gallery = [],
  } = useMemo(() => GetEquipmentById(id), [id]);
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
      <CardDescription description={description} keyFeatures={keyFeatures} />
      <section className="py-5 bg-light" id="scroll-target">
        <div className="container px-5 my-5 animate__animated animate__fadeInLeftBig">
          <div className="row gx-5 align-items-center">
            <div className="col-12">
              <ImageCarousel images={gallery} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
