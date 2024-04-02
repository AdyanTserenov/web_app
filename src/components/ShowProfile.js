import React, {Component} from 'react';
import {FaStar} from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export class ShowProfile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="show-profile">
                <div>
                    <FaEdit className="edit-button" onClick={() => this.props.onShowItem(this.props.user)}/>
                    <img src={"../img/" + this.props.user.img} />
                    <h2>{this.props.user.last_name} {this.props.user.first_name}</h2>
                    <p>Отзывов: {this.props.user.feedback}</p>
                    <p>Рейтинг: <FaStar className="rating"/>{this.props.user.rating}</p>
                    {this.props.user.confirmed === "yes" && (
                        <h3>Подтвержден</h3>
                    )}
                    {this.props.user.confirmed !== "yes" && (
                        <h3>Не подтвержден</h3>
                    )}
                    <p>Телефон: {this.props.user.phone}</p>
                </div>
            </div>
        );
    }
}

export default ShowProfile;