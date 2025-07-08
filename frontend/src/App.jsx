import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Skill from "./pages/SkillPage";
import Project from "./pages/ProjectPage";
import Contact from "./pages/ContactPage";
import Footer from "./pages/FooterPage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skill /></section>
        <section id="projects"><Project /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
