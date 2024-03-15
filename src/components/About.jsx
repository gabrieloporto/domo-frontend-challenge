import {
  DribbbleIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "./Icons";

export default function About() {
  return (
    <footer className="d-flex justify-content-between" id="about">
      <article className="w-50">
        <p className="fw-semibold text-light mb-4">compleet labs</p>

        <p className="w-75 mb-4">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
          nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla
        </p>

        <p className="d-flex gap-2 align-items-center">
          <TwitterIcon />
          <DribbbleIcon />
          <FacebookIcon />
          <InstagramIcon />
        </p>
      </article>

      <div>
        <p className="fw-semibold text-light ms-3">SITEMAP</p>
        <nav className="nav flex-column">
          <a className="nav-link nav-no-active" href="#">
            Home
          </a>
          <a className="nav-link nav-no-active" href="#">
            Technology
          </a>
          <a className="nav-link nav-no-active" href="#">
            Services
          </a>
          <a className="nav-link nav-no-active" href="#">
            About
          </a>
        </nav>
      </div>

      <div>
        <p className="fw-semibold text-light ms-3">SITEMAP</p>
        <nav className="nav flex-column">
          <a className="nav-link nav-no-active" href="#">
            Swiss Airlines
          </a>
          <a className="nav-link nav-no-active" href="#">
            Google
          </a>
          <a className="nav-link nav-no-active" href="#">
            Apple
          </a>
          <a className="nav-link nav-no-active" href="#">
            Nike
          </a>
        </nav>
      </div>

      <div>
        <p className="fw-semibold text-light ms-3">SITEMAP</p>
        <nav className="nav flex-column">
          <a className="nav-link nav-no-active" href="#">
            Jobs
          </a>
          <a className="nav-link nav-no-active" href="#">
            Hire us
          </a>
        </nav>
      </div>
    </footer>
  );
}
