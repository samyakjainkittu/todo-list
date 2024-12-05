/* eslint-disable react/prop-types */

import { MdFileDownloadDone } from "react-icons/md";

function Todoitem({todoname,tododate , ondelete}) {
    


    return(
    <div className="container ">

        <div className="row sk-row">
            <div className="col-4">
                {todoname}
            </div>
            <div className="col-6">
                {tododate}
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-danger skbutton" onClick={ ()=> ondelete(todoname , tododate )}> <MdFileDownloadDone /> </button>
            </div>

        </div>

    </div>
    );
}

export default Todoitem;