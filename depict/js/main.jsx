import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Upload from './upload'
import Translate from './translate'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div id="logo">
                    <img src="/static/uploads/logo.png"/>
                </div>
                <div id="app">
                    <Translate url='/api/v1/translate'/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('reactEntry'),
);
