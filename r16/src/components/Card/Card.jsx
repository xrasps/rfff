import heart from '/public/Catalog/heart.png'
import plus from '/public/Catalog/+.png'
import tow from '/public/Catalog/tow.png'

import Modalka from '../Modalka/Modalka'


import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

export default function CardItem({ name, price, id, ost, addCard }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {price} руб.
                </Card.Text>
                <Card.Text>
                    {ost}
                </Card.Text>
                <Link to={`/catalog/${id}`}>Подробнее</Link>
                <Modalka></Modalka>
            </Card.Body>
        </Card>
    );
    // if (ost===0) {
    //     return(
    //     <div className="tow">
    //         <img src={tow} alt="" />
    //         <h2>{name}</h2>
    //         <p className="price">Остаток: {ost}</p>
    //         <div className="towtow">
    //             <p className="price">{price} ₱</p>
    //             <div className="nad">
    //                 <Link to={`/catalog/${id}`}>Подробнее</Link>
    //                 <img src={heart} alt="" />

    //                 {/* <zakazModal /> */}
    //                 <Modalka></Modalka>

    //             </div>
    //         </div>
    //     </div>
    // )
    // }else{
    //     return(
    //         <div className="tow">
    //             <img src={tow} alt="" />
    //             <h2>{name}</h2>
    //             <p className="price">Остаток: {ost}</p>
    //             <div className="towtow">
    //                 <p className="price">{price} ₱</p>

    //                 <div className="nad">
    //                     <Link to={`/catalog/${id}`}>Подробнее</Link>
    //                     <button onClick={addCard}>В корзину</button>
    //                     <img src={heart} alt="" />
    //                     <img src={plus} alt="" />
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

}