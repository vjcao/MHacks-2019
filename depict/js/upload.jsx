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
        .then(response => {
            console.log(response);
            this.setState({
               words: response.words
            })
        })
        .catch(error => console.log(error))
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
            </div>
            <div id="right-bar">
              <div id="button-bar">
                <input type="file" onChange={this.handleChange}/>
                <label>Upload</label>
              </div>
              <div id="word-list">
                <p>{this.state.words}</p>
              </div>
            </div>
          </div>
        );
    }
}

Upload.propTypes = {
    url: PropTypes.string.isRequired,
};

export default Upload;
