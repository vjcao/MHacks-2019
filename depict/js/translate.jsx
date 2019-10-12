import React from 'react';
import PropTypes from 'prop-types';


const languages = [
        {}
]

class Translate extends React.Component {

    

    constructor(props) {
        // Initialize mutable state
        super(props);
        this.state = { english: "none", tranlate: "none" };
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
                english: "original",
                translate: "new word"
            });
        })
        .catch(error => console.log(error));
    }

    render() {
        // Render number of likes
        return (
            <div className="translate">
            <p>{ this.state.english }</p>
            <p>{ this.state.translate }</p>
            </div>
        );
    }
}

Translate.propTypes = {
    url: PropTypes.string.isRequired,
};
  
export default Translate;