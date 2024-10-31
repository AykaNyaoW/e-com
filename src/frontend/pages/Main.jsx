import { Routes, Route} from "react-router-dom"
import Login from "../components/Login"
import Signup from "../components/Signup"
import Home from "../pages/Home"

function Main() {
    return (
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
    )
}

export default Main