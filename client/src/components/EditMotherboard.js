import React, { Fragment, useState } from "react";

const EditMotherboard = ({ todo }) => {
    const [description, setDescription] = useState(todo.name);
    const [chipset, setDescription2] = useState(todo.chipset);
    const [form_factor, setDescription3] = useState(todo.form_factor);
    const [ram_slot, setDescription4] = useState(todo.ram_slot);
    const [brand, setDescription5] = useState(todo.brand);
    const [price, setDescription6] = useState(todo.price);
    //edit description function

    const updateDescription = async e => {
        e.preventDefault();
        try {
            const body = { description, chipset, form_factor, ram_slot, brand, price };
            const response = await fetch(
                `http://localhost:3080/see/motherboard/${todo.id_mobo}`,
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

            <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${todo.id_mobo}`}>
                Edit
            </button>


            <div class="modal" id={`id${todo.id_mobo}`}>
                <div class="modal-dialog">
                    <div class="modal-content">


                        <div class="modal-header">
                            <h4 class="modal-title">Edit Motherboard</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>


                        <div class="modal-body" >
                            <input type="text" classname="form-control" value={description} onChange={e => setDescription(e.target.value)} />
                            <input type="text" classname="form-control" value={chipset} onChange={e => setDescription2(e.target.value)}></input>
                            <input type="text" classname="form-control" value={form_factor} onChange={e => setDescription3(e.target.value)}></input>
                            <input type="text" classname="form-control" value={ram_slot} onChange={e => setDescription4(e.target.value)}></input>
                            <input type="text" classname="form-control" value={brand} onChange={e => setDescription5(e.target.value)}></input>
                            <input type="text" classname="form-control" value={price} onChange={e => setDescription6(e.target.value)}></input>
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

export default EditMotherboard;