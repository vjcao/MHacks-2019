import React from 'react';
import ReactDOM from 'react-dom';
import Upload from './upload'
import Translate from './translate'

ReactDOM.render(
    <Upload url='/api/v1/vision'/>,
    document.getElementById('reactEntry'),
);