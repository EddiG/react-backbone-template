'use strict'

const React = require('react');
const TempCollection = require('../Models/TempCollection.js');
const TempModel = require('../Models/TempModel.js');

var ListItemWrapper = React.createClass({
    render: function () {
        return <li>{this.props.data.get('Title')}</li>;
    }
});

module.exports = React.createClass({
    displayName: "TempComponent.jsx",

    getInitialState: function () {
        let tempCollection = new TempCollection();

        let tempModel1 = new TempModel();
        tempModel1.set('Title', "Temp Model 1");

        let tempModel2 = new TempModel();
        tempModel2.set('Title', "Temp Model 2");

        tempCollection.add([tempModel1, tempModel2]);

        return {
            TempCollectionInstance: tempCollection
        };
    },

    render: function () {
        return (
            <ul>{
                this.state.TempCollectionInstance.map((TempModelInstance) => {
                    return (<ListItemWrapper key={TempModelInstance.get('UniqueId') } data={TempModelInstance} />);
                })
            }</ul>
        );
    }
});