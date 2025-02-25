import PropTypes from "prop-types";

export default function CardDescription({
  description = "",
  subDescription = "",
  keyFeatures = [],
}) {
  return (
    <>
      <section className="mb-5">
        <div className="container px-5 animate__animated animate__fadeInLeftBig">
          <div className="card border-0 shadow rounded-3 overflow-hidden">
            <div className="card-body p-0">
              <div className="row gx-0">
                <div className="col-lg-12 col-xl-12 py-lg-3">
                  <div className="p-4 p-md-5">
                    <p className="text-justify" style={{ fontSize: "1.25rem" }}>
                      {description}
                    </p>
                    {subDescription != "" ? (
                      <p
                        className="text-justify"
                        style={{ fontSize: "1.25rem" }}
                      >
                        {subDescription}
                      </p>
                    ) : null}
                    {keyFeatures.length > 0 ? (
                      <ul className="list-group list-group-flush">
                        {keyFeatures.map((feature, index) => (
                          <li className="list-group-item" key={index}>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    ) : null}
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

CardDescription.propTypes = {
  description: PropTypes.string,
  subDescription: PropTypes.string,
  keyFeatures: PropTypes.array,
};
