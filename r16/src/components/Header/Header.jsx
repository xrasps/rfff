import headerLogo from '/public/Header/logo.png'
import ch from '/public/Header/ch.png'
import ic1 from '/public/Header/ic1.png'
import ic2 from '/public/Header/ic2.png'
import ic3 from '/public/Header/ic3.png'

import { Link } from 'react-router-dom'
import Modalka from '../Modalka/Modalka'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header({ basket }) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">ГЛАВНАЯ</Nav.Link>
                        <Nav.Link href="/catalog">КАТАЛОГ</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
    //  return(
    //      <header>
    //          <div className="container">
    //             <div className="h-main">
    //                 <div className="h-content">
    //                     <img src={headerLogo} className="headerLogo" />
    //                     <nav className="header_nav">
    //                         <img src={ch} className="headerLogo" />
    //                         <Link to="/">ГЛАВНАЯ</Link>
    //                         <Link to="/catalog">КАТАЛОГ</Link>
    //                         <img src={ch} className="headerLogo" />
    //                         <Link to="/users">ПОЛЬЗОВАТЕЛИ</Link>
    //                         <Link to="/information">ИНФОРМАЦИЯ</Link>
    //                         <img src={ch} className="headerLogo" />
    //                         <Link to="/create">ДОБАВИТЬ ТОВАР</Link>
    //                         <Link to="/basket">Корзина({basket.length})</Link>
    //                         <Link to="/"><Modalka></Modalka></Link>
    //                     </nav>
    //                 </div>
    //                 <div className="h-icons">
    //                     <a href=""><img src={ic1} className="headerLogo" /></a>
    //                     <a href=""><img src={ic2} className="headerLogo" /></a>
    //                     <a href=""><img src={ic3} className="headerLogo" /></a>
    //                 </div>
    //             </div>
    //          </div> 
    //      </header>
    //  )
}