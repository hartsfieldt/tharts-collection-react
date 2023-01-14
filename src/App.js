import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import "./assets/styles/style.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
