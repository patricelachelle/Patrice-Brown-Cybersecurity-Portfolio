import { Navbar, Hero } from "./components/Hero";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";
import { Contact, Footer } from "./components/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <div className="scanline"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
