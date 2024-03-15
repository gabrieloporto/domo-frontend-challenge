import {
  AngularIcon,
  CSSIcon,
  HTMLIcon,
  NodeIcon,
  PythonIcon,
  SassIcon,
} from "./Icons";

export default function Technology() {
  return (
    <article className="tech-container" id="technology">
      <div className="services-text">
        <p className="h3 text-light">We using cutting edge technology</p>
        <p className="mt-2 text-tech">
          Nullam id dolor id nibh ultrices vehicula ut id elit. Aenan lacinia
          bibendum nullia sed consectur. Cum sociis natoque penatibus et magnis
          dis partuirient montes, nascetur rediculus mus. Nulla vitae elit
          libero, a pharetra augue. Vestibulum id ligula porfa felis euismod
          semper. Vivamus sagittis, lacus vel augue laoreet rutrum faucibutus
          dolor auctor.
        </p>
      </div>

      <section className="d-flex flex-column tech-cards">
        <div className="d-flex tech-card">
          <HTMLIcon />
          <CSSIcon />
        </div>
        <div className="d-flex tech-card">
          <SassIcon />
          <NodeIcon />
        </div>
        <div className="d-flex tech-card">
          <AngularIcon />
          <PythonIcon />
        </div>
      </section>
    </article>
  );
}
