import CardCaseStudies from "./CaseStudies/CardCaseStudies";
import Clients from "./CaseStudies/Clients";

export default function CaseStudies() {
  return (
    <article
      className="d-flex flex-column justify-content-center align-content-center bg-light client-container"
      id="case-studies"
    >
      <p className="text-center">
        <small>CLIENTS WE WORKED WITH</small>
      </p>

      <Clients />

      <CardCaseStudies />
    </article>
  );
}
