import React, { Fragment, useState } from "react";

const EditPSU = ({ todo }) => {
    const [description, setDescription] = useState(todo.name);
    const [form_factor, setDescription2] = useState(todo.form_factor);
    const [watt, setDescription3] = useState(todo.watt);
    const [price, setDescription4] = useState(todo.price);
    //edit description function

    const updateDescription = async e => {
        e.preventDefault();
        try {
            const body = { description, form_factor, watt, price };
            const response = await fetch(
                `http://localhost:3080/see/psu/${todo.id_psu}`,
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

            <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${todo.id_psu}`}>
                Edit
            </button>


            <div class="modal" id={`id${todo.id_psu}`}>
                <div class="modal-dialog">
                    <div class="modal-content">


                        <div class="modal-header">
                            <h4 class="modal-title">Edit PSU</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>


                        <div class="modal-body" >
                            <input type="text" classname="form-control" value={description} onChange={e => setDescription(e.target.value)} />
                            <input type="text" classname="form-control" value={form_factor} onChange={e => setDescription2(e.target.value)}></input>
                            <input type="text" classname="form-control" value={watt} onChange={e => setDescription3(e.target.value)}></input>
                            <input type="text" classname="form-control" value={price} onChange={e => setDescription4(e.target.value)}></input>
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

export default EditPSU;