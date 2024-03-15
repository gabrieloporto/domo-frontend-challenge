// import Hire from "./Header/Hire";
import Nav from "./Header/Nav";

export default function Header() {
  return (
    <header className="position-relative d-flex flex-row bd-highlight justify-content-between align-items-center my-4">
      <div className="text-white fw-semibold">compleet labs</div>

      <div className="d-flex flex-row bd-highlight justify-content-center align-items-center gap-4 ">
        <Nav />
      </div>
    </header>
  );
}
