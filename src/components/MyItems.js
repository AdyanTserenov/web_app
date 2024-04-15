import React, { Component } from "react";
import MyItem from "./MyItem";
import axios from "axios";
export class MyItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        }
        this.loadMe = this.loadMe.bind(this)
        this.loadMe()
    }
    render() {
        return (
            <main>
                {this.props.items.map(el => el.created_by === this.state.data.id && (
                    <MyItem deleteItem={this.props.deleteItem} onShowItem={this.props.onShowItem} key={el.id} item={el} user={this.state.data}/>
                ))}
            </main>
        )
    }

    loadMe() {
        let data
        let config = {
            headers: {
                Authorization: `Bearer ${localStorage.auth_token}`
            }
        }
        axios.get("https://api.dev.kodlmsh.ru/api/users/me/", config)
            .then((response) => {
                data = {
                    id: response.data.id,
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    email: response.data.email,
                    phone: response.data.phone_number,
                    img: "no-avatar.webp",
                    feedback: "0",
                    rating: "0",
                    confirmed: "yes"
                }
                this.setState({data: data})
            })
    }
}

export default MyItems
