import "./App.css";

import Maincontent from "./components/Maincontent";
import Broadband from "./components/Broadband";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Maincontent />} />
          <Route path="/broadband" element={<Broadband />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
