import MainComp from "../../components/Main/MainComp";

function AddCar() {
    return ( 
        <MainComp>
            <div className="form">
                <div className="form_container">
                    <div className="form_item">
                        <input type="text" className="form_inp" placeholder=""/>
                    </div>

                    <div className="form_item">
                        <textarea name="" id="" cols={30} rows={10} className="form_textarea">

                        </textarea>
                    </div>

                    <div className="form_item">
                        <select name="" id="" className="form_select">
                            <option value="">value</option>
                        </select>
                    </div>

                </div>
            </div>
        </MainComp>
     );
}

export default AddCar;