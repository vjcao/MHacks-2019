import React from 'react';
import PropTypes from 'prop-types';

class Upload extends React.Component {

    constructor(props) {
        // Initialize mutable state
        super(props);
        this.state = { upload: "nopic" };
    }

    componentDidMount() {
        // Call REST API to get number of likes
        fetch(this.props.url, { credentials: 'same-origin' })
        .then((response) => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        })
        .then((data) => {
            this.setState({
                upload: "picture.jpg"
            });
        })
        .catch(error => console.log(error));
    }

    render() {
        // Render number of likes
        return (
            <div className="upload">
            <p>{ this.state.upload }</p>
            </div>
        );
    }
}

Upload.propTypes = {
    url: PropTypes.string.isRequired,
};
  
export default Upload;