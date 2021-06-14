import React, { Fragment, useEffect, useState } from "react";
import EditCPU from "./EditCPU";

const InputCpu = () => {
    const [todos, setTodos] = useState([]);

    //delete function
    const deleteTodo = async id => {
        try {
            const deleteTodo = await fetch(`http://localhost:3080/see/cpu/${id}`, {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.id_cpu !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getHardware = async () => {
        try {
            const response = await fetch("http://localhost:3080/see/cpu");
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
            <h2>CPU Lists</h2>
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>core</th>
                        <th>clock</th>
                        <th>integrated</th>
                        <th>price</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr>
                            <td>{todo.id_cpu}</td>
                            <td>{todo.name}</td>
                            <td>{todo.core}</td>
                            <td>{todo.clock}</td>
                            <td>{todo.integrated}</td>
                            <td>{todo.price}</td>
                            <td><EditCPU todo={todo} /></td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteTodo(todo.id_cpu)}
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

export default InputCpu;