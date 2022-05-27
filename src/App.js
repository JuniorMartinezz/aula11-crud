import Header from "./components/Header";
import Nav from "./components/Nav";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import './global.css'

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Section />
      <Footer />
    </Router>
  );
}

export default App;
