import './App.css'
import '../src/index.css'
import Header from './components/Header/Header'
import Start from './pages/Start/Start'
import Catalog from './pages/Catalog/Catalog'
import CardPage from './pages/CardPage/CardPage'
import Information from './pages/Information/Information'
import UsersPage from './pages/UsersPage/UsersPage'
import CreatePage from './pages/CreatePage/CreatePage'
import BasketPage from './pages/BasketPage/BasketPage'
import Modalka from './components/Modalka/Modalka'
import {Routes,Route} from 'react-router-dom'
import { useState } from 'react'

function App() {

  const [basket,setBasket] = useState([])

  return (
    <>
      <Header basket={basket}/>
      <Routes>
        <Route path='/' element= {<Start/>} />
        <Route path='/catalog' element= {<Catalog addToBasket={setBasket} basket={basket}/>} />
        <Route path='/catalog/:id' element= {<CardPage/>} />
        <Route path='/information' element= {<Information/>} />
        <Route path='/users' element= {<UsersPage/>} />
        <Route path='/create' element= {<CreatePage/>} />
        <Route path='/modalka' element= {<Modalka/>} />
        <Route path='/basket' element= {<BasketPage basket={basket}/>}/>
      </Routes>
    </> 

    
  )
}

export default App