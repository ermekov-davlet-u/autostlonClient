import { FormEvent, MouseEvent, useEffect, useState } from "react";
import RowInput from './../../components/Input/RowInput';
import { AiFillBackward } from 'react-icons/ai';
import Button from './../../components/Input/Button';
import MainComp from "../../components/Main/MainComp";
const axios = require('axios');


interface markFormType{
    markName: string;
    markDesc: string;
}

function AddMark() {

    const [markForm, setMarkForm] = useState<markFormType>({
        markName: '',
        markDesc: ''
    })

    function changeInp (e: FormEvent<HTMLInputElement>){
        setMarkForm((mark) => {
            return {
                ...mark,
                [e.target.name]: e.target.value
            }
        })
    }
    useEffect(() => {
        console.log(markForm);
    }, [markForm])
    console.log("text")

    function sendCreateMark(){
        let res = new Promise((resolve: (param: any) => void, reject: Function) => {
            try {
                const data = axios.post("http://localhost:3102/student")
                resolve(data)
            }catch(err: any){
                console.log(err.message)
                reject(err)
            }
        })
        res.then((result:any) => "result.json()")
        .then((json) => {
            console.log(json)
        })
    }

    return ( 
        <MainComp nav={true}>
            <div className="markform">
                <div className="markform_container">
                    <div className="markform_title">
                        Добавить новую марку
                    </div>
                    <article className="markform_item">
                        <RowInput title="Название марки" selectName="markName" value={markForm.markName} changeValue={changeInp}/>
                    </article>
                    <article className="markform_item">
                        <RowInput title="Описание марки" selectName="markDesc" value={markForm.markDesc} changeValue={changeInp}/>
                    </article>

                    <article className="markform_item">
                        <Button 
                            actionFunc={(e: MouseEvent<HTMLButtonElement>) => {
                                sendCreateMark()
                            }} 
                            text="Сохранить">
                                <AiFillBackward/>
                        </Button>
                    </article>
                    
                </div>
            </div>
        </MainComp>
     );
}

export default AddMark;