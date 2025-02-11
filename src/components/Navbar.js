import { Link } from "react-router-dom";
import "../assets/styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Website</h1>
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/vacations">Vacations</Link></li>
        <li><Link to="/hobbies">Hobbies</Link></li>
        <li><Link to="/Resume">Resume</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
