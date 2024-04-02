import React, {Component} from "react";
import Userfront from "@userfront/toolkit/react";
import {LogoutButton} from "@userfront/toolkit";
import ShowProfile from "./ShowProfile";


export class Profile extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="profile">
            <div>
                <ShowProfile user={this.props.user} onShowItem={this.props.onShowItem}/>
                <div className="logout">
                    <LogoutButton onClick={Userfront.logout}/></div>
            </div>
        </div>
    }
}
