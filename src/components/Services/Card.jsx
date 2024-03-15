import PropTypes from "prop-types";

export default function Card({ title, text, icon, mt }) {
  return (
    <div className="card rounded-0">
      <div className="card-body text-center my-3">
        <div className="card-img-container rounded-5 bg-primary my-3 d-flex justify-content-center align-items-lg-center">
          {icon}
        </div>
        <h5 className="card-title my-3">{title}</h5>
        <p className="card-text my-3">{text}</p>
        <a
          href="#"
          className={`btn btn-outline-secondary my-3 mt-${mt} btn-inf-cards`}
        >
          Learn more
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  mt: PropTypes.number.isRequired,
};
