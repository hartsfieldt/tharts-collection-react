import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import "./assets/styles/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./componets/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

