import { ReactNode } from "react"
import { Header } from './../Header/Header';
import Image from 'next/image';
import Footer from "../Footer/Footer";


interface MainPropType{
    children?: ReactNode
}

export default function({children}: MainPropType) {
    return (
        <>
            <Header></Header>
            {children}
            <Footer/>
        </>
    )
}