import "./App.css";
import { BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom'
import NavbarComponent from "./Components/navbar";
import Home from "./Page/home";
import Menu from "./Page/menu";
import Contact from "./Page/contact";
import About from "./Page/about";

function App() {

  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route to="/*" element={<Navigate to="/home" />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
