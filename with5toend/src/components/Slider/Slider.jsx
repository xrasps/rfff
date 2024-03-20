import Slider from 'react-slick'
import './Slider.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Card from '../../../public/Catalog/tow.png'
import Card2 from '../../../public/Catalog/tow2.png'
import Card3 from '../../../public/Catalog/tow3.png'

export default function SliderC(){
    const setting = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
    }
    return(
        <section className='slider'>
            <div className="container">
                <h1>Популярные товары</h1>
                <div className="slider_place">
                    <Slider {...setting}>
                        <div className="slide">
                            <img className='sliderImg' src={Card} alt="" />
                        </div>
                        <div className="slide">
                            <img className='sliderImg' src={Card2} alt="" />
                        </div>
                        <div className="slide">
                            <img className='sliderImg' src={Card3} alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
            
        </section>
    )
}