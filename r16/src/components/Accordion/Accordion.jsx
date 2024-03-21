import { useState } from "react"
import './Accordion.css'

export default function Accordion({title,content}){

    const [isActive,setIsActive] = useState(false)


    return(
        <>
        <section className="acc">
            <div className="container">
            <div className="accordion_item">
                <div 
                className="accordion_title" 
                onClick={() => setIsActive(!isActive)}
                >
                    <div className="">{title}</div>
                    <div className="">
                        {isActive ? '-' : '+'}
                    </div>
                </div>
                {isActive && 
                <div className="accordion_content">
                    {content}
                </div>
                }
            </div>
            </div>
        </section>
        
        </>
        
    )
}