import { DescLinePropType } from "../../models/propTypes"
import styles from "../../styles/Desc.module.scss"

function BigDesc({
    title,
    text
}: DescLinePropType){
    return (
        <>
            <div className={styles.bigdesc}>
                <h3 className={styles.bigdesc_title}>
                    {
                        title
                    }
                </h3>
                <p className={styles.bigdesc_text}>
                    {
                        text
                    }
                </p>
            </div>
        </>
    )
}

export default BigDesc