import heart from '/public/Catalog/heart.png'
import plus from '/public/Catalog/+.png'
import tow from '/public/Catalog/tow.png'

import Modalka from '../Modalka/Modalka'


import { Link } from 'react-router-dom'

export default function Card({name,price,id,ost,addCard}){
    if (ost===0) {
        return(
        <div className="tow">
            <img src={tow} alt="" />
            <h2>{name}</h2>
            <p className="price">Остаток: {ost}</p>
            <div className="towtow">
                <p className="price">{price} ₱</p>
                <div className="nad">
                    <Link to={`/catalog/${id}`}>Подробнее</Link>
                    <img src={heart} alt="" />
                    
                    {/* <zakazModal /> */}
                    <Modalka></Modalka>
                    
                </div>
            </div>
        </div>
    )
    }else{
        return(
            <div className="tow">
                <img src={tow} alt="" />
                <h2>{name}</h2>
                <p className="price">Остаток: {ost}</p>
                <div className="towtow">
                    <p className="price">{price} ₱</p>
                    
                    <div className="nad">
                        <Link to={`/catalog/${id}`}>Подробнее</Link>
                        <button onClick={addCard}>В корзину</button>
                        <img src={heart} alt="" />
                        <img src={plus} alt="" />
                    </div>
                </div>
            </div>
        )
    }
    
}