import HeaderDesktop from "./components/Header-desktop";
import Header from "./components/Header-mobile";
import HeaderTablet from "./components/Header-tablet";
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
        <Route path="/destination" element={<Destinations />} />
      </Routes>
    </>
  );
}

export default App;
