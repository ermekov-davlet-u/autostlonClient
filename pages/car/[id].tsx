import { useRouter } from "next/router";
import React from "react"
import BigDesc from "../../components/CarDesc/BigDesc";
import DescLine from "../../components/CarDesc/DescLine";
import MainComp from "../../components/Main/MainComp";
import { ImgWrap } from './../../components/ImagesComp/ImgWrap';

interface CarPropType{
    res: string;
    myFunc: string;
    id: number
}

function Car({
    res,
    myFunc,
    id
}: CarPropType) {

    const route = useRouter()

    return(
        <MainComp title={res} nav={true}>
            <div className="wrap">
                <ImgWrap imgUrl="/images/carousel/2.jpg" 
                    width={9} 
                    height={6} 
                    title="Mazda 7"
                />
                <div>
                    <DescLine title="Davlet Ermekov" text="lorem ipsum my fovorite"/>
                    <DescLine title="Davlet Ermekov" text="lorem ipsum my fovorite"/>
                    <DescLine title="Davlet Ermekov" text="lorem ipsum my fovorite"/>
                    <DescLine title="Davlet Ermekov" text="lorem ipsum my fovorite"/>
                    <DescLine title="Davlet Ermekov" text="lorem ipsum my fovorite"/>
                    <DescLine title="Davlet Ermekov" text="lorem ipsum my fovorite"/>
                    <DescLine title="Davlet Ermekov" text="lorem ipsum my fovorite"/>
                </div>
            </div>
            <BigDesc 
                title='Lorem ipsum dolor sit.'
                text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla dolorum 
                nobis quos, magnam culpa ratione labore accusamus, aut laudantium non natus. 
                Totam vel recusandae assumenda voluptas, magni iusto temporibus libero sit 
                itaque fugit unde consequatur odio repellendus officia corporis ducimus dolor 
                possimus ad eaque porro accusantium cupiditate qui, quaerat iure! Qui eaque 
                provident est quam omnis laborum doloribus dolorem quis magnam esse quo ipsa 
                mollitia vitae nemo nostrum assumenda inventore sequi, odit fuga deleniti a 
                eos distinctio eveniet. Cumque alias modi, eius similique ad cupiditate libero 
                maxime dolores sint quisquam inventore, architecto blanditiis natus ex neque, 
                repellendus beatae porro placeat eligendi ab. Dolor adipisci nulla optio quos 
                quidem? Aspernatur porro cupiditate architecto mollitia illo ipsam vel repellendus 
                cumque eius sint officia neque quos perspiciatis, laudantium molestiae obcaecati, 
                suscipit nisi minus modi recusandae explicabo distinctio harum pariatur aperiam. Fugiat, 
                doloremque exercitationem!' 
            />
        </MainComp>
    )
}



function tellHi(name: string){
    return "<h1>Привет" + name + "</h1>";
}

export async function getStaticPaths (params: any) {
    const title = await tellHi("Давлет")

    return{
        paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
        // Enable statically generating additional pages
        // For example: `/posts/3`
        fallback: false,
    }
        
}

interface Itype{
    params: any
}

export async function getStaticProps({ params }: Itype) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await "Давлет"
    const funct = () => {
        return("Hi my love")
    }
    
  
    // Pass post data to the page via props
    return {
            props: {
                res,
                myFunc: funct(),
                id: params.id
            }
        }
  }

  export default Car