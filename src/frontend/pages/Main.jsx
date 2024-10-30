import { BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "../components/Login"
import Signup from "../components/Signup"

function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Main