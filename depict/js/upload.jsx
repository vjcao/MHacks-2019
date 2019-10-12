import React from 'react';
import PropTypes from 'prop-types';

class Upload extends React.Component {

    constructor(props) {
        // Initialize mutable state
        super(props);
        this.state = { upload: "nopic" };
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
      this.setState({
        upload: URL.createObjectURL(event.target.files[0])
      })
      fetch(this.props.url, { credentials: 'same-origin', method: 'POST', body: this.state.upload })
    }
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