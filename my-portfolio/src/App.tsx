import Footer from "./components/Footer/Footer"
import Navbar from "./components/NavBar/NavBar"
import AboutSection from "./pages/Home/sections/About/About"
import Hero from "./pages/Home/sections/Hero/Hero"
import ProjectsSection from "./pages/Home/sections/Projects/Projects"



const App = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </>
  )
}

export default App
