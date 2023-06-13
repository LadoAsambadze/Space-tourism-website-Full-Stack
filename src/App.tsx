import HeaderDesktop from "./components/Header-desktop";
import Header from "./components/Header-mobile";
import HeaderTablet from "./components/Header-tablet";
import Crew from "./pages/Crew";

import Destinations from "./pages/Destination";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import Technology from "./pages/Technology";

function App() {
  return (
    <>
      <Header />
      <HeaderTablet />
      <HeaderDesktop />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/destination/:name" element={<Destinations />} />
        <Route path="/crew/:name" element={<Crew />} />
        <Route path="/technology/:name" element={<Technology />} />
      </Routes>
    </>
  );
}

export default App;
