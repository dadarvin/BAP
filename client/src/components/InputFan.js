import React, { Fragment, useEffect, useState } from "react";
import EditFan from "./EditFan";

const InputFan = () => {
    const [todos, setTodos] = useState([]);

    //delete function
    const deleteTodo = async id => {
        try {
            const deleteTodo = await fetch(`http://localhost:3080/see/fan/${id}`, {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.id_fan !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getHardware = async () => {
        try {
            const response = await fetch("http://localhost:3080/see/fan");
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
            {" "}
            <h2>Fan Lists</h2>
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>RPM</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr>
                            <td>{todo.id_fan}</td>
                            <td>{todo.name}</td>
                            <td>{todo.rpm}</td>
                            <td>{todo.price}</td>
                            <td><EditFan todo={todo} /></td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteTodo(todo.id_fan)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default InputFan;