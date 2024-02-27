import Card from "../card/card"
import {catalog} from '../../data.js'

export default function Catalog (){
    return (
        <div className="catalog-content">
            {
                catalog.map((card)=>{
                    return(
                        <Card name={card.name} price={card.price}/>
                    )
                })
            }
        </div>
    )
}