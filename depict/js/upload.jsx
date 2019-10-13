import React from 'react';
import PropTypes from 'prop-types';

class Upload extends React.Component {

    constructor(props) {
        // Initialize mutable state
        super(props);
        this.state = { upload: "nopic", words: [] };
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            upload: URL.createObjectURL(event.target.files[0]),
            words: []
        })
        let formData = new FormData();
        formData.append("file", event.target.files[0]);
        console.log(event.target.files[0]);
        console.log(formData);
        fetch(this.props.url, { credentials: 'same-origin', method: 'POST', body: formData })
        .then((response) => { console.log(response); response.json() })
        .then((data) => {
            console.log(data);
            this.setState({
                upload: URL.createObjectURL(event.target.files[0]),
                words: data.label
            })
        })
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
            <div>
                <input type="file" onChange={this.handleChange}/>
                <img src={this.state.upload}/>
            </div>
        );
    }
}

Upload.propTypes = {
    url: PropTypes.string.isRequired,
};
  
export default Upload;