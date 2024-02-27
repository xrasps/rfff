import Header  from './components/header/header'
import Footer  from './components/footer/footer'
import Start  from './page/start/start'
import CatalogPage from './page/catalog/catalog'
import './App.css'
import {Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element = {<Start/>} />
        <Route path="/catalog" element = {<CatalogPage/>} />
        <Route/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App