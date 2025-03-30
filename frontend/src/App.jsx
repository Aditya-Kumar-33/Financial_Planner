import Calculator from "./pages/calculator.jsx";
import Home from "./pages/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Investment from "./pages/Investment.jsx";
import Charts from "./pages/Charts.jsx";
import Expense from "./pages/Expense.jsx";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from "./pages/Layout.jsx";
import Login from "./pages/Login.jsx";
import Savings from "./pages/Savings.jsx";
import Profile from "./pages/Profile.jsx";
import SignUp from "./pages/SignUp.jsx";
import Trends from "./pages/Trends.jsx";
import Facts from "./pages/Facts.jsx";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>

    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='/expense-calculator' element={<Expense/>}></Route>
      <Route path='/investment-calculator' element={<Calculator/>}></Route>
      <Route path='/investment' element={<Investment/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/savings' element={<Savings/>}></Route>
      <Route path='/trends' element={<Trends/>}></Route>
      <Route path='/facts' element={<Facts/>}></Route>
    </Route>
  </>
  ));

  return <>
    <RouterProvider router={router}/> 
  </>

}

export default App;
