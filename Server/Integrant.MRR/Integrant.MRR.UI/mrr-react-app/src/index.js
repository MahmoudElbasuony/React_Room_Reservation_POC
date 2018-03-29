import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "jquery/dist/jquery.min";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

