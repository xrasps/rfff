import heart from '/public/Catalog/heart.png'
import plus from '/public/Catalog/+.png'
import tow from '/public/Catalog/tow.png'
import Card from '../Card/Card'

import { catalog } from '../../pages/data.js'

import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {

    const [query, setQuery] = useState("")

    function search(e) {
        setQuery(e.target.value)
        console.log(query);
    }

    const filterProducts = catalog.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))

    return (
        <section className="startCatalog">
            <div className="container">
                <input className='search' type="search" name='search' placeholder='Поиск' onChange={search} />
                <div className="sContainer">

                    {

                        filterProducts.length ?

                            filterProducts.map((card, index) => {
                                return (
                                    <Card key={index} {...card} />
                                )
                            })
                            : <h2 className='er'>Нет результатов</h2>
                    }
                </div>
            </div>
        </section>
    )
}