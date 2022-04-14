import { AiFillAppstore, AiOutlineArrowDown } from "react-icons/ai"
import styles from "../../styles/Card.module.css"
import { CSSProperties, MouseEvent, useState } from 'react';
import { useEffect } from 'react';

interface ICard2StylesType{
    card2: CSSProperties,
    ellipsBtn: CSSProperties
}
interface ICard2PropType{
    title: string
}

function Card2({
    title
}: ICard2PropType) {

    const [withDesc, setWithDesc] = useState<boolean>(false)

    function hundleDesc(e: MouseEvent<HTMLDivElement>){
        e.stopPropagation()
        setWithDesc(!withDesc)
    }

    const style:ICard2StylesType = {
        card2: {
            height: withDesc? "420px": "280px"
        },
        ellipsBtn: {
            transform: withDesc? "rotate(180deg)" : "rotate(0)"
        }
    }
      

    return ( 
        <>
            <div className={styles.card2} style={style.card2}>
                <div className={styles.card2_bg}>
                    <img src="/images/carousel/1.jpg" alt="" className={styles.card2_img} />
                </div>
                <div className={styles.card2_cantainer}>
                    <div className={styles.card2_main}>
                        <div className={styles.card2_right}>
                            <div className={styles.card2_right_title}>
                                Lorem ipsum dolor sit.
                            </div>
                        </div>
                        <div className={styles.card2_left}>
                            <div className={styles.card2_left_title}>
                                {
                                    title
                                }
                            </div>
                            <div className={styles.card2_left_ellips} onClick={hundleDesc} style={style.ellipsBtn}>
                                <AiOutlineArrowDown />
                            </div>
                        </div>
                    </div>
                    <div className={styles.card2_subwrap}>
                        <div className={styles.card2_subwrap_icons}>
                            <div className={styles.card2_subwrap_icon}>
                                <AiFillAppstore />
                            </div>
                            <div className={styles.card2_subwrap_icon}>
                                <AiFillAppstore />
                            </div>
                            <div className={styles.card2_subwrap_icon}>
                                <AiFillAppstore />
                            </div>
                            <div className={styles.card2_subwrap_icon}>
                                <AiFillAppstore />
                            </div>
                            <div className={styles.card2_subwrap_icon}>
                                <AiFillAppstore />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.card2_desc}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Dolor excepturi voluptatibus numquam itaque voluptas explicabo. 
                    Consequuntur provident corrupti delectus nostrum! Vero minus 
                    consequatur assumenda enim explicabo laudantium eius eligendi. 
                    Omnis in aliquam, modi unde perspiciatis dolore recusandae repellat ducimus dicta!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero minima cumque sunt? 
                    Cumque totam quo rerum, asperiores odio explicabo labore facilis?
                </div>
            </div>
        </>
     );
}

export default Card2;