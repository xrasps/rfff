import headerLogo from '/public/Banner/banner.png'
import logo from '/public/Header/logo-b.png'
import btn from '../Button/Button'
import Button from '../Button/Button'

export default function Banner(){
    return(
        <section className="banner">
            <div className="container">
                <div className="banner-content">
                    <img src={logo} alt="" />
                    <h1>БРЕНД ОДЕЖДЫ</h1>
                    <Button title="КАТАЛОГ" />
                </div>
            </div>
        </section>
    )
}