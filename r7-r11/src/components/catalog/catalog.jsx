import Card from "../card/card"
import {catalog} from '../../data.js'
import { useState } from "react"

export default function Catalog (){
    const[query, setQuery] = useState("")

    function search (e){
        setQuery(e.target.value)
    }

    const filterTovars = catalog.filter((item) => item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    return (
        <>
            <input onChange={search} type="search" name="search" placeholder="Поиск..." />
            <div className="catalog-content">
                
                {
                    filterTovars.length ?
                    filterTovars.map((card,index)=>{
                        return(
                            <Card key={index} {...card}/>
                        )
                    })
                    :
                    <h2>По вашему запросу "{query}" ничего не найдено</h2>


                }
            </div>
        </>
    )
}