import React from 'react';
import PropTypes from 'prop-types';
// import Checkbox from '@material-ui/core/Checkbox'
// import FormControl from '@material-ui/core/FormControl'
// import FormGroup from '@material-ui/core/FormGroup'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Select from '@material-ui/core/Select'
// import MenuItem from '@material-ui/core/MenuItem'

const languages = [
    {label: 'Afrikaans', code: 'af'},
    {label: 'Albanian', code: 'sq'},
    {label: 'Amharic', code: 'am'},
    {label: 'Arabic', code: 'ar'},
    {label: 'Armenian', code: 'hy'},
    {label: 'Azerbaijani', code: 'az'},
    {label: 'Basque', code: 'eu'},
    {label: 'Belarusian', code: 'be'},
    {label: 'Bengali', code: 'bn'},
    {label: 'Bosnian', code: 'bs'},
    {label: 'Bulgarian', code: 'bg'},
    {label: 'Catalan', code: 'ca'},
    {label: 'Cebuano', code: 'ceb'},
    {label: 'Chinese (Simplified)', code: 'zh-CN'},
    {label: 'Chinese (Traditional)', code: 'zh-TW'},
    {label: 'Corsican', code: 'co'},
    {label: 'Croatian', code: 'hr'},
    {label: 'Czech', code: 'cs'},
    {label: 'Danish', code: 'da'},
    {label: 'Dutch', code: 'nl'},
    {label: 'English', code: 'en'},
    {label: 'Esperanto', code: 'eo'},
    {label: 'Estonian', code: 'et'},
    {label: 'Finnish', code: 'fi'},
    {label: 'French', code: 'fr'},
    {label: 'Frisian', code: 'fy'},
    {label: 'Galician', code: 'gl'},
    {label: 'Georgian', code: 'ka'},
    {label: 'German', code: 'de'},
    {label: 'Greek', code: 'el'},
    {label: 'Gujarati', code: 'gu'},
    {label: 'Haitian Creole', code: 'ht'},
    {label: 'Hausa', code: 'ha'},
    {label: 'Hawaiian', code: 'haw'},
    {label: 'Hebrew', code: 'he'},
    {label: 'Hindi', code: 'hi'},
    {label: 'Hmong', code: 'hmn'},
    {label: 'Hungarian', code: 'hu'},
    {label: 'Icelandic', code: 'is'},
    {label: 'Igbo', code: 'ig'},
    {label: 'Indonesian', code: 'id'},
    {label: 'Irish', code: 'ga'},
    {label: 'Italian', code: 'it'},
    {label: 'Japanese', code: 'ja'},
    {label: 'Javanese', code: 'jw'},
    {label: 'Kannada', code: 'kn'},
    {label: 'Kazakh', code: 'kk'},
    {label: 'Khmer', code: 'km'},
    {label: 'Korean', code: 'ko'} ,
    {label: 'Kurdish', code: 'ku'} ,
    {label: 'Kyrgyz', code: 'ky'} ,
    {label: 'Lao', code: 'lo'} ,
    {label: 'Latin', code: 'la'} ,
    {label: 'Latvian', code: 'lv'} ,
    {label: 'Lithuanian', code: 'lt'} ,
    {label: 'Luxembourgish', code: 'lb'},
    {label: 'Macedonian', code: 'mk'},
    {label: 'Malagasy', code: 'mg'},
    {label: 'Malay', code: 'ms'},
    {label: 'Malayalam', code: 'ml'},
    {label: 'Maltese', code: 'mt'},
    {label: 'Maori', code: 'mi'},
    {label: 'Marathi', code: 'mr'},
    {label: 'Mongolian', code: 'mn'},
    {label: 'Myanmar (Burmese)', code: 'my'},
    {label: 'Nepali', code: 'ne'},
    {label: 'Norwegian', code: 'no'},
    {label: 'Nyanja (Chichewa)', code: 'ny'},
    {label: 'Pashto', code: 'ps'},
    {label: 'Persian', code: 'fa'},
    {label: 'Polish', code: 'pl'},
    {label: 'Portuguese', code: 'pt'},
    {label: 'Punjabi', code: 'pa'},
    {label: 'Romanian', code: 'ro'},
    {label: 'Russian', code: 'ru'},
    {label: 'Samoan', code: 'sm'},
    {label: 'Scots Gaelic', code: 'gd'},
    {label: 'Serbian', code: 'sr'},
    {label: 'Sesotho', code: 'st'},
    {label: 'Shona', code: 'sn'},
    {label: 'Sindhi', code: 'sd'},
    {label: 'Sinhala', code: 'si'},
    {label: 'Slovak', code: 'sk'},
    {label: 'Slovenian', code: 'sl'},
    {label: 'Somali', code: 'so'},
    {label: 'Spanish', code: 'es'},
    {label: 'Sundanese', code: 'su'},
    {label: 'Swahili', code: 'sw'},
    {label: 'Swedish', code: 'sv'},
    {label: 'Filipino', code: 'tl'},
    {label: 'Tajik', code: 'tg'},
    {label: 'Tamil', code: 'ta'},
    {label: 'Telugu', code: 'te'},
    {label: 'Thai', code: 'th'},
    {label: 'Turkish', code: 'tr'},
    {label: 'Ukrainian', code: 'uk'},
    {label: 'Urdu', code: 'ur'},
    {label: 'Uzbek', code: 'uz'},
    {label: 'Vietnamese', code: 'vi'},
    {label: 'Welsh', code: 'cy'},
    {label: 'Xhosa', code: 'xh'},
    {label: 'Yiddish', code: 'yi'},
    {label: 'Yoruba', code: 'yo'},
    {label: 'Zulu', code: 'zu'}
]


class Translate extends React.Component {
    constructor(props) {
        // Initialize mutable state
        super(props);
        this.state = { english: "none", lang: "Afrikaans", translated: "none"};
        this.handleLang = this.handleLang.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleWord = this.handleWord.bind(this)
    }

    // componentDidMount() {
    //     // Call REST API to get number of likes
    //     fetch(this.props.url, { credentials: 'same-origin' })
        // .then((response) => {
        //     if (!response.ok) throw Error(response.statusText);
        //     return response.json();
        // })
    //     .then((data) => {
    //         this.setState({
    //             english: "original",
    //             translate: "new word"
    //         });
    //     })
    //     .catch(error => console.log(error));
    // }

    handleLang(event) {
        console.log(event.target.value)
        this.setState({lang: event.target.value})
    }

    handleWord(event) {
        console.log(event.target.value)
        this.setState({word: event.target.value})
    }

    handleSubmit() {
        this.setState({english: "hello"})
        let formData = new FormData()
        formData.append("word", this.state.english)
        formData.append("lang", this.state.lang)
        fetch(this.props.url, { credentials: 'same-origin', method: 'POST', body: formData })
        .then((response) => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        })
        .then(response => {
            console.log(response);
            this.setState({translated: response.word})
        })
        .catch(error => console.log(error))
    }
    
    render() {
        // Render number of likes
        return (
            <div id="translate">
                <p>{ this.state.english }</p>
                <p>{ this.state.lang }</p>
                <p>{ this.state.translated }</p>
                <select id='language' defaultValue={this.state.lang} onChange={this.handleLang}>
                    {
                        languages.map((el,i) => (<option key={i} value={el.code}>{el.label}</option>))
                    }
                </select>
                <input type="submit" onClick={this.handleSubmit}/>
            </div>
        );
    }
}

Translate.propTypes = {
    url: PropTypes.string.isRequired,
};
  
export default Translate;