import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import About from "./page/About";
import { routes } from "././shared/routes";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path={routes.root} element={<Home />} />
          {/* <Route path={routes.settings} element={<Settings />} /> */}
          {/* <Route path={routes.help} element={<Help />} /> */}
          {/* <Route path={routes.about} element={<About />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;