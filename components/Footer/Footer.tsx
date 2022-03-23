

export default function Footer(){
    return(
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__inner">
                        <a href="#" className="logo">
                        <img className="logo__img" src="images/logo.svg" alt="logo" />
                        </a>
                        <div className="social footer__social">
                        <a className="social-link" href="#">
                            <img className="social-img" src="images/icon/whatsapp.svg" alt="" />
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
                        <a className="footer__copy" href="#">
                        Политика конфиденциальности
                        </a>
                    </div>
                </div>
            </footer> 
        </>
    )
}