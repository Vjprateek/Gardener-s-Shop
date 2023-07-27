import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Service from "./Pages/Service";
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Project from "./Pages/Project";
import Feature from "./Pages/Feature";
import Quote from "./Pages/Quote";
import Team from "./Pages/Team";
import Testimonial from "./Pages/Testimonial";
import Page1 from "./Pages/Page1";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";


function App() {
  return (
    <div className="App">
        <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="About" element={<About/>}></Route>
          <Route path="Service" element={<Service/>}></Route>
          <Route path="Project" element={<Project/>}></Route>
          <Route path="Feature" element={<Feature/>}></Route>
          <Route path="Quote" element={<Quote/>}></Route>
          <Route path="Team" element={<Team/>}></Route>
          <Route path="Testimonial" element={<Testimonial/>}></Route>
          <Route path="Page1" element={<Page1/>}></Route>
          <Route path="Contact" element={<Contact/>}></Route>
          <Route path="Login" element={<Login/>}></Route>
          <Route path="Register" element={<Register/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
