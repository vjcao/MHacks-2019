import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Upload from './upload'
import Translate from './translate'

class App extends React.Component {
    constructor(props) {
        // Initialize mutable state
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="app">
                <Upload url='/api/v1/vision'/>
                <Translate url='/api/v1/translate'/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('reactEntry'),
);