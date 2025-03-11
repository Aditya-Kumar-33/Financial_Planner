import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./pages/calculator.jsx";
import Home from "./pages/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Investment from "./pages/Investment.jsx";
import Expense from "./pages/Expense.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          index 
          element={
          <div className="h-screen">
            <Expense/>
          </div>} 
        />
      </Routes>
    </Router>
  );
}

export default App;
