export default function CardCaseStudies() {
  return (
    <div className="d-flex justify-content-between align-content-center gap-4 bg-clients">
      <div className="bg-stock-blue w-75 d-flex p-4 pb-0 pe-0 rounded-1">
        <div className="card-body mx-2 my-4">
          <h4 className="card-title text-light mb-2">Get in touch with us</h4>
          <p className="card-text text-card-blue">
            Maecenas sed diam eget risus varius. blandit sit amet non magna.
          </p>
          <a
            href="#"
            className="btn btn-outline-light mt-4 px-4 py-2 btn-clients-cards"
          >
            Hire us
          </a>
        </div>
        <img
          src="/dashboard.webp"
          alt="dashboard image"
          width={215}
          className="opacity-0"
        />
      </div>
      <div className="bg-stock-blue w-75 d-flex p-4 pb-0 pe-0 rounded-1 ">
        <div className="card-body mx-2 my-4">
          <h4 className="card-title text-light mb-2">Our Projects</h4>
          <p className="card-text text-card-blue">
            Maecenas sed diam eget risus varius. blandit sit amet non magna.
          </p>
          <a
            href="#"
            className="btn btn-outline-light mt-4 px-4 py-2 btn-clients-cards"
          >
            See Projects
          </a>
        </div>
        <img src="/dashboard.webp" alt="dashboard image" width={250} />
      </div>
    </div>
  );
}
