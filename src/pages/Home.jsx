import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Jumbo from "../components/Jumbo"
import Porto from "../components/Porto"
import Navbar from "../components/navbar"

function Home() {
  return (
    
    <>
      <div className="">

      <Navbar />
      <Jumbo />
      <About />
      <Porto />
      <Contact />
      <Footer />
      </div>
    </>
  )
}

export default Home
