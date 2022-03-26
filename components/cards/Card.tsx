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
        title = "My Car"
    }:CardPropType) {
    return ( 
        <>
            <article className={styles.card}>
                <div className={styles.container}>
                    <div className={styles.image_wrap}>
                        <Image className={styles.image} src="/images/carousel/1.jpg"/>
                    </div>
                    <h2 className={styles.title}>
                        {
                            title
                        }
                    </h2>
                    
                </div>
            </article>
        </>
     );
}

export default Card;