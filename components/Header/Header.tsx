

export function Header (){
    return (
        <>
            <header className="header">
                <div className="container">
                <div className="header__top">
                    <a href="#" className="logo">
                    <img className="logo__img" src="images/logo.svg" alt="logo" />
                    </a>
                    <a href="+380505556677" className="phone">+38 (050) 555 66 77</a>
                </div>
                <div className="header__content">
                    <h1 className="header__title">
                    авто из сша “под ключ”
                    </h1>
                    <h2 className="header__subtitle">
                    ЗАКАЖИ СЕБЕ АВТО ИЗ США С ВЫГОДОЙ ДО 40%
                    </h2>
                    <p className="header__text">
                    Подбор, покупка, доставка, растаможка, ремонт, оформление по договору
                    </p>
                    <a href="#" className="button">КОНСУЛЬТАЦИЯ ЭКСПЕРТА</a>
                    <div className="social header__social">
                    <a className="social-link" href="#">
                        <img className="social-img" src="images/icon/whatsapp.svg" alt=""/>
                    </a>
                    <a className="social-link" href="#">
                        <img className="social-img" src="images/icon/telegram.svg" alt="" />
                    </a>
                    <a className="social-link" href="#">
                        <img className="social-img" src="images/icon/instagram.svg" alt="" />
                    </a>
                    <a className="social-link" href="#">
                        <img className="social-img" src="images/icon/facebook.svg" alt="" />
                    </a>
                    </div>
                    <img src="images/ford-mustang.png" alt="ford mustang" className="header__images" />
                </div>
                </div>
            </header>
        </>
    )
}