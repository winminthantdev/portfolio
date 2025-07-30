import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./pages/FooterPage";
import UiUxPage from "./pages/UiUxPage";
import ProjectPage from "./pages/ProjectPage";
import SkillPage from "./pages/SkillPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CertificatePage from "./pages/CertificatePage";


function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="home"><HomePage /></section>
        <section id="about"><AboutPage /></section>
        <section id="skills"><SkillPage /></section>
        <section id="projects"><ProjectPage /></section>
        {/* UI/UX section */}
        <section id="uiux"><UiUxPage /></section>
        <section id="certificate"><CertificatePage /></section>
        <section id="contact"><ContactPage /></section>
      </main>
      <Footer />
    </div>
  );
}


export default App;
