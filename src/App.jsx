import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./pages/calculator.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          index 
          element={
          <div className="h-screen">
            <NavBar/>
            <Calculator/>
          </div>} 
        />
      </Routes>
    </Router>
  );
}

export default App;
