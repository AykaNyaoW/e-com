import Main from './frontend/pages/Main'
import Header from './frontend/components/Header'
import { BrowserRouter} from "react-router-dom"
import Navbar from './frontend/components/Navbar'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  )
}

export default App
