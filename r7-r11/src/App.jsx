import Header  from './components/header/header'
import Footer  from './components/footer/footer'
import Start  from './page/start/start'
import CatalogPage from './page/catalog/catalog'
import TovarPage from './page/TovarPage/TovarPage'
import UsersPage from './page/users/users'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import CreatePage from './page/CreatePage/CreatePage'


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element = {<Start/>} />
        <Route path="/catalog" element = {<CatalogPage/>} />
        <Route path="/catalog/:id" element = {<TovarPage/>} />
        <Route path="/users" element = {<UsersPage/>} />
        <Route path="/add" element = {<CreatePage/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App