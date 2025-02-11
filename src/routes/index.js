import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Vacations from "../pages/Vacations";
import Hobbies from "../pages/Hobbies";
import Resume from "../pages/Resume";


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/vacations" element={<Vacations />} />
    <Route path="/hobbies" element={<Hobbies />} />
    <Route path="/resume" element={<Resume />} />
  </Routes>
);

export default AppRoutes;
