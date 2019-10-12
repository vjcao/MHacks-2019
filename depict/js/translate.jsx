import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Select from 'react-select';
import { emphasize, makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';


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
].map(suggestion => ({
    value: suggestion.code,
    label: suggestion.label,
}))

/*
function NoOptionsMessage(props) {
    return (
      <Typography
        color="textSecondary"
        className={props.selectProps.classes.noOptionsMessage}
        {...props.innerProps}
      >
        {props.children}
      </Typography>
    );
  }
*/

NoOptionsMessage.propTypes = {
    /**
     * The children to be rendered.
     */
    children: PropTypes.node,
    /**
     * Props to be passed on to the wrapper.
     */
    innerProps: PropTypes.object.isRequired,
    selectProps: PropTypes.object.isRequired,
};

/*
function inputComponent({ inputRef, ...props }) {
    return <div ref={inputRef} {...props} />;
}
*/

inputComponent.propTypes = {
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({
        current: PropTypes.any.isRequired,
        }),
    ]),
};

/*
function Control(props) {
    const {
        children,
        innerProps,
        innerRef,
        selectProps: { classes, TextFieldProps },
    } = props;

    return (
        <TextField
        fullWidth
        InputProps={{
            inputComponent,
            inputProps: {
            className: classes.input,
            ref: innerRef,
            children,
            ...innerProps,
            },
        }}
        {...TextFieldProps}
        />
    );
}
*/

Control.propTypes = {
    /**
     * Children to render.
     */
    children: PropTypes.node,
    /**
     * The mouse down event and the innerRef to pass down to the controller element.
     */
    innerProps: PropTypes.shape({
        onMouseDown: PropTypes.func.isRequired,
    }).isRequired,
    innerRef: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.func,
        PropTypes.shape({
        current: PropTypes.any.isRequired,
        }),
    ]).isRequired,
    selectProps: PropTypes.object.isRequired,
};

/*
function Option(props) {
    return (
        <MenuItem
        ref={props.innerRef}
        selected={props.isFocused}
        component="div"
        style={{
            fontWeight: props.isSelected ? 500 : 400,
        }}
        {...props.innerProps}
        >
        {props.children}
        </MenuItem>
    );
}
*/

Option.propTypes = {
    /**
     * The children to be rendered.
     */
    children: PropTypes.node,
    /**
     * props passed to the wrapping element for the group.
     */
    innerProps: PropTypes.shape({
        id: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        onMouseMove: PropTypes.func.isRequired,
        onMouseOver: PropTypes.func.isRequired,
        tabIndex: PropTypes.number.isRequired,
    }).isRequired,
    /**
     * Inner ref to DOM Node
     */
    innerRef: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.func,
        PropTypes.shape({
        current: PropTypes.any.isRequired,
        }),
    ]).isRequired,
    /**
     * Whether the option is focused.
     */
    isFocused: PropTypes.bool.isRequired,
    /**
     * Whether the option is selected.
     */
    isSelected: PropTypes.bool.isRequired,
};

/*
function Placeholder(props) {
    const { selectProps, innerProps = {}, children } = props;
    return (
        <Typography color="textSecondary" className={selectProps.classes.placeholder} {...innerProps}>
        {children}
        </Typography>
    );
}
*/

Placeholder.propTypes = {
    /**
     * The children to be rendered.
     */
    children: PropTypes.node,
    /**
     * props passed to the wrapping element for the group.
     */
    innerProps: PropTypes.object,
    selectProps: PropTypes.object.isRequired,
};

/*
function SingleValue(props) {
    return (
        <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
        {props.children}
        </Typography>
    );
}
*/

SingleValue.propTypes = {
    /**
     * The children to be rendered.
     */
    children: PropTypes.node,
    /**
     * Props passed to the wrapping element for the group.
     */
    innerProps: PropTypes.any.isRequired,
    selectProps: PropTypes.object.isRequired,
};
  
function ValueContainer(props) {
    return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

ValueContainer.propTypes = {
    /**
     * The children to be rendered.
     */
    children: PropTypes.node,
    selectProps: PropTypes.object.isRequired,
};

/*
function MultiValue(props) {
    return (
        <Chip
        tabIndex={-1}
        label={props.children}
        className={clsx(props.selectProps.classes.chip, {
            [props.selectProps.classes.chipFocused]: props.isFocused,
        })}
        onDelete={props.removeProps.onClick}
        deleteIcon={<CancelIcon {...props.removeProps} />}
        />
    );
}
*/
  
MultiValue.propTypes = {
    children: PropTypes.node,
    isFocused: PropTypes.bool.isRequired,
    removeProps: PropTypes.shape({
        onClick: PropTypes.func.isRequired,
        onMouseDown: PropTypes.func.isRequired,
        onTouchEnd: PropTypes.func.isRequired,
    }).isRequired,
    selectProps: PropTypes.object.isRequired,
};
  
/*
function Menu(props) {
    return (
        <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
            {props.children}
        </Paper>
    );
}
*/
  
Menu.propTypes = {
    /**
     * The children to be rendered.
     */
    children: PropTypes.element.isRequired,
    /**
     * Props to be passed to the menu wrapper.
     */
    innerProps: PropTypes.object.isRequired,
    selectProps: PropTypes.object.isRequired,
};

const components = {
    Control,
    Menu,
    MultiValue,
    NoOptionsMessage,
    Option,
    Placeholder,
    SingleValue,
    ValueContainer,
};

/*
export default function IntegrationReactSelect() {
    const classes = useStyles();
    const theme = useTheme();
    const [single, setSingle] = React.useState(null);
    const [multi, setMulti] = React.useState(null);
  
    const handleChangeSingle = value => {
        setSingle(value);
    };
  
    const handleChangeMulti = value => {
        setMulti(value);
    };
  
    
    const selectStyles = {
        input: base => ({
            ...base,
            color: theme.palette.text.primary,
            '& input': {
                font: 'inherit',
            },
        }),
    };
    
  
    return (
      <div className={classes.root}>
        <NoSsr>
            <Select
                classes={classes}
                styles={selectStyles}
                inputId="react-select-single"
                TextFieldProps={{
                    label: 'Country',
                    InputLabelProps: {
                        htmlFor: 'react-select-single',
                        shrink: true,
                    },
                }}
                placeholder="Search a country (start with a)"
                options={languages}
                components={components}
                value={single}
                onChange={handleChangeSingle}
            />
        </NoSsr>
    </div>
  );
}
*/


class Translate extends React.Component {
    constructor(props) {
        // Initialize mutable state
        super(props);
        this.state = { english: "none", translate: "none" };
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