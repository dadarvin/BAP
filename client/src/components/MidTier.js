import { get } from "jquery";
import React, { Fragment, useEffect, useState } from "react";

const MidTier = () => {
    const [todos, setTodos] = useState([]);
    const [cpu, setTodos2] = useState([]);
    const [gpu, setTodos3] = useState([]);
    const [mobo, setTodos4] = useState([]);
    const [ram, setTodos5] = useState([]);
    const [str, setTodos6] = useState([]);
    const [psu, setTodos7] = useState([]);
    const [casing, setTodos8] = useState([]);
    const [fan, setTodos9] = useState([]);
    //const []

    const getHardware = async () => {
        try {
            const response = await fetch(`http://localhost:3080/recommend/2`);

            const jsonData = await response.json();

            setTodos(jsonData);

        } catch (err) {
            console.error(err.message);
        }
    };

    // function timeout(delay: number) {
    //     return new Promise(res => setTimeout(res, delay));
    // }

    const getDataCpu = async () => {
        try {
            const response = await fetch(`http://localhost:3080/see/cpu/${todos.id_cpu}`);
            const jsonData = await response.json();

            setTodos2(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    const getDataGpu = async () => {
        try {
            const response = await fetch(`http://localhost:3080/see/gpu/${todos.id_gpu}`);
            const jsonData = await response.json();

            setTodos3(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    const getDataMobo = async () => {
        try {
            const response = await fetch(`http://localhost:3080/see/motherboard/${todos.id_mobo}`);
            const jsonData = await response.json();

            setTodos4(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    const getDataRam = async () => {
        try {
            const response = await fetch(`http://localhost:3080/see/ram/${todos.id_ram}`);
            const jsonData = await response.json();

            setTodos5(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    const getDataStorage = async () => {
        try {
            const response = await fetch(`http://localhost:3080/see/storage/${todos.id_str}`);
            const jsonData = await response.json();

            setTodos6(jsonData);
        } catch (err) {
            console.error(err.message);
        }
        console.log(str);
    };

    const getDataPsu = async () => {
        try {
            const response = await fetch(`http://localhost:3080/see/psu/${todos.id_psu}`);
            const jsonData = await response.json();

            setTodos7(jsonData);
        } catch (err) {
            console.error(err.message);
        }
        console.log(str);
    };

    const getDataCasing = async () => {
        try {
            const response = await fetch(`http://localhost:3080/see/case/${todos.id_case}`);
            const jsonData = await response.json();

            setTodos8(jsonData);
        } catch (err) {
            console.error(err.message);
        }
        console.log(str);
    };

    const getDataFan = async () => {
        try {
            const response = await fetch(`http://localhost:3080/see/fan/${todos.id_fan}`);
            const jsonData = await response.json();

            setTodos9(jsonData);
        } catch (err) {
            console.error(err.message);
        }
        console.log(str);
    };

    const getDataAll = async () => {
        getDataCpu();
        getDataGpu();
        getDataMobo();
        getDataRam();
        getDataStorage();
        getDataPsu();
        getDataCasing();
        getDataFan();
    }

    useEffect(() => {
        async function fetchAPI() {
            getHardware();
            //getData();
        }
        fetchAPI();

    }, []);

    //console.log(cpu);
    //console.log(cpuDesc);

    return (
        <Fragment>

            <div class="row py-0">
                <div class="col-lg-6">
                    <div class="single-project">
                        <img src="images/rekomendasi/midtier.jpg" alt="" class="img-fluid">
                        </img>
                    </div>
                </div>

                <div class="col-lg-5">


                    <div>
                        <div class="d-flex justify-content-center">
                            <h1>Mid Tier</h1>
                        </div>

                        <div class="d-flex justify-content-center">
                            <h3>Apa ya Komponen Lengkapnya?</h3>
                        </div>

                        <div class="d-flex justify-content-center">
                            <button type="button" class="btn btn-outline-success" onClick={() => getDataAll()}>
                                Kasih tau Dong !
                            </button>
                        </div>

                        <h3>{cpu.name}<br></br>{gpu.name} {gpu.chip} {gpu.memory}<br></br>{mobo.name} {mobo.chipset}
                            <br></br>{ram.name} {ram.speed}<br></br>{str.tipe} {str.name} {str.size}<br></br>
                            {psu.name} {psu.watt} {psu.form_factor}<br></br>{casing.name} {fan.name}</h3>


                    </div>


                </div>
            </div>
            <pre class="tab"> </pre>
            <pre class="tab"> </pre>
        </Fragment >
    );
};

export default MidTier;