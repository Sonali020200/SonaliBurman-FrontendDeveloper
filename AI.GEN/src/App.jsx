import './App.css'
import {Avatar} from './components/Avatar'
import Footer from './components/Footer'
import { Header } from './components/Header'
import { ItemSection } from './components/ItemSection'
import { Phase2 } from './components/Phase2'
import { Phase1 } from './components/Phase1'
import { Phase3 } from './components/Phase3'
import { TechTools } from './components/Technologies'
import { TextSection } from './components/TextSection'
import Tokenomics from './components/Tokenomics'
import { GetStarted } from './components/GetStarted'

function App() {

  return (
    <>
    <div className="figma-app">
      <Header/>
      <TextSection/>
      <Avatar/>
      <TechTools/>
      <ItemSection/>
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
