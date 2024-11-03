import Main from './frontend/pages/Main'
import Header from './frontend/components/Header'
import Login from "./frontend/components/Login"
import Signup from "./frontend/components/Signup"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './frontend/components/Navbar'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Main />
    </BrowserRouter>
  )
}

export default App
