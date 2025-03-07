import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Lisitng from "./pages/Lisitng"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import ProductDeatils from "./pages/ProductDeatils"
import ProfiePage from "./pages/ProfiePage"
import ListingAddPage from "./pages/PropertyAddingPage"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-[72px]">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/listing' element={<Lisitng />} />
          <Route path='detailpage/:lid' element={<ProductDeatils />} />
          <Route path='/user/login' element={<SignIn />} />
          <Route path='/user/register' element={<SignUp />} />
          <Route path='/profile/:userId' element={<ProfiePage />} />
          <Route path='/AddProduct' element={<ListingAddPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
