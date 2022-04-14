import styles from "../../styles/Navbar.module.scss"
import Link from 'next/link';
import { AiFillGitlab } from "react-icons/ai"

function Navbar() {
    return ( 
    <>
        <div className={styles.navbar}>
            <div className={styles.navbar_container}>
                <div className={styles.navbar_logo}>
                    <AiFillGitlab></AiFillGitlab>
                </div>
                <nav className={styles.navbar_nav}>
                    <ul className={styles.navbar_ul}>
                        <li className={styles.navbar_li}>
                            <Link href="/car" >
                                <a className={styles.navbar_li_text}>
                                    Машины
                                </a>
                            </Link>
                        </li>
                        <li className={styles.navbar_li}>
                            <Link href="/mark" >
                                <a className={styles.navbar_li_text}>
                                    Марки
                                </a>
                            </Link>
                        </li>
                        <li className={styles.navbar_li}>
                            <Link href="/mark/add" >
                                <a className={styles.navbar_li_text}>
                                    Добавить марки
                                </a>
                            </Link>
                        </li>
                        <li className={styles.navbar_li}>
                            <Link href="/car/super" >
                                <a className={styles.navbar_li_text}>
                                    Суперкар
                                </a>
                            </Link>
                        </li>
                        <li className={styles.navbar_li}>
                            <Link href="/" >
                                <a className={styles.navbar_li_text}>
                                    Главная
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </>
     );
}

export default Navbar;