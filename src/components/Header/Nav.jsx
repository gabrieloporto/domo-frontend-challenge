import { IdIcon } from "../Icons";

export default function Nav() {
  return (
    <nav className="nav">
      <a className="nav-link active text-light" aria-current="page" href="#">
        Home
      </a>
      <a className="nav-link nav-no-active" href="#services">
        Services
      </a>
      <a className="nav-link nav-no-active" href="#technology">
        Technology
      </a>
      <a className="nav-link nav-no-active" href="#case-studies">
        Case studies
      </a>
      <a className="nav-link nav-no-active" href="#about">
        About
      </a>
      <a
        className="nav-link active text-light d-flex justify-content-center  align-content-center gap-2"
        aria-current="page"
        href="#about"
      >
        <IdIcon />
        Hire us
      </a>
    </nav>
  );
}
