import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./pages/calculator.jsx";
import Home from "./pages/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Investment from "./pages/Investment.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          index 
          element={
          <div className="h-screen">
            <Investment/>
          </div>} 
        />
      </Routes>
    </Router>
  );
}

export default App;
