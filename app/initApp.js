import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {Provider} from 'react-redux';
// import InitStore from './Store/InitStore';

export default class InitApp extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading : true,
            // store     : InitStore(() => this.setState({isLoading : false}))
        };
    }
    render(){
        return (
                <App/>
            );
    }
}

ReactDOM.render(<InitApp/>, document.getElementById('root'));