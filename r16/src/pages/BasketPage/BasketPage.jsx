import '../../../src/index.css'

import {catalog} from '../data'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import heart from '/public/Catalog/heart.png'
import plus from '/public/Catalog/+.png'
import tow from '/public/Catalog/tow.png'

export default function BasketPage({basket}){
    const cardProducts = basket.map(id => catalog.find(item => item.id == id))
    const summa = cardProducts.reduce((summ,item) => summ + item.price,0)
    return(
        <>
        <section className="startCatalog">
         <div className="container">
             
            <h1 className='basket_title'>Корзина</h1>
            <h3 className='basket_subtitle'>Итого {summa} рублей</h3>
            {
                cardProducts.map(product =>
                    
                <div className="tow">
                    <img src={tow} alt="" />
                    <h2>{product.name}</h2>
                    <div className="towtow">
                        <p className="price">{product.price} ₱</p>
                        <div className="nad">
                            <Link to={`/catalog/${product.id}`}>Подробнее</Link>
                            <img src={heart} alt="" />
                            <img src={plus} alt="" />
                        </div>
                    </div>
                </div>
                )
            }
                </div>
        </section>
        </>
    )
}