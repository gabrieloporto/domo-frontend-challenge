import { ArrowIcon } from "./Icons";

export default function Home() {
  return (
    <article className="d-flex flex-column w-50 gap-2 main-text">
      <p className="h1 text-light fw-semibold">
        We build beautiful and reliable web solutions
      </p>
      <p>
        We strongly believe that communication, trust and transparency are the
        essential elements of sucessfull business relationship. <br /> Ready for
        the journey?
      </p>

      <div className="d-flex gap-4">
        <button
          type="button"
          className="btn btn-outline-secondary rounded-1 px-4 fw-semibold btn-inf"
        >
          Learn more
        </button>
        <button
          type="button"
          className="btn rounded-1 px-4 text-light btn-stock-blue"
        >
          Our Projects
          <ArrowIcon />
        </button>
      </div>
    </article>
  );
}
