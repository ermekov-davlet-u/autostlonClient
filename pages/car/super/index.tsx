import Card2 from "../../../components/cards/Card2";
import MainComp from "../../../components/Main/MainComp";

type superCarPropType = {
    res: {
        id: number,
        value: string
    }[],
    todos: {
        userId: number,
        id: number,
        title: string,
        complated: boolean
    }[]
}

function SuperCar({
    res,
    todos
}: superCarPropType) {
    
    return ( 
        <MainComp nav={true}>
            {
                todos.map(item => {
                    return (
                        <Card2 title={item.title} key={item.id}/>
                    )
                })
            }
        </MainComp>
     );
}


 export async function getServerSideProps (context: any) {

    
    const res = [
        {
            id: 1,
            value: "Davlet"
        },
        {
            id: 2,
            value: "Ermek"
        }
    ]
    const todos = await fetch('https://jsonplaceholder.typicode.com/todos?page=2')
                    .then(res => res.json())
                    .then(json => {
                        console.log(json);
                        return json
                    })
    

    return {
        props: {
            res: res,
            todos: todos
        }
    }
}

export default SuperCar;