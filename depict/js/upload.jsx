import React from 'react';
import PropTypes from 'prop-types';

class Upload extends React.Component {

    constructor(props) {
        // Initialize mutable state
        super(props);
        this.state = { upload: "/static/uploads/default.jpg", words: [] };
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            upload: URL.createObjectURL(event.target.files[0]),
            words: []
        })
        let formData = new FormData();
        formData.append("file", event.target.files[0]);
        fetch(this.props.url, { credentials: 'same-origin', method: 'POST', body: formData })
        .then((response) => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        })
        .then(response =>  response.json())
        .then(response => {
            console.log(response);
            this.setState({
               words: response.words
            })
        })
        .error(error => console.log(error))
    }
    /*
    function selectWords() {
        return (
         this.state.words.map()
        )
    }
    */
    render() {
        return (
          <div id="upload-container">
            <div id="upload-stuff">
                <img src={this.state.upload}/>
                <input type="file" onChange={this.handleChange}/>
            </div>
            <div id="wordlist">
                <p>{this.state.words}</p>
            </div>
          </div>
        );
    }
}

Upload.propTypes = {
    url: PropTypes.string.isRequired,
};

export default Upload;
