
import {Navbar} from './components/Navbar'
import { Header } from './components/Header'
import {HowItWorks} from './components/HowItWorks'
import { AIItems } from './components/AI.Items'
import { AICards } from './components/AI.Cards'
import Tokenomics from './components/Tokenomics'
import { Phase1 } from './components/Phase1'
import { Phase2 } from './components/Phase2'
import { Phase3 } from './components/Phase3'
import { HeroSection } from './components/HeroSection'
import { GetStarted } from './components/GetStarted'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
    <div className="AIGEN">
      <Navbar />
      <Header/>
      <HeroSection/>
      <HowItWorks/>
      <AIItems/>
      <AICards/>
      <Tokenomics/>
      <Phase1/>
      <Phase2/>
      <Phase3/>
      <GetStarted/>
      <Footer/>

    </div>

    </>
  )
}

export default App
