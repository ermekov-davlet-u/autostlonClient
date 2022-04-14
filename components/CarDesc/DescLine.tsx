import { DescLinePropType } from "../../models/propTypes"
import styles from "../../styles/Desc.module.scss"
 
function DescLine({
    title,
    text
}:  DescLinePropType){

    return(
        <>
            <article className={styles.descline}>
                <div className={styles.descline_title_wrap}>
                    <h3 className={styles.descline_title}>
                        {title}
                    </h3>
                </div>
                <div className={styles.descline_text_wrap}>
                    <p className={styles.descline_text}>
                        {text}
                    </p>
                </div>
            </article>
        </>
    )
}

export default DescLine