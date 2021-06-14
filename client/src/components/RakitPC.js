import React, { Fragment, useEffect, useState } from "react";

const RakitPC = () => {
    const [cpu, setTodos] = useState([]);
    const [mobo, setTodos2] = useState([]);
    const [ram, setTodos3] = useState([]);
    const [gpu, setTodos4] = useState([]);
    const [storage, setTodos5] = useState([]);
    const [psu, setTodos6] = useState([]);
    const [casing, setTodos7] = useState([]);
    const [fan, setTodos8] = useState([]);
    const [rakit, setTodos9] = useState([]);

    const getCPU = async () => {
        try {
            const response = await fetch("http://localhost:3080/see/cpu");
            const jsonData = await response.json();

            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    const getMotherboard = async () => {
        try {
            const response = await fetch("http://localhost:3080/see/motherboard");
            const jsonData = await response.json();

            setTodos2(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    const getRAM = async () => {
        try {
            const response = await fetch("http://localhost:3080/see/ram");
            const jsonData = await response.json();

            setTodos3(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    const getGPU = async () => {
        try {
            const response = await fetch("http://localhost:3080/see/gpu");
            const jsonData = await response.json();

            setTodos4(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    const getStorage = async () => {
        try {
            const response = await fetch("http://localhost:3080/see/storage");
            const jsonData = await response.json();

            setTodos5(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    const getPSU = async () => {
        try {
            const response = await fetch("http://localhost:3080/see/psu");
            const jsonData = await response.json();

            setTodos6(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    const getCasing = async () => {
        try {
            const response = await fetch("http://localhost:3080/see/case");
            const jsonData = await response.json();

            setTodos7(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    const getFan = async () => {
        try {
            const response = await fetch("http://localhost:3080/see/fan");
            const jsonData = await response.json();

            setTodos8(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    const getPrice = async () => {
        try {
            const response = await fetch("http://localhost:3080/price");
            const jsonData = await response.json();

            setTodos9(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    const updatePC = async (id, id2) => {
        try {
            const deleteTodo = await fetch(`http://localhost:3080/see/rakitpc/${id}/${id2}`, {
                method: "PUT"
            });
            //setTodos(todos.filter(todo => todo.id_mobo !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    let hargaCPU = [];

    useEffect(() => {
        getCPU();
        getMotherboard();
        getRAM();
        getGPU();
        getStorage();
        getPSU();
        getCasing();
        getFan();
    }, []);

    console.log(cpu);

    return (
        <Fragment>
            <h2>Pilih Perangkat PC mu !</h2>
            <br></br>
            <div class="input-group mb-3">

                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Processor</label>
                </div>

                {/* <select class="custom-select" id="inputGroupSelect01" onChange={() => updatePC(hargaCPU)}> */}
                <select class="custom-select" id="inputGroupSelect01" value={cpu.price} onChange={(e) => updatePC(e.currentTarget.value, 1)}>
                    <option selected>Ambil CPU...</option>
                    {cpu.map(todo => (
                        <option value={todo.price}>{todo.name} - Rp.{todo.price}</option>
                    ))}
                </select>
            </div>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Motherboard</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01" value={mobo.price} onChange={(e) => updatePC(e.currentTarget.value, 2)}>
                    <option selected>Ambil Motherboard...</option>
                    {mobo.map(todo => (
                        <option value={todo.price}>{todo.name} - Rp.{todo.price}</option>
                    ))}
                </select>
            </div>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">RAM</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01" value={ram.price} onChange={(e) => updatePC(e.currentTarget.value, 3)}>
                    <option selected>Ambil RAM...</option>
                    {ram.map(todo => (
                        <option value={todo.price}>{todo.name} - Rp.{todo.price}</option>
                    ))}
                </select>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">VGA</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01" value={gpu.price} onChange={(e) => updatePC(e.currentTarget.value, 4)}>
                    <option selected>Ambil VGA...</option>
                    {gpu.map(todo => (
                        <option value={todo.price}>{todo.name} {todo.chip} - Rp.{todo.price}</option>
                    ))}
                </select>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01" >Storage</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01" value={storage.price} onChange={(e) => updatePC(e.currentTarget.value, 5)}>
                    <option selected>Ambil Storage...</option>
                    {storage.map(todo => (
                        <option value={todo.price}>{todo.tipe} {todo.name} {todo.size}GB - Rp.{todo.price}</option>
                    ))}
                </select>
            </div>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">PSU</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01" value={psu.price} onChange={(e) => updatePC(e.currentTarget.value, 6)}>
                    <option selected>Ambil Power Supply...</option>
                    {psu.map(todo => (
                        <option value={todo.price}>{todo.name} {todo.watt} {todo.form_factor} - Rp.{todo.price}</option>
                    ))}
                </select>
            </div>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Casing</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01" value={casing.price} onChange={(e) => updatePC(e.currentTarget.value, 7)}>
                    <option selected>Ambil Casing...</option>
                    {casing.map(todo => (
                        <option value={todo.price}>{todo.name} - Rp.{todo.price}</option>
                    ))}
                </select>
            </div>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Fan</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01" value={fan.price} onChange={(e) => updatePC(e.currentTarget.value, 8)}>
                    <option selected>Ambil Fan...</option>
                    {fan.map(todo => (
                        <option value={todo.price}>{todo.name} - Rp.{todo.price}</option>
                    ))}
                </select>
            </div>

            <div class="d-flex justify-content-center">
                <p class="mb-0">
                    <a id="kuyRakit" class="btn btn-primary btn-circled" onClick={() => getPrice()}>
                        Rakit!
                    </a>
                </p>
            </div>

            <div class="d-flex justify-content-end">
                <h3>Total Harga : &nbsp; &nbsp; &nbsp;</h3>

                <h4>Rp {rakit.sum}</h4>


            </div>

        </Fragment >
    );
};

export default RakitPC;