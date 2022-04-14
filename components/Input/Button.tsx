import { MouseEvent, ReactChildren } from "react";
import styles from "../../styles/RowInput.module.scss"

interface ButtonPropType{
    children?: ReactChildren
    text: string;
    actionFunc: (e: MouseEvent<HTMLButtonElement>) => any
}

function Button({
    children,
    text,
    actionFunc
}: ButtonPropType) {
    return ( 
        <>
            <div className={styles.button}>
                <div className={styles.button_container}>
                    <button onClick={actionFunc} className={styles.button_elem}>
                        {
                            text
                        }
                    </button>
                    <div className={styles.button_icon}>
                        {
                            children
                        }
                    </div>
                </div>
            </div>
        </>
     );
}

export default Button;