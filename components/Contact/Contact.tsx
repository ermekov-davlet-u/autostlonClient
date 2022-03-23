

export default function Contact() {
    return(
        <>
            <section className="contacts">
                <div className="container">
                    <div className="contacts__inner">
                        <div className="contacts__info">
                            <h2 className="title">
                                КОНТАКТЫ
                            </h2>
                            <ul className="contacts__list">
                                <li className="contacts-item">
                                    <p className="contacts-item-title">Адрес</p>
                                    <p className="contacts-item-text">Киев, Подол</p>
                                    <p className="contacts-item-text">ул. Константиновская, д.71</p>
                                </li>
                                <li className="contacts-item">
                                    <p className="contacts-item-title">Время работы</p>
                                    <p className="contacts-item-text">Пн-Сб: с 9:00 до 19:00,</p>
                                    <p className="contacts-item-text">Вс: выходной</p>
                                </li>
                                <li className="contacts-item">
                                    <p className="contacts-item-title">Телефон</p>
                                    <p className="contacts-item-text">+38 (050) 555 66 77</p>
                                </li>
                            </ul>
                        </div>
                        <form className="contacts__form">
                            <h2 className="title contacts__title">Оставить заявку</h2>
                            <input className="contacts__input" type="text" placeholder="Как Вас зовут?"/>
                            <input className="contacts__input" type="tel" placeholder="Ваш номер телефона"/>
                            <button className="contacts__btn button" type="submit">Отправить заявку</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}