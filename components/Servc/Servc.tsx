

export default function Servc (){
    return(
        <>
            <section className="services">
                <div className="container">
                <h2 className="title">
                    НАШИ УСЛУГИ
                </h2>
                <div className="services__inner">
                    <div className="services__content">
                    <div className="services__content-box">
                        <h6 className="services__content-title">
                        Почему ввоз авто из США?
                        </h6>
                        <div className="services__content-textbox">
                        <p className="services__content-text">
                            Мы сравнили рынки США с Европейскими и поняли,
                            что покупка автомобиля в Америке выгоднее в несколько раз,
                            как бы парадоксально это не звучало. Это вызвано продуманной логистикой,
                            уровнем развития сервисов по оцениванию состояния авто и самим процессом
                            покупки автомобиля.
                        </p>
                        <p className="services__content-text">
                            Большинство граждан США берут автомобиль в лизинг на
                            несколько лет и все время эксплуатации сама лизинговая
                            компания занимается постоянным ТО автомобиля, вследствие чего,
                            машины из США – один из лучших выборов для автолюбителей Украины.
                        </p>
                        </div>
                    </div>
                    <div className="services__content-box">
                        <h6 className="services__content-title">
                        Из-за чего такая низкая цена?
                        </h6>
                        <div className="services__content-textbox">
                        <p className="services__content-text">
                            Битые автомобили из США выкупаются с аукционов страховых компаний.
                            На этих аукционах машина теряет половину цены даже из-за минимальных
                            повреждений. Если учитывать денежные затраты, а именно выкуп, доставку,
                            таможню и ремонт, то цена аналогичного по состоянию автомобиля в Украине
                            будет выше на 35-50%, а новые будут стоить космических денег.
                        </p>
                        </div>
                        <a href="#" className="button button--decor">КОНСУЛЬТАЦИЯ ЭКСПЕРТА</a>
                    </div>
                    </div>
                    <ol className="services__list">
                    <li className="services__item">
                        <p className="services__item-title">Покупка авто</p>
                        <p className="services__item-text">Подбор автомобиля и экспертная проверка</p>
                    </li>
                    <li className="services__item">
                        <p className="services__item-title">Доставка морем</p>
                        <p className="services__item-text">Расчет оптимальной стоимости доставки авто</p>
                    </li>
                    <li className="services__item">
                        <p className="services__item-title">Растаможка авто</p>
                        <p className="services__item-text">Прохождение таможенного оформления (2-3 дня)</p>
                    </li>
                    <li className="services__item">
                        <p className="services__item-title">Ремонт авто</p>
                        <p className="services__item-text">Комплексный ремонт автомобиля на СТО</p>
                    </li>
                    <li className="services__item">
                        <p className="services__item-title">Сертификация</p>
                        <p className="services__item-text">Услуга предоставляется по желанию</p>
                    </li>
                    <li className="services__item">
                        <p className="services__item-title">Постановка на учет</p>
                        <p className="services__item-text">Оформление автомобиля в Украине</p>
                    </li>
                    </ol>
                </div>
                </div>
            </section>
        </>
    )
}