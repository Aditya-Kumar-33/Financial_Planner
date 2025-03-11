import Calculator from "./pages/calculator.jsx";
import Home from "./pages/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Investment from "./pages/Investment.jsx";
import Charts from "./pages/Charts.jsx";
import Expense from "./pages/Expense.jsx";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from "./pages/Layout.jsx";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
    
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='/expense-calculator' element={<Expense/>}></Route>
      <Route path='/investment-calculator' element={<Calculator/>}></Route>
      <Route path='/investment' element={<Investment/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
    </Route>
  </>
  ));

  return <>
    <RouterProvider router={router}/> 
  </>

  return (
    <Router>
      <Routes>
        <Route 
          index 
          element={
          <div className="h-screen w-screen relative">
            <NavBar/>
            <Expense/>
            {/* <Investment/> */}
          </div>} 
        />
      </Routes>
    </Router>
  );
}

export default App;
