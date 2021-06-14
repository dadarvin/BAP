import React, { Fragment, useState } from "react";

const EditCPU = ({ todo }) => {
    const [description, setDescription] = useState(todo.name);
    const [core, setDescription2] = useState(todo.core);
    const [clock, setDescription3] = useState(todo.clock);
    const [integrated, setDescription4] = useState(todo.integrated);
    const [price, setDescription5] = useState(todo.price);
    //edit description function

    const updateDescription = async e => {
        e.preventDefault();
        try {
            const body = { description, core, clock, integrated, price };
            const response = await fetch(
                `http://localhost:3080/see/cpu/${todo.id_cpu}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                }
            );
            //window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>

            <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${todo.id_cpu}`}>
                Edit
            </button>


            <div class="modal" id={`id${todo.id_cpu}`}>
                <div class="modal-dialog">
                    <div class="modal-content">


                        <div class="modal-header">
                            <h4 class="modal-title">Edit CPU</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>


                        <div class="modal-body" >
                            <input type="text" classname="form-control" value={description} onChange={e => setDescription(e.target.value)} />
                            <input type="text" classname="form-control" value={core} onChange={e => setDescription2(e.target.value)}></input>
                            <input type="text" classname="form-control" value={clock} onChange={e => setDescription3(e.target.value)}></input>
                            <input type="text" classname="form-control" value={integrated} onChange={e => setDescription4(e.target.value)}></input>
                            <input type="text" classname="form-control" value={price} onChange={e => setDescription5(e.target.value)}></input>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={e => updateDescription(e)}>Edit</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditCPU;