import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { GetEquipmentById } from "../helpers";
import { CardDescription, CardDetailsEquipment } from "../components";

export default function Equipment() {
  const { id } = useParams();
  const { title, description, EquipmentDetails } = useMemo(() => GetEquipmentById(id), [id]);
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
      {
        EquipmentDetails ?
        EquipmentDetails.map((equipmentDetail) => (
          <CardDetailsEquipment
            key={equipmentDetail.id}
            model={equipmentDetail.model}
            features={equipmentDetail.features}
            imageUrl={equipmentDetail.imageUrl}
            align={equipmentDetail.align}
          />)) : null
      }
    </>
  );
}
