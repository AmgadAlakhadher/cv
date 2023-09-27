import { About } from 'widgets/About/ui/About'
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
    </>
  )
}

export default MainPage
