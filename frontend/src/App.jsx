import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./pages/FooterPage";
import UiUxPage from "./pages/UiUxPage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CertificatePage from "./pages/CertificatePage";
import ParticlesBg from "./ParticlesBg";

function App() {
  return (
    <div className="app">
      <ParticlesBg />
      <Navbar />
      <main className="container mx-auto">
        <section id="home"><HomePage /></section>
        <section id="about"><AboutPage /></section>
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
