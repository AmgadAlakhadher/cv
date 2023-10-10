import { About } from 'widgets/About/ui/About'
import { Contact } from 'widgets/Contact'
import { Footer } from 'widgets/Footer'
import { Header } from 'widgets/Header'
import { HeroSection } from 'widgets/HeroSection'
import { Projects } from 'widgets/Projects'

const MainPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default MainPage
