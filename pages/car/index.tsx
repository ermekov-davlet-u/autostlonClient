import MainComp from "../../components/Main/MainComp";
import Card from './../../components/cards/Card';
import Link from 'next/link';

function Car() {
    return ( 
        <MainComp title="Машины" nav={true}>
            <div className="display_flex">
                <Link href="car/1">
                    <a>
                        <Card subTitle="Tayota charser" 
                            title={"My new Car"}
                            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Aliquid ad eligendi facere quidem vero id, dolorem dolores 
                                autem expedita! Sit nisi itaque impedit, cupiditate nam 
                                explicabo nostrum, facilis quisquam maiores, sapiente dolore. 
                                Eos atque ex provident repellendus? Quo, qui mollitia?" 
                            price={50088}/>
                    </a>
                </Link>
            </div>
            
        </MainComp>
     );
}

export default Car;