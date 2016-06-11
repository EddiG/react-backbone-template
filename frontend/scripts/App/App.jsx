'use strict'

var $ = require('jquery');

$(document).ready(() => {

    const React = require('react');
    const ReactDOM = require('react-dom');
    const TempComponent = require('./Components/TempComponent.jsx');


    let content = document.getElementById('content');
    if (content)
        ReactDOM.render(<TempComponent />, content);
});