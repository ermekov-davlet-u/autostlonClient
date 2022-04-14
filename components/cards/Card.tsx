import styles from "../../styles/Card.module.css"
import Image from 'next/image';
interface CardPropType{
    title: string;
    subTitle?: string;
    desc?: string;
    price?: number;
    image?: string
}

function Card({
        title = "My Car",
        subTitle = "",
        desc = '',
        price = 0
    }:CardPropType) {
    return ( 
        <>
            <article className={styles.card}>
                <div className={styles.container}>
                    <div className={styles.image_wrap}>
                        <Image className={styles.image} src="/images/carousel/1.jpg"
                        
                        layout={"fill"}/>
                    </div>
                    <p className={styles.subtitle}>
                        {
                            subTitle
                        }
                    </p>
                    <h2 className={styles.title}>
                        {
                            title
                        }
                    </h2>
                    
                    <div className={styles.desc_wrap}>
                        <p className={styles.desc_text}>
                            {
                                desc
                            }
                        </p>
                        <p className={styles.price}>
                            {
                                price
                            } <span className={styles.price_icon}>$</span>
                        </p>
                    </div>

                </div>
            </article>
        </>
     );
}

export default Card;