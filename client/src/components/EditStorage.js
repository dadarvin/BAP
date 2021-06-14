import React, { Fragment, useState } from "react";

const EditStorage = ({ todo }) => {
    const [description, setDescription] = useState(todo.name);
    const [size, setDescription2] = useState(todo.size);
    const [tipe, setDescription3] = useState(todo.tipe);
    const [price, setDescription4] = useState(todo.price);
    //edit description function

    const updateDescription = async e => {
        e.preventDefault();
        try {
            const body = { description, size, tipe, price };
            const response = await fetch(
                `http://localhost:3080/see/storage/${todo.id_str}`,
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

            <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${todo.id_str}`}>
                Edit
            </button>


            <div class="modal" id={`id${todo.id_str}`}>
                <div class="modal-dialog">
                    <div class="modal-content">


                        <div class="modal-header">
                            <h4 class="modal-title">Edit Storage</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>


                        <div class="modal-body" >
                            <input type="text" classname="form-control" value={description} onChange={e => setDescription(e.target.value)} />
                            <input type="text" classname="form-control" value={size} onChange={e => setDescription2(e.target.value)}></input>
                            <input type="text" classname="form-control" value={tipe} onChange={e => setDescription3(e.target.value)}></input>
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

export default EditStorage;