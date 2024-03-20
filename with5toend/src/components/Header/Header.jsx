import headerLogo from '/public/Header/logo.png'
import ch from '/public/Header/ch.png'
import ic1 from '/public/Header/ic1.png'
import ic2 from '/public/Header/ic2.png'
import ic3 from '/public/Header/ic3.png'

import {Link} from 'react-router-dom'
import Modalka from '../Modalka/Modalka'

export default function Header({basket}) {
 return(
     <header>
         <div className="container">
            <div className="h-main">
                <div className="h-content">
                    <img src={headerLogo} className="headerLogo" />
                    <nav className="header_nav">
                        <img src={ch} className="headerLogo" />
                        <Link to="/">ГЛАВНАЯ</Link>
                        <Link to="/catalog">КАТАЛОГ</Link>
                        <img src={ch} className="headerLogo" />
                        <Link to="/users">ПОЛЬЗОВАТЕЛИ</Link>
                        <Link to="/information">ИНФОРМАЦИЯ</Link>
                        <img src={ch} className="headerLogo" />
                        <Link to="/create">ДОБАВИТЬ ТОВАР</Link>
                        <Link to="/basket">Корзина({basket.length})</Link>
                        <Link to="/"><Modalka></Modalka></Link>
                    </nav>
                </div>
                <div className="h-icons">
                    <a href=""><img src={ic1} className="headerLogo" /></a>
                    <a href=""><img src={ic2} className="headerLogo" /></a>
                    <a href=""><img src={ic3} className="headerLogo" /></a>
                </div>
            </div>
         </div> 
     </header>
 )
}