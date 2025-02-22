import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  return (
    <>
      <div className="container-fluid text-center">
        <div className="row justify-content-center align-items-center">
          <div className="col-6">
            <h1 className="display-4">Not Found Page</h1>
            <hr />
            <div className="alert alert-dark" role="alert">
              <h4 className="alert-heading">
                {error.status} - {error.statusText || error.message}
              </h4>
              <p>
                <i>{error.data}</i>
              </p>
              <hr />
              <p className="mb-0">Please try with other route</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
