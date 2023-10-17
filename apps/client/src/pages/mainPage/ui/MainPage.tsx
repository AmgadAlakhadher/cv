import { About } from 'widgets/About/ui/About'
import { Contact } from 'widgets/Contact'
import { Footer } from 'widgets/Footer'
import { Header } from 'widgets/Header'
import { HeroSection } from 'widgets/HeroSection'
import { ProjectsWidgets } from 'widgets/Projects'

const MainPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <ProjectsWidgets />
      <Contact />
      <Footer />
    </>
  )
}

export default MainPage
