import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import $ from 'jquery';
import InputCpu from './components/InputCpu';
import InputMotherboard from './components/InputMotherboard';
import InputGPU from './components/InputGPU';
import InputStorage from './components/InputStorage';
import InputCasing from './components/InputCasing';
import Login from './components/Login';
import InputRAM from './components/InputRAM';
import InputPSU from './components/InputPSU';
import InputFan from './components/InputFan';
import RakitPC from './components/RakitPC';
import LowTier from './components/LowTier';
import MidTier from './components/MidTier';
import HighTier from './components/HighTier';

$('#ambilCPU').on('click', function (event) {
  ReactDOM.render(
    <React.StrictMode>
      <div className='container'>
        <InputCpu />
      </div>
    </React.StrictMode>,
    document.getElementById('root')
  );
});

$('#ambilMotherboard').on('click', function (event) {
  ReactDOM.render(
    <React.StrictMode>
      <div className='container'>
        <InputMotherboard />
      </div>
    </React.StrictMode>,
    document.getElementById('root')
  );
});

$('#ambilVGA').on('click', function (event) {
  ReactDOM.render(
    <React.StrictMode>
      <div className='container'>
        <InputGPU />
      </div>
    </React.StrictMode>,
    document.getElementById('root')
  );
});

$('#ambilSSD').on('click', function (event) {
  ReactDOM.render(
    <React.StrictMode>
      <div className='container'>
        <InputStorage />
      </div>
    </React.StrictMode>,
    document.getElementById('root')
  );
});

$('#ambilFan').on('click', function (event) {
  ReactDOM.render(
    <React.StrictMode>
      <div className='container'>
        <InputFan />
      </div>
    </React.StrictMode>,
    document.getElementById('root')
  );
});

$('#ambilCase').on('click', function (event) {
  ReactDOM.render(
    <React.StrictMode>
      <div className='container'>
        <InputCasing />
      </div>
    </React.StrictMode>,
    document.getElementById('root')
  );
});

$('#ambilRAM').on('click', function (event) {
  ReactDOM.render(
    <React.StrictMode>
      <div className='container'>
        <InputRAM />
      </div>
    </React.StrictMode>,
    document.getElementById('root')
  );
});

$('#ambilPSU').on('click', function (event) {
  ReactDOM.render(
    <React.StrictMode>
      <div className='container'>
        <InputPSU />
      </div>
    </React.StrictMode>,
    document.getElementById('root')
  );
});


$('#kuyRakit').on('click', function (event) {
  ResetRakitPC();
  ReactDOM.render(
    <React.StrictMode>
      <div className='container'>
        <RakitPC />
      </div>
    </React.StrictMode>,
    document.getElementById('rakit')
  );
});

$('#lowTier').on('click', function (event) {
  ReactDOM.render(
    <React.StrictMode>
      <div className='container'>
        <LowTier />
      </div>
    </React.StrictMode>,
    document.getElementById('root2')
  );
});

$('#midTier').on('click', function (event) {
  ReactDOM.render(
    <React.StrictMode>
      <div className='container'>
        <MidTier />
      </div>
    </React.StrictMode>,
    document.getElementById('root2')
  );
});

$('#highTier').on('click', function (event) {
  ReactDOM.render(
    <React.StrictMode>
      <div className='container'>
        <HighTier />
      </div>
    </React.StrictMode>,
    document.getElementById('root2')
  );
});

const ResetRakitPC = async () => {
  try {
    const response = await fetch(
      `http://localhost:3080/startRakit`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error(err.message);
  }
};

ReactDOM.render(
  <React.StrictMode>
    <div className='container'>
      <Login />
    </div>
  </React.StrictMode>,
  document.getElementById('login')
);

