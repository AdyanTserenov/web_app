import React, {Component} from "react";
import ShowProfile from "./ShowProfile";
import axios from "axios";


export class Profile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        }
        this.loadMe = this.loadMe.bind(this)
        this.loadMe()
    }
    render() {
        return <div className="profile">
            <div>
                <ShowProfile user={this.state.data} onShowItem={this.props.onShowItem}/>
                <div className="logout">
                    <button onClick={this.logout}>Выйти</button>
                </div>
            </div>
        </div>
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
                localStorage.setItem("user_id", data.id)
            }).catch((refresh) => console.log(refresh));
    }

    logout() {
        localStorage.removeItem("auth_token")
        window.location.reload()
    }
}
