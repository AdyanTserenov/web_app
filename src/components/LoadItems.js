import React, { Component } from "react";

export class LoadItems extends Component {
    constructor(props) {
        super(props);
        this.props.loadItems()
    }

    render() {
        return (console.log("loading items"))
    }
}
