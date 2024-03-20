import { useParams } from 'react-router-dom'

import {catalog} from '../data'

import tow from '/public/Catalog/tow.png'

export default function CardPage(){

    const {id} = useParams();
    const product = catalog.find(product => product.id === parseInt(id))

    return(
        <section className="product">
            <div className="container">
                <div className="p-container">
                    <img src={tow} alt="" />
                    <div className="p-content">
                        <h1>{product.name}</h1>
                        <h3>Цена: {product.price} ₽</h3>
                    </div>
                </div>
            </div>
        </section>
        
    )
}