import { AnimatePresence } from "motion/react";
import { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import Spotlight from "./components/Spotlight";
import SplashScreen from "./components/SplashScreen";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const SPLASH_KEY = "splash-shown";

function App() {
  // show the splash only once per browser session
  const [showSplash, setShowSplash] = useState(
    () => !sessionStorage.getItem(SPLASH_KEY),
  );

  const finishSplash = useCallback(() => {
    sessionStorage.setItem(SPLASH_KEY, "1");
    setShowSplash(false);
  }, []);

  return (
    <div className="relative isolate">
      <AnimatePresence>
        {showSplash && <SplashScreen onFinish={finishSplash} />}
      </AnimatePresence>

      {/* grid lives on its own layer so its fade-out mask can't hide page content */}
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[120vh]"
      />
      <Spotlight />

      {/* mount the site as the splash curtain lifts, so the hero entrance plays underneath it */}
      {!showSplash && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
