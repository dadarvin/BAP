import React, { Fragment, useEffect, useState } from "react";
import EditPSU from "./EditPSU";

const InputPSU = () => {
    const [todos, setTodos] = useState([]);

    //delete function
    const deleteTodo = async id => {
        try {
            const deleteTodo = await fetch(`http://localhost:3080/see/psu/${id}`, {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.id_psu !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getHardware = async () => {
        try {
            const response = await fetch("http://localhost:3080/see/psu");
            const jsonData = await response.json();

            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getHardware();
    }, []);

    console.log(todos);

    return (
        <Fragment>
            <h2>Power Supply Lists</h2>
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Form Factor</th>
                        <th>Watt</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr>
                            <td>{todo.id_psu}</td>
                            <td>{todo.name}</td>
                            <td>{todo.form_factor}</td>
                            <td>{todo.watt}</td>
                            <td>{todo.price}</td>
                            <td><EditPSU todo={todo} /></td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteTodo(todo.id_psu)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment >
    );
};

export default InputPSU;