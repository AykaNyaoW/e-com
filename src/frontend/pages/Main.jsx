import { Routes, Route} from "react-router-dom"
import Login from "../components/Login"
import Signup from "../components/Signup"
import Home from "../pages/Home"
import Review from "./View"
import Header from "../components/Header"

function Main() {
    return (
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/view" element={<Review />} />
            </Routes>
    )
}

export default Main