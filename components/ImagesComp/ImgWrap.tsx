import Image from "next/image";
import { FC } from "react";
import { ImgWrapPropType } from "../../models/propTypes";
import styles from "../../styles/ImgWrap.module.css"



export const ImgWrap: FC<ImgWrapPropType> = ({
    imgUrl,
    title = "",
    imgDesc = "",
    width = 10,
    height = 10
}) => {

    

    return(
        <>

            <div className={styles.img}>
                <div className={styles.img_logo}>
                    Logo    
                </div>    
                <div className={styles.container}>
                    <Image layout="responsive" width={width} height={height} src={imgUrl} alt="Image not found" className={styles.img_elem}/>
                    {
                        title?
                        <h2 className={styles.img_title}>
                            {
                                title
                            }
                        </h2>: ''
                    }
                    {
                        imgDesc? 
                        <p className={styles.img_desc}> {imgDesc} </p>
                        : ''
                    }
                </div>
            </div>

        </>
    )
}