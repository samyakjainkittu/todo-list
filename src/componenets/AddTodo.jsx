import { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";

// eslint-disable-next-line react/prop-types
function AddTodo(  {onNewItem} ) {

    const  [ todoName , settodoName] = useState("");
    const  [ Deudate , setDuedate] = useState("");

    const handleNameChange = (event) => {
        settodoName(event.target.value);
    };
    const handleDateChange = (event) => {
        setDuedate(event.target.value);
    };

    const handelAddButton = () => {
        
        onNewItem(todoName , Deudate.split("-").reverse().join("/"));
        setDuedate("");
        settodoName("");


    };




    return (
        <div className="container text-center  add-container">
            <div className="row skrow">
                <div className="col-6">
                    <input type="text" placeholder="Enter Your Task"  onChange= {handleNameChange}  value={todoName}   />

                </div>
                <div className="col-4">
                    <input type="date" name="" id=""   onChange= {handleDateChange}  value={Deudate} />
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success  skbutton" onClick={handelAddButton} ><MdAddCircleOutline /></button>
                </div>

            </div>
        </div>
    );

}

export default AddTodo;