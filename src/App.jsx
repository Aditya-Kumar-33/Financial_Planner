import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Calculator from "./pages/calculator.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
      <div>
        <p>Hey</p>
      <NavLink to="/calculator">Calculator</NavLink>
      </div>
    </Router>
  );
}

export default App;
