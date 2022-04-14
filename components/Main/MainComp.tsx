import { ReactNode } from "react"
import { Header } from './../Header/Header';
import Image from 'next/image';
import Footer from "../Footer/Footer";
import  Head from "next/head";
import Navbar from './../Header/Navbar';


interface MainPropType{
    children?: ReactNode;
    title?: string,
    nav?: boolean;
}

export default function({children, title = "Страница", nav = false}: MainPropType) {
    return (
        <>
            {
                nav? <Navbar/>:<Header/>
            }
            <Head>
                <title>
                    {
                        title
                    }
                </title>
            </Head>
            {
                children
            }
            <Footer/>
        </>
    )
}