import Navbar from "./Navbar";
import NavbarScrolled from "./NavbarScrolled";

const Header = ({ scrolled }) => {
  return (
    <header className="landing_header">
      <Navbar scrolled={scrolled} />
      <NavbarScrolled scrolled={scrolled} />
    </header>
  );
};

export default Header;
