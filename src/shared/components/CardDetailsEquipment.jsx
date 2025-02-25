import PropTypes from "prop-types";

export default function CardDetailsEquipment({
  model = "",
  features = [],
  imageUrl = "",
  align = "left",
}) {
  return (
    <>
      {align === "right" ? (
        <section className="py-5 bg-light" id="scroll-target">
          <div className="container px-5 my-5 animate__animated animate__fadeInLeftBig">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src={imageUrl}
                  alt="..."
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">{model}</h2>
                <p className="lead fw-normal text-muted mb-0">
                  <ul className="list-group">
                    {features.map((feature, index) => (
                      <li className="list-group-item" key={index}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-5">
          <div className="container px-5 my-5 animate__animated animate__fadeInLeftBig">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6 order-first order-lg-last">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src={imageUrl}
                  alt="..."
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">{model}</h2>
                <p className="lead fw-normal text-muted mb-0">
                  <ul className="list-group">
                    {features.map((feature, index) => (
                      <li className="list-group-item" key={index}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

CardDetailsEquipment.propTypes = {
  model: PropTypes.string,
  features: PropTypes.array,
  imageUrl: PropTypes.string,
  align: PropTypes.string,
};
