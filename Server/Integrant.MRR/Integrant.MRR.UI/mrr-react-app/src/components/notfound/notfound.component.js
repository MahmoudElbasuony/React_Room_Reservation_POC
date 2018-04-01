import React, { Component } from 'react';
import "./notfound.component.min.css";


 

class NotFoundComponent extends Component {



    render() {
        return (
            <div className="jumbotron text-center">
                <h3>{window.location.pathname}</h3>
                <h1 className="text-danger">  Not Found  </h1>
            </div>
        );
    }
}




export default (NotFoundComponent);