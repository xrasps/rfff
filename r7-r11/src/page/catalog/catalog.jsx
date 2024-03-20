import './catalog.css'
import LikeIcon from '/public/catalog/like.svg'
import CartIcon from '/public/catalog/add_cart.svg'
import Tovar from '/public/catalog/tovarImg.png'
import Card from '../../components/card/card'
import {catalog} from '../../data'


export default function CatalogPage() {
    return(
        <div className="catalog">
            <div className="container">
                <div className="path">
                    <p className="path_name">Главная</p>
                    <p className="path_name">\</p>
                    <p className="path_name">Каталог</p>
                </div>

                <div className="categories_wrapper">
                    <a href="" className="category">Все</a>
                    <a href="" className="category">Топ</a>
                    <a href="" className="category">Низ</a>
                    <a href="" className="category">Обувь</a>
                </div>

                <div className="catalog-content">

                    {catalog.map((item,id)=>{
                        return(
                            <Card key={id} name={item.name} price={item.price} id={id} count={item.count}/>
                        )
                    })}
                    <div className="catalog-item">
                        <div className="catalog_image">
                            <img src={ Tovar } alt="" className="photo" />
                        </div>
                        <div className="catalog_descr">
                            <p className="name_tovar">Рубашка СВЭГ</p>
                            <div className="wrapper_btns">
                                <p className="price">9999 ₽</p>
                                <div className="like_cart_icon">
                                    <a href="" className="like-link">
                                        <img src={ LikeIcon } alt="" className="like_icon" />
                                    </a>
                                    <a href="" className="like-link">
                                        <img src={ CartIcon } alt="" className="like_icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}