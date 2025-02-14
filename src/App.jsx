import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Calculator from "./pages/calculator.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Calculator/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
