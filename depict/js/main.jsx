import React from 'react';
import ReactDOM from 'react-dom';
import Upload from './upload'

ReactDOM.render(
    <Upload url="/api/v1/" />,
    document.getElementById('reactEntry'),
);