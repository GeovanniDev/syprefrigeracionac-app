import PropTypes from "prop-types";

export default function CardImageService({ imageUrl = "" }) {
  return (
    <>
      <div className="col-4 mb-5 mb-5 mb-xl-0">
        <div className="text-center">
          <img
            className="img-fluid rounded mb-4 px-4"
            src={ imageUrl }
            style={{ width: "550px" }}
            
            alt="..."
          />
          {/* <h5 className="fw-bolder">Ibbie Eckart</h5>
          <div className="fst-italic text-muted">Founder &amp; CEO</div> */}
        </div>
      </div>
    </>
  );
}

CardImageService.propTypes = {
  imageUrl: PropTypes.string,
};
