import styles from "../../styles/RowInput.module.scss"
import { AiFillApple } from "react-icons/ai";
import { ChangeEvent, FormEvent, FormEventHandler, ReactChildren } from "react";

interface RowInpPropType{
    children?: ReactChildren;
    value: string;
    changeValue: (event: FormEvent<HTMLInputElement>) => void;
    title?: string;
    selectName: string 
}

function RowInput({
    children,
    value,
    changeValue,
    title,
    selectName
}: RowInpPropType) {
    return ( 
        <>
            <div className={styles.rowInp}>
                <div className={styles.rowInp_container}>
                    {
                        title? 
                            <div className={styles.rowInp_titpe_wrap}>
                                <p className={styles.rowinp_title_text}>
                                    {
                                        title
                                    }
                                </p>
                            </div>
                        : 
                            ''
                    }
                    <div className={styles.rowinp_block}>
                        <div className={styles.rowinp_wrap}>
                            <input name={selectName} type="text" onInput={changeValue} value={value} className={styles.rowinp_inp} placeholder="Название"/>
                        </div>
                        <div className={styles.rowinp_icon_wrap}>
                            {
                                children
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default RowInput;