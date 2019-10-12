import React from 'react';
function activite(props) {

    return (
        <div className="card" >
            <div className="card-body bg-danger">
                <form>
                    <div className="form-group align-content-center  ">
                        <label htmlFor="exampleFormControlInput1 " className="align-content-center"> {props.activiteName} </label>
                        <input type="text" className="form-control border border-light" id="exampleFormControlInput1" />
                    </div>
                </form>

            </div>
        </div>)
}
export default activite;