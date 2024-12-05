 
/* eslint-disable react/prop-types */
import Todoitem from "./Todoitem";



const TodoItems = ({todoitem , ondelete }) =>  {

    return (
        <div className="item-container">
            {todoitem.map(items => <Todoitem  key = {items.name} todoname={items.name} tododate={items.date}  ondelete = {ondelete}></Todoitem> )}
           
        </div>


    );

};

export default TodoItems;