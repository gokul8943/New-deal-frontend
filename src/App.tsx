import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Lisitng from "./pages/Lisitng"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/listing' element={<Lisitng/>} />
        <Route path='/user/login' element={<SignIn/>} />
        <Route path='/user/register' element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
