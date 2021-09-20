import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <p>{str}</p>);
}