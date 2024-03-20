import '../../index.css'

import heart from '/public/Catalog/heart.png'
import plus from '/public/Catalog/+.png'
import tow from '/public/Catalog/tow.png'
import Card from '../../components/Card/Card'

import { catalog } from '../../pages/data.js'
import { useState } from 'react'

export default function CatalogPage({ addToBasket, basket }) {

    const [query, setQuery] = useState("")
    const [sorting, setSorting] = useState("")
    const [category, setCategory] = useState(0)

    function search(e) {
        setQuery(e.target.value)
    }

    const filterProducts = catalog.filter(
        (item) => item.name.toLowerCase().includes(query.toLowerCase())
            &&
            (item.category == category || category == 0)
    )

    // const filterProducts = catalog.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))

    function sort(event) {
        const sortValue = event.target.value
        setSorting(sortValue)
    }

    const sortProducts = (sorting, catalog) => {
        switch (sorting) {
            case 'price_asc':
                return [...catalog].sort((a, b) => a.price - b.price)
            case 'price_desc':
                return [...catalog].sort((a, b) => b.price - a.price)
            case 'ost_asc':
                return [...catalog].sort((a, b) => a.ost - b.ost)
            case 'ost_desc':
                return [...catalog].sort((a, b) => b.ost - a.ost)
            default:
                return catalog
        }
    }
    const sortAndfilterProducts = sortProducts(sorting, filterProducts)
    return (
        <section className="startCatalog">
            <div className="container">
                <input className='search' type="search" name='search' placeholder='Поиск' onChange={search} />
                <select onChange={sort}>
                    <option value="price_asc">По возрастанию цены</option>
                    <option value="price_desc">По убыванию цены</option>
                </select>
                <select onChange={sort}>
                    <option value="ost_asc">По остатку ↑</option>
                    <option value="ost_desc">По остатку ↓</option>
                </select>
                <button className="search" onClick={() => setCategory(0)}>Всё</button>
                <button className="search" onClick={() => setCategory(1)}>Рубашки</button>
                <button className="search" onClick={() => setCategory(2)}>Футболки</button>
                <div className="sContainer">

                    {

                        sortAndfilterProducts.length ?
                            sortAndfilterProducts.map((card, index) => {
                                return (
                                    <Card key={index} {...card} addCard={() => addToBasket([...basket, card.id])} />
                                )
                            })
                            : <h2 className='er'>Нет результатов</h2>
                    }
                </div>
            </div>
        </section>
    )
}