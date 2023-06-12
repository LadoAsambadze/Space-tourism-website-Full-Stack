import HeaderDesktop from "./components/Header-desktop";
import Header from "./components/Header-mobile";
import HeaderTablet from "./components/Header-tablet";
import Crew from "./pages/Crew";

import Destinations from "./pages/Destination";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";

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
      </Routes>
    </>
  );
}

export default App;
