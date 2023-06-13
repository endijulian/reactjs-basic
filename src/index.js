import React from 'react';
import ReactDOM from 'react-dom/client';
// import Lifecycle from './react-dasar/Lifecycle';
// import Map from './react-dasar/Map';
// import StateProps from './react-dasar/StateProps';
// import App from './react-dasar/App';
// import Variabel from './react-dasar/Variabel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Variabel></Variabel> */}
    {/* <StateProps></StateProps> */}
    {/* <Map></Map> */}
    {/* <Lifecycle></Lifecycle> */}
    <Crud></Crud>
  </React.StrictMode>
);