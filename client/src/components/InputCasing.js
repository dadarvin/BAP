import React, { Fragment, useEffect, useState } from "react";
import EditCasing from "./EditCasing";

const InputCasing = () => {
    const [todos, setTodos] = useState([]);

    //delete function
    const deleteTodo = async id => {
        try {
            const deleteTodo = await fetch(`http://localhost:3080/see/case/${id}`, {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.id_case !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getHardware = async () => {
        try {
            const response = await fetch("http://localhost:3080/see/casing");
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
            <h2>Casing Lists</h2>
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Form Factor</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr>
                            <td>{todo.id_case}</td>
                            <td>{todo.name}</td>
                            <td>{todo.ff_tipe}</td>
                            <td>{todo.brand}</td>
                            <td>{todo.price}</td>
                            <td><EditCasing todo={todo} /></td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteTodo(todo.id_case)}
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

export default InputCasing;