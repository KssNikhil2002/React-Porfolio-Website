import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/contact";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="overflow-x-hidden text-neutral-900 antialiased selection:bg-blue-100 selection:text-blue-900">

          <Navbar />
          <div className="container mx-auto px-8">
            <Hero />
            
            {/* Add scroll-margin-top to the About section */}
            <div id="about" className="scroll-mt-20">
              <About />
            </div>
            
            <Technologies />
            
            {/* Add scroll-margin-top to the Experience section */}
            <div id="experience" className="scroll-mt-20">
              <Experience />
            </div>
            
            {/* Add scroll-margin-top to the Projects section */}
            <div id="projects" className="scroll-mt-20">
              <Projects />
            </div>
            
            {/* Add scroll-margin-top to the Contact section */}
            <div id="contact" className="scroll-mt-20">
              <Contact />
            </div>
          </div>
      </div>
    </div>
  
  );
}

export default App;
