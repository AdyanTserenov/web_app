import React, { Component } from "react";
import MyItem from "./MyItem";
export class MyItems extends Component {
    render() {
        return (
            <main>
                {this.props.items.map(el => el.created_by === this.props.user.id && (
                    <MyItem deleteItem={this.props.deleteItem} onShowItem={this.props.onShowItem} key={el.id} item={el} user={this.props.user}/>
                ))}
            </main>
        )
    }
}

export default MyItems
