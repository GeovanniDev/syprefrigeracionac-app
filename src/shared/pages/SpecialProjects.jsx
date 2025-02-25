import { useParams } from "react-router-dom";
import { GetSpecialProjectsById } from "../helpers";
import { useMemo } from "react";
import CardDetailProject from "../components/CardDetailProject";
import { CardDescription } from "../components";

export default function SpecialProjects() {
  const { id } = useParams();
  const {
    title,
    description,
    subDescription,
    projectDetails = [],
  } = useMemo(() => GetSpecialProjectsById(id), [id]);

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
      <CardDescription description={description} subDescription={subDescription} />
      {projectDetails
        ? projectDetails.map((equipmentDetail) => (
            <CardDetailProject
              key={equipmentDetail.id}
              model={equipmentDetail.model}
              description={equipmentDetail.description}
              features={equipmentDetail.features}
              imageUrl={equipmentDetail.imageUrl}
              align={equipmentDetail.align}
            />
          ))
        : null}
    </>
  );
}
