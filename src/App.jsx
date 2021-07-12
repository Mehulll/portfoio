import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Testimonials from "./components/testimonials/Testimonials"
import "./app.scss"
import { useState } from "react"
import Menu from "./components/menu/Menu"


function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <div className = "sections">
        <Intro/>
        <About/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
