import React, {Component} from 'react';
import {FaStar} from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import axios from "axios";

export class ShowFullItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ""
        }
        this.findUserById = this.findUserById.bind(this)
        this.findUserById(this.props.item.created_by)
    }
    render() {
        return (
            <div className="full-item">
                <div>
                    <FaRegWindowClose className="close" onClick={() => this.props.onShowItem(this.props.item)}/>
                    <img src={"./img/" + this.state.user.img}/>
                    {this.props.item.type === "S" && (
                        <h1>Услуга</h1>
                    )}
                    {this.props.item.type !== "S" && (
                        <h1>Заказ</h1>
                    )}

                    <h2>{this.state.user.last_name} {this.state.user.first_name}</h2>

                    <h3>{this.props.item.category === 'farm' && "Сельское хозяйство"}</h3>
                    <h3>{this.props.item.category === 'renovation' && "Ремонт квартир"}</h3>
                    <h3>{this.props.item.category === 'repair' && "Автосервис"}</h3>
                    <h3>{this.props.item.category === 'building' && "Строительство"}</h3>
                    <h3>{this.props.item.category === 'other' && "Прочее"}</h3>

                    <p className="desk">{this.props.item.desc}</p>
                    <p>Отзывов: {this.state.user.feedback}</p>
                    <p>Рейтинг: <FaStar className="rating"/>{this.state.user.rating}</p>
                    <b>{this.props.item.price}₽</b>
                    {this.state.user.confirmed === "yes" && (
                        <h3>Подтвержден</h3>
                    )}
                    {this.state.user.confirmed !== "yes" && (
                        <h3>Не подтвержден</h3>
                    )}
                    <p>Телефон: {this.state.user.phone}</p>
                </div>
            </div>
        );
    }

    findUserById(creator_id) {
        if (creator_id !== undefined) {
            let config = {
                headers: {
                    Authorization: `Bearer ${localStorage.auth_token}`
                }
            }
            axios.get(`https://api.dev.kodlmsh.ru/api/users/authuser/${creator_id}`, config)
                .then((response) => {
                    response.data = {
                        id: response.data.id,
                        first_name: response.data.first_name,
                        last_name: response.data.last_name,
                        email: response.data.email,
                        phone: response.data.phone_number,
                        img: "no-avatar.webp",
                        feedback: 0,
                        rating: 0,
                        confirmed: "yes"
                    }
                    this.setState({user: response.data})
                })
                .catch(function (error) {
                    console.log(error.response)
                })
        }
    }
}

export default ShowFullItem;