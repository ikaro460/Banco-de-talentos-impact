import { Route, Routes } from "react-router-dom";
import { CharPage } from "../pages/CharPage";
import { Home } from "../pages/Home";
import { LandingPage } from "../pages/LandingPage";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route exact path="/char/:id" element={<CharPage />} />
    </Routes>
  );
}
